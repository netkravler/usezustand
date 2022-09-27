import React, { useEffect } from "react";

import { Flashmessage } from "./FloatingAlerts.Styled";
import { useFlashMessageStore } from "./useFlashMessageStore";

const FlashMessages = () => {
  //how long should the flashmessage be shown
  const flashDuration = 5000;

  const { flashMessageges, removeFlashmessage } = useFlashMessageStore((store) => ({
    flashMessageges: store.flashMessageges,
    removeFlashmessage: store.removeFlashmessage,
  }));

  //remove the message according to the time in flashDuration
  useEffect(() => {
    let flashTimer = setTimeout(() => removeFlashmessage(), flashDuration);
    return () => {
      clearTimeout(flashTimer);
    };
  }, [flashMessageges, removeFlashmessage]);

  return (
    flashMessageges && (
      <>
        <Flashmessage className="floating-alerts" flashDuration={flashDuration}>
          <div className="alert alert-success text-center floating-alert shadow-sm">{flashMessageges}</div>
        </Flashmessage>
      </>
    )
  );
};

export default FlashMessages;
