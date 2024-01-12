import React, { useState } from "react";
import "./Cards.scss";
import { Modal } from "..";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiCopy } from "react-icons/fi";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Import the SQL language definition for PrismLight
import sql from 'react-syntax-highlighter/dist/esm/languages/prism/sql';

// Register the SQL language definition
SyntaxHighlighter.registerLanguage('sql', sql);

export const UserCard = (props) => {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const {
    user = {
      displayName: "Loading...",
      email: "Loading...",
      photoURL: "Loading...",
      uid: null,
    },
    className = "",
    ...rest
  } = props;

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }

  const formattedScript = user.script.replace(/\\n/g, '\n');
  // const scriptWithLineBreaks = formattedScript.replace(/\\n/g, '<br>');


  return (
    <>
    <div className={`fl user ${className}`} onClick={()=>setIsOpen(true)}>
      <div className="p-rel fl c-p w-100" {...rest}>

        <div className="user-data fl fl-d-col pl-1 c-p">
          <div className="name-data fl lhinit ellipsis">
            <div className="fl fl-j-sb">
              <div className="name-item ellipsis">{user.name}</div>
            </div>
          </div>

          <div className="message-data fl fl-j-sb lhinit">
            <div className="message-item ellipsis">
              {formattedScript}
            </div>
          </div>
        </div>
      </div>
    </div>
          <Modal open={isOpen} onClose={()=>setIsOpen(false)} className='p-1'>
            <span className="modal-header text-center mb-1 c-p">{user.name}
              <CopyToClipboard text={formattedScript} onCopy={handleCopy}>
        <span className="lhinit pl-1">{copied ? 'Copied!' : <><FiCopy /> Copy</>}</span>
      </CopyToClipboard></span>
            {/* <div className="modal-body w-100" style={{overflowY: 'scroll'}} dangerouslySetInnerHTML={{__html: scriptWithLineBreaks}}/> */}

            <div className="modal-body w-100">
              
            <CodeSnippet  language="sql" code={formattedScript} />
            </div>

            </Modal>
            </>
  );
};

export const CodeSnippet = ({ language, code }) => {
  return (
    <SyntaxHighlighter language={language} style={prism} className='p-1 pl-2 syntax-highlighter'>
      {code}
    </SyntaxHighlighter>
  );
};