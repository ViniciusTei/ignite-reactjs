import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
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

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'post')
    ], {
        fetch: ['post.title', 'post.content'],
        pageSize: 20
    })

    console.log(JSON.stringify(response, null, 2))
    return {
        props: {
            posts: response.results
        }
    }
}
