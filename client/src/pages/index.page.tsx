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
  const checkRowNumber = (subX: number, subY: number, creatingBoard: number[][]) => {
    const i: number = Math.floor(Math.random() * 10);
    if (i !== 0 && !creatingBoard[subY].includes(i)) {
      creatingBoard[subY][subX] = i;
    } else {
      checkRowNumber(subX, subY, creatingBoard);
    }
  };
  const createClick = () => {
    const newGameBoard: number[][] = JSON.parse(JSON.stringify(gameBoard));
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        checkRowNumber(x, y, newGameBoard);
      }
    }
    setGameBoard(newGameBoard);
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
  console.table(gameBoard);

  if (!hoge) return <Loading visible />;

  return (
    <>
      <div className={styles.time}>{timeCount}</div>
      <div className={styles['game-board']}>
        {gameBoard.map((row, y) =>
          row.map((value, x) => (
            <div className={styles.cell} key={`${x}-${y}`}>
              <div className={styles.value} style={{ color: value === 0 ? 'beige' : 'black' }}>
                {value}
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
