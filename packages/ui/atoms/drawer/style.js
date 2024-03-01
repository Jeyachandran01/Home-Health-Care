export const drawer_style = {
  rootSx: {
    '& .MuiDrawer-paperAnchorBottom': {
      boxSizing: 'border-box',
      maxWidth: {
        sm: 428,
      },
      right: 1,
      mx: {
        sm: 'auto',
      },
      borderRadius: '24px 24px 0px 0px',
    },
  },
  headerSx: { p: 2, borderBottom: '1px solid', borderColor: 'border.main' },
  childrenSx: { p: 2, overflow: 'overlay' },
  footerSx: {
    p: 3,
    bgcolor: 'common.white',
    borderTop: '1.3px dashed',
    borderColor: 'border.main',
  },
  closeSx: {
    top: '10px',
    right: '390px',
    width: '50px',
    cursor: 'pointer',
    height: '50px',
    position: 'fixed',
    borderRadius: '50%',
    backgroundColor: '#fff',
    padding: '15px',
  },
};
