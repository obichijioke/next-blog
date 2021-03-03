// import React, {useState} from 'react'
// import Link from 'next/link'
// import Button from '@material-ui/core/Button';
import DehazeIcon from '@material-ui/icons/Dehaze';
// import Drawer from '@material-ui/core/Drawer'

// const MenuDrawer = () => {
//     const [showDrawer, setShowDrawer] = useState(false);
//     const verticalnavlinks =[{name: 'Home', link: '/home'}, {name: 'About', link: '/about'}, {name: 'Blog', link: '/blog'},{name: 'Contact', link: '/contact'}]
//     return (
//         <div>
//             <Button onClick={setShowDrawer(!showDrawer)}><DehazeIcon/></Button>
//             <Drawer anchor={'left'} open={showDrawer} onClose={setShowDrawer(false)}>
//                  <ul className=''>
//                     {verticalnavlinks && verticalnavlinks.map((item)=>(<li className="mx-4 text-l font-medium text-purple-700" key={item.name}><Link href={item.link}><a>{item.name}</a></Link></li>))}
//                 </ul>
//             </Drawer>
           
//         </div>
//     )
// }

// export default MenuDrawer;

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer({navs}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor, navs) => (
    <div
      className='w-60'
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navs && navs.map((item, index) => (
          <ListItem button key={index}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
     
    </div>
  );

  return (
    <div>
     
        <React.Fragment>
          <Button onClick={toggleDrawer('left', true)}><DehazeIcon/></Button>
          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left', navs)}
          </Drawer>
        </React.Fragment>
    </div>
  );
}

