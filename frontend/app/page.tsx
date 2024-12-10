import { Card, CardContent } from '@/components/ui/card';

import styles from '@/styles/cardOnScroll.module.css';

const cardData = [
  { color: '#86BC25', textColor: '#FFFFFF', title: 'Welcome to Deloitte' },
  { color: '#282828', textColor: '#FFFFFF', title: 'Our Mission' },
  { color: '#D9D9D9', textColor: '#282828', title: 'Core Values' },
  { color: '#FFFFFF', textColor: '#282828', title: 'Thank You!' },
];

const Homepage: React.FC = () => {
  return (
    <div
      className={styles.container}
      style={
        {
          '--cards': cardData.length,
        } as React.CSSProperties
      }
    >
      <div className={styles.cards}>
        {cardData.map((card, index) => (
          <div
            key={index}
            className={styles.card}
            style={
              {
                '--index': index + 1,
                '--color': card.color,
                '--textColor': card.textColor,
              } as React.CSSProperties
            }
          >
            <Card>
              <CardContent className={`${styles['card-body']}`}>
                <h1>{card.title}</h1>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
