import { useEffect, useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import { apiClient } from 'src/utils/apiClient';
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
  const zeroToEight: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const oneToNine: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeCount, setTimeCount] = useState(0);
  const [gameBoard, setGameBoard] = useState<number[][]>(nomalBoard);
  useEffect(() => {
    if (isPlaying) {
      const plusTimeCount = setInterval(() => {
        setTimeCount(timeCount + 1);
      }, 1000);
      return () => {
        clearInterval(plusTimeCount);
      };
    }
  }, [timeCount, isPlaying]);
  // const checkRowColNumbers = (
  //   x: number,
  //   y: number,
  //   colCheckBoard: number[][],
  //   rowNumbers: number[],
  //   newGameBoard: number[][]
  // ) => {
  //   const index: number = Math.floor(Math.random() * rowNumbers.length);
  //   // ここで縦軸に同じ値がないかの判定
  //   if (colCheckBoard[x].includes(rowNumbers[index])) {
  //     const n: number = rowNumbers[index]; // その座標に入力する値
  //     newGameBoard[y][x] = n;
  //     colCheckBoard[x].splice(
  //       colCheckBoard[x].findIndex((i) => i === n),
  //       1
  //     );
  //     console.log(colCheckBoard[x]);
  //     // console.table(colCheckBoard);
  //     rowNumbers.splice(index, 1);
  //   } else {
  //     checkRowColNumbers(x, y, colCheckBoard, rowNumbers, newGameBoard);
  //   }
  //   //
  // };
  const createClick = () => {
    const newGameBoard: number[][] = JSON.parse(JSON.stringify(gameBoard));
    // const colCheckBoard: number[][] = Array(9).fill([...Array(9)].map((_, i) => i + 1));
    const colCheckBoard: number[][] = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ];
    const rowBox= 
    zeroToEight.forEach((y) => {
      const rowNumbers: number[] = [...oneToNine];
      zeroToEight.forEach((x) => {
        const candidateNumbers = rowNumbers.filter((n) => colCheckBoard[x].includes(n));
        const index: number = Math.floor(Math.random() * candidateNumbers.length);
        const n = candidateNumbers[index]; //  その座標に入れる値
        if (n === undefined) {
          console.log(`colB:${colCheckBoard[x]}, rowNs:${rowNumbers}`);
        }
        newGameBoard[y][x] = n;
        rowNumbers.splice(
          rowNumbers.findIndex((i) => i === n),
          1
        );
        colCheckBoard[x].splice(
          colCheckBoard[x].findIndex((i) => i === n),
          1
        );
      });
    });
    setGameBoard(newGameBoard);
    console.table(newGameBoard);
    setIsPlaying(true);
  };

  const resetClick = () => {
    setGameBoard(nomalBoard);
    setTimeCount(0);
    setIsPlaying(false);
  };
  // const [playerScore, setPlayerScore] = useState(0);
  const roomCreate = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    await apiClient.create.$post();
    console.log(e);
  };

  if (!hoge) return <Loading visible />;

  return (
    <>
      <div className={styles.time}>{timeCount}</div>
      <div className={styles['game-board']}>
        {gameBoard.map((row, y) =>
          row.map((value, x) => (
            <div className={styles.cell} key={`${x}-${y}`}>
              <div
                className={styles.value}
                style={{ color: value <= 0 || value === undefined ? 'beige' : 'black' }}
              >
                {typeof value === 'number' ? value : -10}
              </div>
            </div>
          ))
        )}
      </div>
      <div className={styles['button-board']}>
        <div className={styles['reset-bottun']} onClick={resetClick}>
          リセット
        </div>
        <div className={styles['create-button']} onClick={createClick}>
          生成
        </div>
      </div>
      <div className={styles['room-create']} onClick={roomCreate}>
        登録
      </div>
    </>
  );
};

export default Home;
