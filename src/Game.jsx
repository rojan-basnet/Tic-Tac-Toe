import React, { useEffect, useState } from 'react'
import { toast ,Toaster} from 'sonner';

const Game = () => {
    const [option,setOption]=useState("O");
    const [box,setBox]=useState(["0","1","2","3","4","5","6","7","8"])
    const [clickedBox,setClickedBox]=useState([])
    const [gameEnd,setGameEnd]=useState(false)
    const [winner,setWinner]=useState("")
    const [isWon,setIsWon]=useState(false)
    const [vsRobot,setVsRobot]=useState(false)
    const [used,setUsed]=useState([])
    const [isDraw,setIsDraw]=useState(false)
    const [isSideUsed,setIsSideUsed]=useState(false)
    useEffect(()=>{
       switch (true) {
                case box[0] === box[1] && box[1] === box[2] && box[2]==="X":
                    setWinner("X")
                    setGameEnd(true)
                    setIsWon(true)
                    break;
                case box[0] === box[1] && box[1] === box[2] && box[2]==="O":
                    setWinner("O")
                    setGameEnd(true)
                    setIsWon(true)
                    break;
                case box[3] === box[4] && box[4] === box[5] && box[5]==="X":
                    setWinner("X")
                    setIsWon(true)
                    setGameEnd(true)
                    break;
                case box[3] === box[4] && box[4] === box[5] && box[5]==="O":
                    setWinner("O")
                    setGameEnd(true)
                    setIsWon(true)
                    break;
                case box[6] === box[7] && box[7] === box[8] && box[8]==="X":
                    setWinner("X")
                    setIsWon(true)
                    setGameEnd(true)
                    break;
                case box[6] === box[7] && box[7] === box[8] && box[8]==="O":
                    setWinner("O")
                    setIsWon(true)
                    setGameEnd(true)
                    break;
                case box[0] === box[3] && box[3] === box[6] && box[6]==="X":
                    setWinner("X")
                    setGameEnd(true)
                    setIsWon(true)
                    break;
                case box[0] === box[3] && box[3] === box[6] && box[6]==="O":
                    setWinner("O")
                    setGameEnd(true)
                    setIsWon(true)
                    break;
                case box[1] === box[4] && box[4] === box[7] && box[7]==="X":
                    setWinner("X")
                    setIsWon(true)
                    setGameEnd(true)
                    break;
                case box[1] === box[4] && box[4] === box[7] && box[7]==="O":
                    setWinner("O")
                    setIsWon(true)
                    setGameEnd(true)
                    break;
                case box[2] === box[5] && box[5] === box[8] && box[8]==="X":
                    setWinner("X")
                    setIsWon(true)
                    setGameEnd(true)
                    break;
                case box[2] === box[5] && box[5] === box[8] && box[8]==="O":
                    setWinner("O")
                    setIsWon(true)
                    setGameEnd(true)
                    break;
                case box[0] === box[4] && box[4] === box[8] && box[8]==="X":
                    setIsWon(true)
                    setGameEnd(true)
                    setWinner("X")
                    break;
                case box[0] === box[4] && box[4] === box[8] && box[8]==="O":
                    setWinner("O")
                    setIsWon(true)
                    setGameEnd(true)
                    break;
                case box[2] === box[4] && box[4] === box[6] && box[6]==="X":
                    setWinner("X")
                    setIsWon(true)
                    setGameEnd(true)
                    break;
                case box[2] === box[4] && box[4] === box[6] && box[6]==="O":
                    setWinner("O")
                    setIsWon(true)
                    setGameEnd(true)
                    break;
                }
    },[box])

    useEffect(()=>{
        if(gameEnd) return
        if(isWon) return
        if(!vsRobot) return
        
        if(![0,1,2,3,4,5,6,7,8].some(num=>box.includes(String(num)))){
            setGameEnd(true)
            setIsWon(true)
            setWinner("Draw")
            setIsDraw(true)
        }

        if(option=="O") return
            switch(true){
                case  box[0] === box[1] && box[1] === "O":
                    if(!used.includes(2)){
                        if(box[2]!=="X"){
                            setBox(prev=>{
                            const newA=[...prev]
                            newA[2]="X"
                            return newA
                        })
                        setClickedBox(prev=>[...prev,2])
                        setOption("O")
                        setUsed(prev=>[...prev,2])
                        break;
                        }
                    }
                    
                case box[3]=== box[4] && box[4]==="O":
                    if(!used.includes(5)){
                        if(box[5]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[5]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,5])
                            setOption("O")
                            setUsed(prev=>[...prev,5])
                            break
                        }
                    }

                case box[6]=== box[7] && box[7]==="O":
                    if(!used.includes(8)){
                        if(box[8]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[8]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,8])
                            setOption("O")
                            setUsed(prev=>[...prev,8])
                            break
                        }
                    }
                case box[1]=== box[2] && box[2]==="O":
                    if(!used.includes(0)){
                        if(box[0]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[0]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,0])
                            setOption("O")
                            setUsed(prev=>[...prev,0])
                            break
                        }
                    }
                case box[4]=== box[5] && box[5]==="O":
                    if(!used.includes(3)){
                        if(box[3]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[3]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,3])
                            setOption("O")
                            setUsed(prev=>[...prev,3])
                            break
                        }
                    }
                case box[7]=== box[8] && box[7]==="O":
                    if(!used.includes(6)){
                        if(box[6]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[6]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,6])
                            setOption("O")
                            setUsed(prev=>[...prev,6])
                            break
                        }
                    }
                case box[0]=== box[3] && box[3]==="O":
                    if(!used.includes(6)){
                        if(box[6]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[6]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,6])
                            setOption("O")
                            setUsed(prev=>[...prev,6])
                            break
                        }
                    }
                case box[1]=== box[4] && box[1]==="O":
                    if(!used.includes(7)){
                        if(box[7]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[7]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,7])
                            setOption("O")
                            setUsed(prev=>[...prev,7])
                            break
                        }
                    }
                case box[2]=== box[5] && box[2]==="O":
                    if(!used.includes(8)){
                        if(box[8]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[8]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,8])
                            setOption("O")
                            setUsed(prev=>[...prev,8])
                            break
                        }
                    }
                case box[3]=== box[6] && box[3]==="O":
                    if(!used.includes(0)){
                        if(box[0]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[0]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,0])
                            setOption("O")
                            setUsed(prev=>[...prev,0])
                            break
                        }
                    }
                case box[4]=== box[7] && box[7]==="O":
                    if(!used.includes(1)){
                        if(box[1]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[1]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,1])
                            setOption("O")
                            setUsed(prev=>[...prev,1])
                            break
                        }
                    }
                case box[5]=== box[8] && box[5]==="O":
                    if(!used.includes(2)){
                        if(box[2]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[2]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,2])
                            setOption("O")
                            setUsed(prev=>[...prev,2])
                            break
                        }
                    }
                case box[0]=== box[4] && box[0]==="O":
                    if(!used.includes(8)){
                        if(box[8]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[8]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,8])
                            setOption("O")
                            setUsed(prev=>[...prev,8])
                            break
                        }
                    }
                case box[4]=== box[8] && box[4]==="O":
                    if(!used.includes(0)){
                        if(box[0]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[0]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,0])
                            setOption("O")
                            setUsed(prev=>[...prev,0])
                            break
                        }
                    }
                case box[2]=== box[4] && box[2]==="O":
                    if(!used.includes(6)){
                        if(box[6]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[6]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,6])
                            setOption("O")
                            setUsed(prev=>[...prev,6])
                            break
                        }
                    }
                case box[6]=== box[4] && box[6]==="O":
                    if(!used.includes(2)){
                        if(box[2]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[2]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,2])
                            setOption("O")
                            setUsed(prev=>[...prev,2])
                            break
                        }
                    }
                case box[0]=== box[4] && box[0]==="O":
                    if(!used.includes(8)){
                        if(box[8]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[8]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,8])
                            setOption("O")
                            setUsed(prev=>[...prev,8])
                            break
                        }
                    }
                case box[0]=== box[2] && box[0]==="O":
                    if(!used.includes(1)){
                        if(box[1]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[1]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,1])
                            setOption("O")
                            setUsed(prev=>[...prev,1])
                            break
                        }
                    }
                    case box[3]=== box[5] && box[3]==="O":
                        if(!used.includes(4)){
                            if(box[4]!=="X"){
                                setBox(prev=>{
                                    const newA=[...prev]
                                    newA[4]="X"
                                    return newA
                                })
                                setClickedBox(prev=>[...prev,4])
                                setOption("O")
                                setUsed(prev=>[...prev,4])
                                break
                            }
                        }
                case box[6]=== box[8] && box[6]==="O":
                        if(!used.includes(7)){
                            if(box[7]!=="X"){
                                setBox(prev=>{
                                    const newA=[...prev]
                                    newA[7]="X"
                                    return newA
                                })
                                setClickedBox(prev=>[...prev,7])
                                setOption("O")
                                setUsed(prev=>[...prev,7])
                                break
                            }
                        }
  
                case box[0]=== box[6] && box[0]==="O":
                    if(!used.includes(3)){
                        if(box[3]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[3]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,3])
                            setOption("O")
                            setUsed(prev=>[...prev,3])
                            break
                        }
                    }

                case box[1]=== box[7] && box[1]==="O":
                    if(!used.includes(4)){
                        if(box[4]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[4]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,4])
                            setOption("O")
                            setUsed(prev=>[...prev,4])
                            break
                        }
                    }
                case box[2]=== box[8] && box[2]==="O":
                    if(!used.includes(5)){
                        if(box[5]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[5]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,5])
                            setOption("O")
                            setUsed(prev=>[...prev,5])
                            break
                        }
                    }
                case box[0]=== box[8] && box[0]==="O":
                    if(!used.includes(4)){
                        if(box[4]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[4]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,4])
                            setOption("O")
                            setUsed(prev=>[...prev,4])
                            break
                        }
                    }

                case box[2]=== box[6] && box[2]==="O":
                    if(!used.includes(4)){
                        if(box[4]!=="X"){
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[4]="X"
                                return newA
                            })
                            setClickedBox(prev=>[...prev,4])
                            setOption("O")
                            setUsed(prev=>[...prev,4])
                            break
                        }
                    }



                default:
                    if (option=="X"){
                        if(!clickedBox.includes(4)){
                            setClickedBox(prev=>[...prev,4])
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[4]="X"
                                return newA
                            })
                            setOption("O")
                        }else if(clickedBox.includes(4)&& box[4]=="O" && isSideUsed==false){
                            const sides=['0','2','6','8']
                            const newer=box.filter(ele=>ele!=="O" && ele!=="X")
                            const newarr=newer.filter(ele=>sides.includes(ele))
                            
                            const randIndex=Number(newarr[Math.floor(Math.random() * newarr.length)])

                            setClickedBox(prev=>[...prev,randIndex])
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[randIndex]="X"
                                return newA
                            })
                            setOption("O")
                            setIsSideUsed(true)
                        }
                        else{
                            const newarr=box.filter(ele=>ele!=="O" && ele!=="X")
                            const randIndex=Number(newarr[Math.floor(Math.random() * newarr.length)])

                            setClickedBox(prev=>[...prev,randIndex])
                            setBox(prev=>{
                                const newA=[...prev]
                                newA[randIndex]="X"
                                return newA
                            })
                            setOption("O")
                        }

                    }
            }
        
    },[option])


    function handleOptionChange(i){
        if(isWon) return

        if(box[i]=="O" || box[i]=="X") return

        setClickedBox(prev=>[...prev,i])

        setBox(prev=>{
            const newArray= [...prev]
            newArray[i]=option
            return newArray
        })
        setOption(prev=>prev=="O"?"X":"O")

        if(vsRobot){setUsed([...used,i])}
    }
    function handleNewGame(){
        setIsSideUsed(false)
        setIsDraw(false)
        setIsWon(false)
        setGameEnd(false)
        setBox(["0","1","2","3","4","5","6","7","8"])
        setClickedBox([])
        setOption("O")
        setWinner("")
        setUsed([])
    }
    function handleVsRobot(){
        setIsSideUsed(false)
        setIsDraw(false)
        setIsWon(false)
        setGameEnd(false)
        setBox(["0","1","2","3","4","5","6","7","8"])
        setClickedBox([])
        setOption("O")
        setWinner("")
        setUsed([])
        setOption("O")
        setVsRobot(!vsRobot)
        vsRobot? toast.warning("Robot OFF 🤖❌"):toast.info("Robot mode on 🤖")
    }
  return (
    <>
    <div>
        <div className='mainBox'>
              {Array(9).fill().map((ele, i) => (
                <div key={i} className="box" onClick={()=>handleOptionChange(i)}>{clickedBox.includes(i) ? box[i]:null}</div>
                ))}
        </div>

        <div className='turnShow' style={{textAlign:"center",fontSize:"2rem"}}>
            {option}'s turn
        </div>

        <div className='winnerDisplay' style={{display:isWon?"flex":"none"}}>
                <div className='middleMan'>
                <div className='result'>
                    
                    <h1 className='resText'>

                    {
                        vsRobot?winner=="X"?isDraw?"It's a draw":"Robot Won 🤖":isDraw?"It's a draw":"Player Won":`${winner} Won`
                    }
                        <div className='mainBoxPerview'>
                            {Array(9).fill().map((ele, i) => (
                                <div key={i} className="box" onClick={()=>handleOptionChange(i)}>{clickedBox.includes(i) ? box[i]:null}</div>
                                ))}
                        </div>
                    </h1>
                    <button onClick={handleNewGame}>New Game</button>
                    <button onClick={handleVsRobot}>VS 🤖</button>
                </div>
                </div>

        </div>
            <button onClick={handleNewGame}>New Game</button>
            <button onClick={handleVsRobot}>VS 🤖</button>
        <Toaster richColors/>
    </div>
    </>
  )
}

export default Game