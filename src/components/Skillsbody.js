import React from 'react'

export default function Skillsbody() {
    function Skillbar(props) {
        return (
            <>
                <div className='stype'>
                    <div className="progress-container">
                        <svg className="progress-circle" width="100" height="100">
                            <circle className="background-circle" cx="50" cy="50" r="80"></circle>
                            <circle style={{ '--k': props.percentage }} className="progress-bar" cx="50" cy="50" r="40"></circle>
                        </svg>
                        <div className="progress-text">{props.percentage}%</div>
                    </div>
                    <p className='skillpara2'>{props.Skilltxt}</p>
                </div>
            </>
        )
    }

    function Tskills(props) {
        return (
            <>
                <div className="skill">
                    <p className='skillpara'>{props.language}</p>
                    <div className="pnbar">
                        <div className="outerbar">
                            <div style={{ '--j': props.percentage }} className="innerbar"></div>
                        </div>
                        <p className='skillpara1'>{props.percentage}</p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='skillbody'>
            <h1>My Skills</h1>
            <div className="SkillCard">
            <div className='skill-container'>
                <div className='Tskills'>
                    <h3 style={{textAlign:"center"}}>Technical Skills :</h3>
                    <div className="skills">
                        <Tskills language="HTML" percentage="100%"/>
                        <Tskills language="CSS" percentage="90%"/>
                        <Tskills language="JavaScript" percentage="90%"/>
                        <Tskills language="ReactJs" percentage="70%"/>
                        <Tskills language="C" percentage="94%"/>
                        <Tskills language="JAVA" percentage="95%"/>
                        <Tskills language="PYTHON" percentage="85%"/>
                        <Tskills language="Opencv" percentage="90%"/>
                        <Tskills language="SQL" percentage="80%"/>
                        <Tskills language="MONGODB" percentage="70%"/>
                    </div>
                </div>
                <div className='Pskills'>
                    <h3>Professional Skills</h3>
                    <div className="pskills">
                        {<Skillbar percentage="88" Skilltxt="Creativity" />}
                        {<Skillbar percentage="75" Skilltxt="Problem Solving" />}
                        {<Skillbar percentage="80" Skilltxt="Communication" />}
                        {<Skillbar percentage="70" Skilltxt="TeamWork" />}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
