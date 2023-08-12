import { useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import styles from './index.module.css';

const Home = () => {
  const hoge = true;
  // const newRows = 9;
  // const newCols = 9;
  // const nomalBoard: number[][] = new Array(newRows).fill(0).map(() => new Array(newCols).fill(0));
  const nomalBoard: 0[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  const [gameBoard, setGameBoard] = useState<number[][]>(nomalBoard);
  const checkColNumbers = (colIdx: number, creatingBoard: number[][]) => {
    const colNumbers = creatingBoard.map((row) => row[colIdx]);
    for (let i = 1; i <= 9; i++) {
      if (!colNumbers.includes(i)) {
        return i;
      }
    }
    return 0;
  };
  const checkRowNumbers = (row: number[]) => {
    for (let i = 1; i <= 9; i++) {
      if (!row.includes(i)) {
        return i;
      }
    }
    return 0;
  };
  const createClick = () => {
    const newGameBoard: number[][] = JSON.parse(JSON.stringify(gameBoard));
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        const rowNumber = checkRowNumbers(newGameBoard[y]);
        const colNumber = checkColNumbers(x, newGameBoard);
        newGameBoard[y][x] = Math.min(rowNumber, colNumber);
      }
    }
    setGameBoard(newGameBoard);
  };

  const resetClick = () => {
    setGameBoard(nomalBoard);
  };
  console.table(gameBoard);

  if (!hoge) return <Loading visible />;

  return (
    <>
      <div className={styles['game-board']}>
        {gameBoard.map((row, y) =>
          row.map((value, x) => (
            <div className={styles.cell} key={`${x}-${y}`}>
              <div className={styles.value}>{value}</div>
            </div>
          ))
        )}
      </div>
      <p className={styles['button-board']}>
        <div className={styles['reset-bottun']} onClick={resetClick}>
          リセット
        </div>
        <div className={styles['create-button']} onClick={createClick}>
          生成
        </div>
      </p>
    </>
  );
};

export default Home;
