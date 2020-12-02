import React from 'react';
import { Drawer, Button } from '@material-ui/core';
import { MoreVert as MoreVertIcon } from '@material-ui/icons';

import NavigationList from 'components/navigator/NavigatorList';

const Navigator = ({ navigationDrawersHandler, navOpen, isloggedin }) => {
  return (
    <div>
      <Button onClick={navigationDrawersHandler(true)}>
        <MoreVertIcon fontSize="large" color="action" />
      </Button>

      <Drawer
        anchor="left"
        open={navOpen}
        onClose={navigationDrawersHandler(false)}
      >
        <NavigationList
          navigationDrawersHandler={navigationDrawersHandler}
          isloggedin={isloggedin}
        />
      </Drawer>
    </div>
  );
};

export default Navigator;
