import { useEffect, useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';

const Home = () => {
  const hoge = true;
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
  // まず、そのマスに入る数字が行、列、３×３でダブらないかをチェックする関数をそれぞれ作成する
  const bePlaced = (newGameBoard: number[][], x: number, y: number, numCandidate: number[]) => {
    const index = Math.floor(Math.random() * numCandidate.length);
    const n = numCandidate[index];
    if (numCandidate.length === 0) {
      console.log(`${x}-${y}：行、列、３×３のどこかでダブりが発生`);
      return 'NG';
    }
    if (canBePlaced(newGameBoard, x, y, n)) {
      newGameBoard[y][x] = n;
    } else {
      numCandidate.splice(index, 1);
      bePlaced(newGameBoard, x, y, numCandidate);
    }
  };
  const canBePlaced = (newGameBoard: number[][], x: number, y: number, n: number) => {
    if (
      checkBox(newGameBoard, x, y, n) &&
      checkRow(newGameBoard, x, y, n) &&
      checkCol(newGameBoard, x, y, n)
    ) {
      return true;
    } else {
      return false;
    }
  };
  const checkBox = (newGameBoard: number[][], x: number, y: number, n: number) => {
    const yBox = [...Array(3)].map((_, i) => i + Math.floor(y / 3) * 3);
    const xBox = [...Array(3)].map((_, i) => i + Math.floor(x / 3) * 3);
    let ok = true;
    for (const row of yBox) {
      xBox.forEach((col) => newGameBoard[row][col] === n && (ok = false));
    }
    return ok;
  };
  const checkRow = (newGameBoard: number[][], x: number, y: number, n: number) => {
    if (newGameBoard[y].includes(n)) {
      return false;
    } else {
      return true;
    }
  };
  const checkCol = (newGameBoard: number[][], x: number, y: number, n: number) => {
    let ok = true;
    newGameBoard.forEach((row) => row[x] === n && (ok = false));
    return ok;
  };
  const createClick = () => {
    const newGameBoard: number[][] = JSON.parse(JSON.stringify(gameBoard));
    zeroToEight.forEach((row) =>
      zeroToEight.forEach((col) => {
        const numCandidate: number[] = oneToNine.concat();
        bePlaced(newGameBoard, col, row, numCandidate);
      })
    );
    setGameBoard(newGameBoard);
    setIsPlaying(true);
  };
  // ここまで

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
