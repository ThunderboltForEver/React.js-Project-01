import avatarImage01 from "../../assests/images/avatar-01.jpg";
import avatarImage02 from "../../assests/images/avatar-02.jpg";
import avatarImage03 from "../../assests/images/avatar-03.jpg";
import avatarImage04 from "../../assests/images/avatar-04.jpg";
import avatarImage05 from "../../assests/images/avatar-03.jpg";
import TopStreamsItem from "../../components/TopStreamsItem/TopStreamsItem";

const TopStreamsItemInfo = [
    {
      id: "1",
      playerNumber:'1',
      playerImage:avatarImage01,
      playerName:'LahutaM',      
    },
    {
      id: "2",
      playerNumber:'2',
      playerImage:avatarImage02,
      playerName:'Kengan',      
    },
    {
      id: "3",
      playerNumber:'3',
      playerImage:avatarImage03,
      playerName:'Areluwa',      
    },
    {
      id: "4",
      playerNumber:'4',
      playerImage:avatarImage04,
      playerName:'Omeg',      
    },
    {
      id: "5",
      playerNumber:'5',
      playerImage:avatarImage05,
      playerName:'LahutaM',      
    },
  ];
  const TopStreamsItemData = TopStreamsItemInfo.map((item) => {
    return (
      <TopStreamsItem
        key={item.id}
        playerNumber = {item.playerNumber}
        playerImage = {item.playerImage}
        playerName = {item.playerName}
      />
    );
  });
  
  export default TopStreamsItemData;