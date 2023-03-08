import React from 'react'
import styles from "../styles/Home.module.css";

const Drill = () => {

        const grid = [];
        const current = [];
        const chroma = require('chroma-js');
        const earthPalette = chroma.bezier(['green', 'brown', 'black', 'red', 'yellow']).scale().colors(100);
        const earthPaletteScaled = chroma.scale(['green', 'brown', 'black', 'red', 'yellow']).colors(100);

        function isRunning(currentHeight: boolean, won: boolean) {
            return !won && currentHeight && Math.random() < 0.5;
        }

        function isBroken(currentHeight: boolean, isRunning: boolean, won: boolean) {
            return !won && currentHeight && !isRunning;
        }

        function finished(currentHeight) {
            return currentHeight == 100;
        }

        for (let i = 0; i < 150; i++) {
            const column = []
            const randomNumber = Math.floor(Math.random() * 101)

            for (let j = 0; j < 100; j++) {
                let color;

                const won = finished(randomNumber);
                if (randomNumber <= j) {
                    color = '#0f1318';
                } else {
                    color = earthPalette[j];
                }
                const running = isRunning(randomNumber == j, won);
                const broken = isBroken(randomNumber == j, running, won);

                column.push(
                    <div key={j} className={"cube"} style={{backgroundColor: color}}>
                        <div className={running ? "dot" : ""}></div>
                        <div className={broken ? "dead" : ""}></div>
                        <div className={randomNumber > j && Math.random() < 0.05 ? "won" : ""}></div>
                        <div className={randomNumber > j && Math.random() < 0.005 ? "coin" : ""}></div>
                    </div>
                )
            }
            current.push(
                <div key={i} style={{display: "flex", flexDirection: "column"}}>
                    <div key={-1} className={"cube"} style={{backgroundColor: randomNumber == 100 ? 'white' :  earthPaletteScaled[randomNumber]}}>
                    </div>
                </div>
            )
            grid.push(
                <div key={i} style={{display: "flex", flexDirection: "column"}}>
                    {column}
                </div>
            )
        }

        return (
            <div className={styles.container}>
                <main className={styles.main}>
                    <div style={{display: "flex"}}>
                        {current}
                    </div>
                    <hr/>
                    <div style={{display: "flex"}}>
                        {grid}
                    </div>
                </main>
            </div>
        )
    }
;


export default Drill
