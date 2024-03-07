import React, { useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';

const Compiler = () => {
    const handleChange = (value) => {
        console.log("Editor content changed:", value);
    };

    const [mode, setMode] = useState('python'); 
    const [value, setValue] = useState('print("hello world!)');

    const changeLanguage = (event) => {
        const selectedLanguage = event.target.value;

        
        const modeMapping = {
            'python': 'python',
            'c': 'c_cpp',
           
            'java': 'java'
            
        };

      
        const selectedMode = modeMapping[selectedLanguage];
        let selectedValue = '';
        if(selectedLanguage === "python") {
            selectedValue = 'print("Hello, world!")';
        } else if(selectedLanguage === "java") {
            selectedValue = 'public class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello, world!");\n\t}\n}';
        } else if(selectedLanguage === "c" || selectedLanguage === "c++") {
            selectedValue = '#include <stdio.h>\n\nint main() {\n\tprintf("Hello, world!\\n");\n\treturn 0;\n}';
        }

       
        if (selectedMode) {
           
            setMode(selectedMode);
            setValue(selectedValue);
        }
    };
function handleSubmit(){

};
    return (
        <>
            <div className="container-fluid Header row">
                <div className='col-9'>
                    <h3>inga header edhachum podra </h3>
                </div>
                
                <div className='col-1'>
                    <form>
              <button type='submit' onSubmit={handleSubmit} className='btn btn-info'>submit</button>
                        </form>
                </div>
                <div className='col-2 lang'>Select Language:
                    <select id="languages" onChange={changeLanguage} className="languages">
                        <option>python</option>
                        <option>c</option>
                       
                        <option>java</option>
                    </select>
                </div>
            </div>
            <div className="container-fluid row">
                <div className="col-4 question">
                    <h3>print sum of N numbers:</h3>
                    <p>
                    "Given an integer n, the task is to find the sum of the first n natural numbers. 
                    </p>
                   
                </div>
                <div className="col-8">
                <div className="col-12 editor">
                    <AceEditor
                        mode={mode} 
                        theme="monokai"
                        onChange={handleChange}
                        value={value}
                        editorProps={{ $blockScrolling: true }}
                        style={{ width: '100%', height: '500px' }}
                    />
                </div>
                <div className="col-12 outputTerminal">output terminal</div>
                </div>
            </div>
        </>
    );
};

export default Compiler;
