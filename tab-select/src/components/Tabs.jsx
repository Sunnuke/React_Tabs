import React, { useState } from 'react';


const Tabs = (props) => {
    const {items, setItems} = props;
    const [tabText, setTabText] = useState("No Tab Has Been Selected! Pick One!");
    
    let select1 = 0;
    let select2 = 0;
    let select3 = 0;

    function change(count, idx) {
        let tab = document.getElementById(idx);
        let info = document.getElementById("info");
        console.log("check" + count);
        if (count === 0) {
            count++;
            tab.classList.add('black');
            if (idx === "t0") {
                info.classList.add('red');
                info.classList.remove('yellow');
                info.classList.remove('green');
            }
            else if (idx === "t1") {
                info.classList.remove('red');
                info.classList.add('yellow');
                info.classList.remove('green');
            }
            else if (idx === "t2") {
                info.classList.remove('red');
                info.classList.remove('yellow');
                info.classList.add('green');
            }
            console.log("+" + count);
        } else {
            count--;
            tab.classList.remove('black');
            console.log("-" + count);
        }
        return count;
    }

    function TabClick1(e) {
        console.log(e);
        console.log(items.items[e.target.id[1]].content, e.target.id);
        setTabText(items.items[e.target.id[1]].content);
        if (e.target.id === "t0" && select1 === 0) {
            select1 = change(select1, e.target.id);
            select2 = 1;
            select3 = 1;
            select2 = change(select2, "t1");
            select3 = change(select3, "t2");
        }
        else if (e.target.id === "t1" && select2 === 0) {
            select2 = change(select2, e.target.id);
            select1 = 1;
            select3 = 1;
            select1 = change(select1, "t0");
            select3 = change(select3, "t2");
        }
        else if (e.target.id === "t2" && select3 === 0) {
            select3 = change(select3, e.target.id);
            select1 = 1;
            select2 = 1;
            select1 = change(select1, "t0");
            select2 = change(select2, "t1");
        }
    };

    return(
        <>
            <div className="tabBar">
                {
                    items.items.map( (tab, i) => 
                        <div key={ i } id={"t" + i} className={tab.css} onClick={TabClick1}>{tab.label}</div>
                    )
                }
            </div>
            <div id="info" className="textBox">
                {tabText}
            </div>
        </>
    );
}
export default Tabs;