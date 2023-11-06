import * as React from 'react';
import { CardActionArea, CardContent, Typography, Button, Card} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function Cards() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/blankpage');
  };

  const CardData = [
    {
      title: 'College',
      description: 'Social Science Quiz',
      logo: 'https://th.bing.com/th/id/R.5929cd0a4da20a0e6a72c489744c3ae5?rik=TnILwmZ3vffAxQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-SmmiF0a_Z6I%2fTjP-diFTL0I%2fAAAAAAAAAGc%2funM0L9Xktzk%2fw1200-h630-p-k-no-nu%2f00_Social%2bquiz%2blogo.jpg&ehk=XI6gnsWXNJs9%2f7dLBHLMIpZa3bk6AigRGSqGTLjS6Bg%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      title: 'College',
      description: 'Weekly General Quiz',
      logo: 'https://th.bing.com/th/id/R.73fd641588c5d72d8056d8569aee4d2d?rik=Ss1W7SFwjekFUQ&riu=http%3a%2f%2fquiz-this.com%2ffiles%2fquiz_banner2%2fbanner%2f55905%2f6355j.png&ehk=056eWCrUOl9vFZTr24AGsf%2bcdnlCyXJwbYkbNNKZjiY%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      title: 'College',
      description: 'Weekly Placement Test',
      logo: 'https://th.bing.com/th/id/R.8b77ac46670e266e6c54fdc590d74291?rik=5Tfh60iHqEhgmQ&riu=http%3a%2f%2fwww.ndhsguam.com%2fsites%2fdefault%2ffiles%2fplacementtest1.png&ehk=7SpifWnGaNKCLgx2lHH53HeMmudmwhSlrV6H47fauw4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
    },
    {
      title: 'College',
      description: 'Commerce',
      logo: 'https://th.bing.com/th/id/R.451858de2067f85158b9c0283bea03ba?rik=RjssMwUbSvkqyg&riu=http%3a%2f%2fwww.cluster2.hostgator.co.in%2ffiles%2fwriteable%2fuploads%2fhostgator58485%2fimage%2fe-commerce_logo.jpg&ehk=7cXuQKX9sWfNXURjp3rMRGEGwtBbrzapvow0VN2%2fUjE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
    },
    {
      title: 'College',
      description: 'English Comprehension',
      logo: 'https://www.thelearningapps.com/wp-content/uploads/2018/05/icon-27.png',
    },
    {
      title: 'College',
      description: 'Acharya Institute Project Sem(Register now)',
      logo: 'https://www.bbacollegesindia.in/wp-content/uploads/2021/05/Acharya-Institute-of-Graduate-Studies-logo.jpg',
    },
    {
      title: 'College',
      description: 'Bangalore North University Quiz logo',
      logo: 'https://edugic.com/wp-content/uploads/2021/01/Bnaglore-University-Merit-List-2021-1.jpg',
    },
    {
      title: 'College',
      description: 'Engineering',
      logo: 'https://images.freecreatives.com/wp-content/uploads/2016/08/Vector-Engineering-Logo-Design.jpg',
    },
    {
      title: 'College',
      description: 'Internship(Click here to register now)',
      logo: 'https://th.bing.com/th/id/OIP.Ebl5krahSH8Tl7Y6QZEDDAHaD4?pid=ImgDet&rs=1',
    },
    {
      title: 'College',
      description: 'UPSC',
      logo: 'https://th.bing.com/th/id/OIP.bLbodvY879DSUVQkGbJV6QHaEK?pid=ImgDet&rs=1',
    },
    {
      title: 'College',
      description: 'Independence Day Quiz',
      logo: 'https://media.proprofs.com/images/QM/user_images/1826446/1483683235.jpg',
    },
    {
      title: 'College',
      description: 'KPSC',
      logo: 'https://th.bing.com/th/id/OIP.Z8gpIyudAt1XtoPMGWP2cAHaHM?pid=ImgDet&rs=1e',
    },
    {
      title: 'College',
      description: 'Aptitude',
      logo: 'https://mma.prnewswire.com/media/200023/aptitude_logo.jpg?p=facebook',
    },
    {
      title: 'College',
      description: 'Sports',
      logo: 'https://th.bing.com/th/id/R.15501ab6955c61de0064c050d5eb416a?rik=3uy5U9HP8awLqw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-yRTu5K8GCss%2fVKUmvUAzo-I%2fAAAAAAAAA8E%2fO7-n5larg0w%2fs1600%2felite_sports_logo_2_by_s_havrisik-d2xqmsr-2.jpg&ehk=%2f0wm3u30QSKQbB7qh5ZVZknj6sH609vIY7%2blVx9qYaw%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      title: 'College',
      description: 'SSC',
      logo: 'https://th.bing.com/th/id/OIP.MFYqGPYOJTpFVE_A52C1-wHaGo?pid=ImgDet&rs=1',
    },
    {
      title: 'College',
      description: 'IBPS',
      logo: 'https://th.bing.com/th/id/OIP._eW4biMVZfJSZ97uc0GQYAHaI3?pid=ImgDet&rs=1',
    },
    // ... (card data)
  ];

  const cardsPerRow = 4;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cardsPerRow}, 1fr)`,
        gap: '10px',
        padding: '20px', // Added padding for spacing around the grid
      }}
    >
      {CardData.map((card, index) => (
        <Card
          key={index}
          sx={{
            width: '200px', // Set the width of the card
            height: '300px', // Set the height of the card
            borderRadius: '10px', // Set border radius for rounded corners
            overflow: 'hidden', // Hide content overflowing from the card
            backgroundColor: 'black',
            color: 'white',
            position: 'relative',
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
                height:"30px",
                width:"200px",
              }}>
                {card.description}
                </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color:'white'}} style={{
                height:"30px",
                width:"200px",
              }}>
              </Typography>
              <div style={{ flexGrow: 1 }} /> 
            </CardContent>
            <div style={{ textAlign: 'center' }}>    
            <Button
                variant="outlined"
                color="primary"
                sx={{
                  marginTop: 'auto', // Move the button to the bottom
                  padding: '5px 10px',
                  border: '1px solid #000',
                  borderRadius: '5px',
                  background: 'blue',
                  color: 'white',
                }}
                onClick={handleButtonClick}
              >
                Click Me
              </Button>
            </div>
          </CardActionArea>
        </Card>
      ))}
      <Link to="/newpage">Go to newpage</Link>
      </div>
  );
}

