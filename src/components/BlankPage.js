import React from 'react'; // Import React as a default import, not as a wildcard import
import { Link, useNavigate } from 'react-router-dom'; // Import only the Link component, not the entire React object
import { CardActionArea, CardContent, Typography, Button, Card } from '@mui/material';

const BlankPage = () => {
  const navigate = useNavigate();
  // component logic

    const handleButtonClick = () => {
        navigate('/openquiz');
      };
    const CardData = [
        {
          title: 'COMPUTER SCIENCE QUIZ',
          description: 'Computer Applications',
          logo: 'https://www.itquiz.in/wp-content/uploads/2018/05/Blue-Cloud-Storage-Computer-Logo-min.jpg',
          startsAt:'starttime:14-10-2023 at 07:00 AM',
          endsAt: 'endtime:14-10-2023 at 11:59 PM',
          quizDuration: 'duration:15 mins'
        },
        {
          title: 'COMMERCE QUIZ',
          description: 'Commerce',
          logo: 'https://static.vecteezy.com/system/resources/previews/000/131/160/original/trivia-quiz-logo-illustration-vector.jpg',
          startsAt: ' starttime: 14-10-2023 at 07:00 AM',
          endsAt: ' end time :14-10-2023 at 11:59 PM',
          quizDuration: ' duration : 15 mins'
        },
        {
          title: 'ARTS QUIZ',
          description: 'Arts (Kannada)',
          logo: 'https://th.bing.com/th/id/OIP.4qgqLWewSsSMEkinXui5NQHaGh?pid=ImgDet&rs=1',
          startsAt: ' starttime: 14-10-2023 at 07:00 AM',
          endsAt: ' end time :14-10-2023 at 11:59 PM',
          quizDuration: ' duration : 15 mins'
        },
        {
          title: 'ARTS QUIZ',
          description: 'Arts (English)',
          logo: 'https://th.bing.com/th/id/R.098a0b3ca8cd1371b4eb3dfc599d691d?rik=oM%2bu18rIpxpZoQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-p-UW2RKAdwE%2fVieWOwpCXdI%2fAAAAAAAACJU%2fjHtHxp2rgoE%2fs1600%2fquiz-image_0.jpg&ehk=7wzES7qfzQ38plJVGoJ0aL4ZCyUwjtQfQvm%2bxr6UFlo%3d&risl=&pid=ImgRaw&r=0',
          startsAt: ' starttime: 14-10-2023 at 07:00 AM',
          endsAt: ' end time :14-10-2023 at 11:59 PM',
          quizDuration: ' duration : 15 mins'
        },
        {
          title: 'SCIENCE QUIZ',
          description: 'Science',
          logo: 'https://th.bing.com/th/id/R.8e5819832eccfc73e99eaa5dd70a502e?rik=SyOtC93Yy0EUvA&riu=http%3a%2f%2fquizzly-bear.com%2ffiles%2fquiz_banner2%2fbanner%2f33087%2f223j.png&ehk=dBr%2brlcX%2f8BIgWrJuQ47WHGepTvTTy4prPd0pVCFRvw%3d&risl=&pid=ImgRaw&r=0',
          startsAt: ' starttime: 14-10-2023 at 07:00 AM',
          endsAt: ' end time :14-10-2023 at 11:59 PM',
          quizDuration: ' duration : 15 mins'
        },
        {
          title: 'GK QUIZ',
          description: 'Weekly General studoes quiz',
          logo: 'https://1.bp.blogspot.com/-mJ3KDr9VEGY/VOXC43YRUMI/AAAAAAAACsg/DWYhKcDGa_0/s1600/LOGO%2BcopyGK.jpg',
          startsAt: ' starttime: 14-10-2023 at 07:00 AM',
          endsAt: ' end time :14-10-2023 at 11:59 PM',
          quizDuration: ' duration : 15 mins'
        },
        {
          title: 'QUIZ',
          description: 'English comprehension quiz',
          logo: 'https://th.bing.com/th/id/R.160c987c58f5f4b8eb539091ea8a6514?rik=16X7RoHcIcAtXQ&riu=http%3a%2f%2fwww.dng24.co.uk%2fwp-content%2fuploads%2f2016%2f12%2fquiz.jpg&ehk=DRFt3fpO%2be2B7LXtbQvH7MVDuF4yPuYuNFDT3nS1L50%3d&risl=&pid=ImgRaw&r=0',
          startsAt: ' starttime: 14-10-2023 at 07:00 AM',
          endsAt: ' end time :14-10-2023 at 11:59 PM',
          quizDuration: ' duration : 15 mins'
        },
        {
          title: 'QUIZ TIME',
          description: 'engineering quiz',
          logo: 'https://wallpaperaccess.com/full/2384073.jpg',
          startsAt: ' starttime: 14-10-2023 at 07:00 AM',
          endsAt: ' end time :14-10-2023 at 11:59 PM',
          quizDuration: ' duration : 15 mins'
        },
        {
          title: 'SOCIAL SCIENCE',
          description: 'Social science',
          logo: 'https://th.bing.com/th/id/R.5929cd0a4da20a0e6a72c489744c3ae5?rik=TnILwmZ3vffAxQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-SmmiF0a_Z6I%2fTjP-diFTL0I%2fAAAAAAAAAGc%2funM0L9Xktzk%2fw1200-h630-p-k-no-nu%2f00_Social%2bquiz%2blogo.jpg&ehk=XI6gnsWXNJs9%2f7dLBHLMIpZa3bk6AigRGSqGTLjS6Bg%3d&risl=&pid=ImgRaw&r=0',
          startsAt: ' starttime: 14-10-2023 at 07:00 AM',
          endsAt: ' end time :14-10-2023 at 11:59 PM',
          quizDuration: ' duration : 15 mins'
        },
        {
          title: 'GENERAL KNOWLEDGE QUIZ',
          description: 'Genral knowledge quiz',
          logo: 'https://th.bing.com/th/id/R.73fd641588c5d72d8056d8569aee4d2d?rik=Ss1W7SFwjekFUQ&riu=http%3a%2f%2fquiz-this.com%2ffiles%2fquiz_banner2%2fbanner%2f55905%2f6355j.png&ehk=056eWCrUOl9vFZTr24AGsf%2bcdnlCyXJwbYkbNNKZjiY%3d&risl=&pid=ImgRaw&r=0',
          startsAt: ' starttime: 14-10-2023 at 07:00 AM',
          endsAt: ' end time :14-10-2023 at 11:59 PM',
          quizDuration: ' duration : 15 mins'
        },
        {
          title: 'QUIZ!',
          description: 'New test quiz',
          logo: 'https://th.bing.com/th/id/OIF.uAeeJ8rxe4c7Yzz50JsWqA?pid=ImgDet&rs=1',
          startsAt: ' starttime: 14-10-2023 at 07:00 AM',
          endsAt: ' end time :14-10-2023 at 11:59 PM',
          quizDuration: ' duration : 15 mins'
        },
        {
          title: 'QUIZ',
          description: 'Placement Test Series',
          logo: 'https://www.studentnewsdaily.com/wp-content/uploads/2018/10/FNQ_image.jpg',
          startsAt: ' starttime: 14-10-2023 at 07:00 AM',
          endsAt: ' end time :14-10-2023 at 11:59 PM',
          quizDuration: ' duration : 15 mins'
        },
        {
          title: 'E-COMMERCE',
          description: 'Commerce quiz',
          logo: 'https://i.ytimg.com/vi/W6Z72H2CGSQ/maxresdefault.jpg',
          startsAt: ' starttime: 14-10-2023 at 07:00 AM',
          endsAt: ' end time :14-10-2023 at 11:59 PM',
          quizDuration: ' duration : 15 mins'
        },
        {
          title: 'QUIZ TIME',
          description: 'English comprehension',
          logo: 'https://th.bing.com/th/id/OIP.530jpFAM6_U8bJy2awbW9QHaEK?pid=ImgDet&rs=1',
          startsAt: ' starttime: 14-10-2023 at 07:00 AM',
          endsAt: ' end time :14-10-2023 at 11:59 PM',
          quizDuration: ' duration : 15 mins'
        },
        {
          title: 'PLACEMENT TEST',
          description: 'Weekly Placement Test',
          logo: 'https://th.bing.com/th/id/R.8b77ac46670e266e6c54fdc590d74291?rik=5Tfh60iHqEhgmQ&riu=http%3a%2f%2fwww.ndhsguam.com%2fsites%2fdefault%2ffiles%2fplacementtest1.png&ehk=7SpifWnGaNKCLgx2lHH53HeMmudmwhSlrV6H47fauw4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
          startsAt: ' starttime: 14-10-2023 at 07:00 AM',
          endsAt: ' end time :14-10-2023 at 11:59 PM',
          quizDuration: ' duration : 15 mins'
        },
        {
          title: 'QUIZ',
          description: 'General Studies Quiz',
          logo: 'https://thumbs.dreamstime.com/t/illustration-d-letter-blocks-spelling-word-quiz-isolated-white-background-29797766.jpg',
          startsAt: ' starttime: 14-10-2023 at 07:00 AM',
          endsAt: ' end time :14-10-2023 at 11:59 PM',
          quizDuration: ' duration : 15 mins'
        },
        // ... (card data)
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
            width: '220px', // Set the width of the card
            height: '350px', // Set the height of the card
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
                  width: '30px',
                  height: '30px',
                  objectFit: 'cover',
                }}
              />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" style={{
                height:"50px"
              }}>
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color:'white'}} style={{
                height:"50px",
                width:"200px",
              }}>
                 {card.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color:'white'}} style={{
                height:"20px",
                width:"200px",
              }}>
                {card.startsAt}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color:'white'}} style={{
                height:"30px",
                width:"200px",
              }}>
                <br></br>
                {card.endsAt}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color:'white'}} style={{
                height:"30px",
                width:"200px",
              }}>
                <br></br>
                {card.quizDuration}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color:'white'}} style={{
                height:"30px",
                width:"200px",
              }}>
              </Typography>
            </CardContent>
            <br></br>
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
                Start Now
                 </Button>
            </div>
          </CardActionArea>
        </Card>
      ))}
      <Link to="/newpage">Go to New Page</Link>
    </div>
  );
};

export default BlankPage;
