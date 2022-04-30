import { useEffect, useRef} from "react";
import { CodeJar } from "codejar";

interface Props {
  code: string;
  onChange: (code: string) => void
  highlighter: (e: HTMLElement) => void;
}
  
export const useCodeJar = ({ code, onChange, highlighter }: Props) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const jar = useRef<CodeJar | null>(null);

  useEffect(() => {
    if (!editorRef.current) {
      return;
    }

    jar.current = CodeJar(editorRef.current, highlighter, {});
    jar.current.updateCode(code);

    jar.current.onUpdate((text) => {
      if (!editorRef.current) {
        return;
      }

      onChange(text);
    });

    return () => jar.current?.destroy();
  }, []);

  

  return editorRef;
};

