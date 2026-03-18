import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,es,fr,de,pt,ar,ru,ja,ko,zh-CN",
        },
        "google_translate_element"
      );
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      className="text-sm text-white"
    ></div>
  );
}