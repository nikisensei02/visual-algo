import { useState } from "react";
let i = 0;
let minIndex = 0;
let minNumber = Number.MAX_SAFE_INTEGER;
let j = 0;
const Selection = () => {
    const [elements, setElements] = useState("");
    const [charArray, setCharArray] = useState([]);
    const [history, setHistory] = useState([]);
    const [highlightIndex, setHighlightIndex] = useState(null);
    const [highlightSwapIndex, setHighlightSwapIndex] = useState(0);
    const [reset, setReset] = useState(false);
    const [changeInput, setChangeInput] = useState(0);
    const [numbers, setNumbers] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [maxCount, setMaxCount] = useState(0);
    const [isMaxSet, setIsMaxSet] = useState(false);
    const [isMaxReached, setIsMaxReached] = useState(false);

    const handleMaxCountChange = (e) => {
        setMaxCount(parseInt(e.target.value, 10));
    };

    const handleMaxCountSet = () => {
        if (maxCount > 10 || maxCount < 1) {
            setMaxCount(0);
            alert("Please enter Value less than or equal to 10 and greater than 0");
            return;
        }
        setIsMaxSet(true);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddNumber = () => {
        if (numbers.length < maxCount) {
            setNumbers([...numbers, parseFloat(inputValue)]);
            setInputValue('');
            if (numbers.length + 1 === maxCount) {
                setIsMaxReached(true);
            }
        }
    };

    const nextIteration = () => {

        let sortedArray = [...charArray];

        let n = sortedArray.length;

        if (i === n - 1) {
            alert("Great work!!! array is sorted");
            setReset(true);
            return
        }

        setHighlightIndex(null);
        setHighlightSwapIndex(0);

        if (j < n) {
            if (sortedArray[j] < minNumber) {
                minNumber = sortedArray[j];
                minIndex = j;
            }
            setHighlightIndex(j);
            j++;
            setCharArray(sortedArray);
            console.log(minNumber, ' ', minIndex);
        } else {
            console.log(sortedArray[i], '->', sortedArray[minIndex]);
            [sortedArray[i], sortedArray[minIndex]] = [sortedArray[minIndex], sortedArray[i]];
            setHighlightIndex(j);
            setHighlightSwapIndex(1);
            setCharArray(sortedArray);
            setHistory([...history, sortedArray]);
            minNumber = Number.MAX_SAFE_INTEGER;
            i++;
            j = i;
        }




    };

    const handleChange = (e) => {
        setElements(e.target.value);
    };
    const handleReset = () => {
        location.reload(0);
    };
    const handleInputMode = () => {
        setChangeInput(changeInput => !changeInput);
    }
    const handleSubmit = () => {
        if (!elements) {
            alert("please enter some data!!");
            return;
        }
        const arrayFromElements = elements.split('');
        for (let i = 0; i < arrayFromElements.length; i++) {
            if (isNaN(arrayFromElements[i]) || arrayFromElements[i].trim() === '') {
                alert("The array contains elements other than numbers.");
                return;
            }
        }
        setCharArray(arrayFromElements);
        setHistory([arrayFromElements]);
    };
    const handleSubmitArray = () => {
        if (numbers.length !== maxCount || numbers.length === 0) {
            alert("please add elements");
            return
        }
        setCharArray(numbers);
        setHistory([numbers]);
    }

    return (
        <div className="flex justify-center items-top  p-4 bg-gray-400 min-h-screen">
            <div className="border-2 p-6 mt-[10vw] rounded min-w-[30vw] min-h-[20vw]">
                <div className="">
                    <h1 className="text-center text-2xl m-2">Selection Sort</h1>
                    {
                        changeInput ?
                            <div>
                                <div>
                                    <h1>Number</h1>
                                    {!isMaxSet ? (
                                        <div>
                                            <input
                                                type="number"
                                                value={maxCount}
                                                onChange={handleMaxCountChange}
                                                placeholder="Enter number of elements"
                                            />
                                            <button className="px-2 py-1 mx-2 text-sm bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75" onClick={handleMaxCountSet}>Set No. of Elements</button>
                                        </div>
                                    ) : (
                                        <div>
                                            <input
                                                type="number"
                                                value={inputValue}
                                                onChange={handleInputChange}
                                                placeholder="Enter a number"
                                                disabled={isMaxReached}
                                            />
                                            <button className="mx-4 px-2 py-1 text-sm bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75" onClick={handleAddNumber} disabled={isMaxReached}>
                                                Add Number
                                            </button>
                                            {isMaxReached && <p>Maximum number of inputs reached.</p>}
                                            <h2>Array:</h2>
                                            <ul className="flex">
                                                {numbers.map((number, index) => (
                                                    <li key={index}>{number} &nbsp;</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                <div className={`flex justify-center my-4 ${reset ? 'hidden' : 'block'}`}>
                                    <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={handleSubmitArray}>Submit</button>
                                </div>
                                <div className="flex justify-end  text-blue-700">
                                    <button className="cursor-pointer hover:text-white" onClick={handleInputMode}>have a String of elements?</button>
                                </div>
                            </div>
                            :
                            <div>
                                <input
                                    type="text"
                                    placeholder="Enter the elements String"
                                    value={elements}
                                    onChange={handleChange}
                                    className="border-2 w-full text-center bg-slate-300"
                                />
                                <div className={`flex justify-center my-4 ${reset ? 'hidden' : 'block'}`}>
                                    <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={handleSubmit}>Submit</button>
                                </div>
                                <div className="flex justify-end  text-blue-700">
                                    <button className="cursor-pointer hover:text-white" onClick={handleInputMode}>have multiple elements?</button>
                                </div>
                            </div>
                    }

                    {/* <div className={`flex justify-center my-4 ${reset ? 'hidden' : 'block'}`}>
                        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={handleSubmit}>Submit</button>
                    </div> */}
                    <div className={`flex justify-center my-4 ${reset ? 'block' : 'hidden'}`}>
                        <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75" onClick={handleReset}>Reset Data</button>
                    </div>

                </div>
                <div>
                    <div>
                        <div className="flex">
                            <h2 className="font-semibold">Sorted Steps: </h2>
                            <p className={`${highlightSwapIndex ? 'block' : 'hidden'}`}> &nbsp;swaping {i-1}th and {minIndex}th index</p>
                        </div>
                        {history.slice().reverse().map((stepArray, index) => (
                            <div key={index} className="flex items-center">
                                <h3 className="mb-6 min-w-16">Step {history.length - index}: </h3>
                                <ul className="flex items-center">
                                    {stepArray.map((char, idx) => (
                                        <li key={idx} className={`p-1 m-1 flex-col`}>
                                            <p className="p-2 border-2">
                                                {char}
                                            </p>
                                            <p className={`${highlightIndex === idx || i === idx ? 'text-black' : 'text-gray-400'}`}>
                                                &nbsp;&nbsp;^
                                            </p>
                                        </li>
                                    ))}
                                    <div className="flex  mb-6 mx-2 ">
                                        <p className="mx-2">minimum element = </p>
                                        <p className="bg-green-600 border-green-900 p-1 text-white min-w-4 min-h-8">{minNumber === Number.MAX_SAFE_INTEGER ? '' : minNumber}</p>
                                    </div>
                                    <button className="px-2 rounded-xl bg-blue-300 w-fit h-fit mb-6" onClick={nextIteration}>Next Iteration</button>
                                </ul>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Selection;
