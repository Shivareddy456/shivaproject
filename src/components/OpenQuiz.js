import React from 'react'; // Import React as a default import, not as a wildcard import
import { useNavigate } from 'react-router-dom'; // Import only the Link component, not the entire React object
import { CardActionArea, CardContent, Typography, Button, Card } from '@mui/material';

const OpenQuiz = () => {
  const navigate = useNavigate();
  // component logic

    const handleButtonClick = () => {
        navigate('/QuizComponent');
      };
    
      const CardData = [
        {
          title: 'COMPUTER SCIENCE QUIZ',
          description: 'Computer Applications',
          logo: 'https://www.itquiz.in/wp-content/uploads/2018/05/Blue-Cloud-Storage-Computer-Logo-min.jpg',
          startsAt: 'start time: 14-10-2023 at 07:00 AM',
          endsAt: 'end time: 14-10-2023 at 11:59 PM',
          quizDuration: 'duration: 15 mins',
          additionalInfo: [
            'Points To Remember:',
            '1. Total duration of the quiz is 15 mins',
            '2. Quiz can be attended only once. If you wish to exit, it would be submitted automatically, and there is no provision to attend again.',
            '3. - Skipped - Attended - Not attended'
          ]
        },
      ];
    
      const cardsPerRow = 4;
  return (
    <div  style={{
      display: 'grid',
      flexWrap: 'wrap',
      gridTemplateColumns: `repeat(${cardsPerRow}, 1fr)`,
      gap: '10px',
      padding: '20px',
      justifyContent: 'center', // Added padding for spacing around the grid
    }}>
      

      {CardData.map((card, index) => (
        <Card
          key={index}
          sx={{
            width: '300px', // Set the width of the card
            height: '400px', // Set the height of the card
            borderRadius: '10px', // Set border radius for rounded corners
            overflow: 'hidden', // Hide content overflowing from the card
            backgroundColor: 'black',
            color: 'white',
            position: 'relative',
            marginBottom: '20px',
          }}
        >
          <CardActionArea>
            <div style={{
                width: '100px',
                height: '60px',
                display: 'flex',
                borderRadius: '50%', // Corrected the value for a perfect circle
                overflow: 'hidden',
                position: 'absolute',
                bottom: '-10px',
                right: '-10px',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            />
          <img
                src={card.logo}
                alt="Logo"
                style= {{
                  width: '20px',
                  height: '20px',
                  objectFit: 'cover',
                }}
              />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                  {card.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                  {card.startsAt}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                  {card.endsAt}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                  {card.quizDuration}
                </Typography>
                {/* Additional information */}
                <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                  Points To Remember:
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                  1. Total duration of the quiz is 15 mins
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                  2. Quiz can be attended only once. If you wish to exit, it would be submitted automatically, and there is no provision to attend again.
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                  3. -Skipped -Attended -Not attended
                </Typography>
              </CardContent>

            <div style={{ display: 'flex', justifyContent:'center', marginBottom: '200px', }}>    
               <Button
                variant="outlined"
                color="primary"
                sx={{
                  backgroundColor: 'blue',
                  color: 'white',

                  border: '3px solid orange',
                  '&:hover': {
                    backgroundColor: 'black',
                  },
                 }}
                onClick={handleButtonClick}
                >
                Start quiz
                 </Button>
            </div>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default OpenQuiz;
