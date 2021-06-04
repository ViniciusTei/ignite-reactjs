import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
      <>
        <Head>
            <title>Posts | Ignews</title>
        </Head>
        <main className={styles.Container}>
            <div className={styles.PostList}>
                <a href="">
                    <time>12 de marco de 2021</time>
                    <strong>Creating a monorepo with leran and yarn</strong>
                    <p>Primeiro eu queria cumprimentar os internautas. -Oi Internautas! Depois dizer que o meio ambiente é sem dúvida nenhuma uma ameaça ao desenvolvimento sustentável. E isso significa que é uma ameaça pro futuro do nosso planeta e dos nossos países. O desemprego beira 20%, ou seja, 1 em cada 4 portugueses</p>
                </a>
                <a href="">
                    <time>12 de marco de 2021</time>
                    <strong>Creating a monorepo with leran and yarn</strong>
                    <p>Primeiro eu queria cumprimentar os internautas. -Oi Internautas! Depois dizer que o meio ambiente é sem dúvida nenhuma uma ameaça ao desenvolvimento sustentável. E isso significa que é uma ameaça pro futuro do nosso planeta e dos nossos países. O desemprego beira 20%, ou seja, 1 em cada 4 portugueses</p>
                </a>
                <a href="">
                    <time>12 de marco de 2021</time>
                    <strong>Creating a monorepo with leran and yarn</strong>
                    <p>Primeiro eu queria cumprimentar os internautas. -Oi Internautas! Depois dizer que o meio ambiente é sem dúvida nenhuma uma ameaça ao desenvolvimento sustentável. E isso significa que é uma ameaça pro futuro do nosso planeta e dos nossos países. O desemprego beira 20%, ou seja, 1 em cada 4 portugueses</p>
                </a>
            </div>
        </main>
      </>
  );
}
