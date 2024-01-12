import React, { useState } from "react";
import "./Cards.scss";
import { Modal } from "..";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export const UserCard = (props) => {
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
            <span className="modal-header text-center mb-1">{user.name}</span>
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
    <SyntaxHighlighter language={language} style={docco}>
      {code}
    </SyntaxHighlighter>
  );
};