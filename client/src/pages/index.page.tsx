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
  const createClick = () => {
    const newGameBoard = JSON.parse(JSON.stringify(gameBoard));
    for (let x = 0; x < 9; x++) {
      for (let y = 0; y < 9; y++) {
        const i: number = Math.floor(Math.random() * 10);
        // const i = 2;
        newGameBoard[y][x] = i;
      }
    }
    setGameBoard(newGameBoard);
  };
  console.table(gameBoard);

  if (!hoge) return <Loading visible />;

  return (
    <>
      <div className={styles['game-board']}>
        {gameBoard.map((row, y) =>
          row.map((value, x) => (
            <div className={styles.cell} key={`${x}-${y}`}>
              <div className={styles.value}>{value ? value : 0}</div>
            </div>
          ))
        )}
      </div>
      <p className={styles['button-board']}>
        <div className={styles['reset-bottun']}>リセット</div>
        <div className={styles['create-button']} onClick={createClick}>
          生成
        </div>
      </p>
    </>
  );
};

export default Home;
