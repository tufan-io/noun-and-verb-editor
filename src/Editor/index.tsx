import { useEffect } from 'react';
import type { CSSProperties } from 'react';
import Prism from 'prismjs';

import { useCodeJar } from './useCodejar';
import './styles.css';

type Props = {
  code: string
  onChange: (code: string) => void
  styles?: {
    container?: CSSProperties
  }
}

function Editor({ code, onChange, styles }: Props) {
  useEffect(() => {
    globalThis.Prism = Prism;
  }, []);

  const highlighter = (editor: any) => {
    editor.innerHTML = Prism.highlight(
      editor.textContent,
      Prism.languages.prisma,
      'prisma',
    );
  };

  const editorRef = useCodeJar({ code, highlighter, onChange });

  return <div id="editor" style={styles?.container} ref={editorRef} />;
}

export default Editor;
