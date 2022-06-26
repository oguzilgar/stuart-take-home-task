const CYPRESS_ATTRIBUTES = {
    DASHBOARD: {
      REQUEST_DELIVERY: '#newRequest-link',
      ONGOING: '#active-link',
      SCHEDULED: '#scheduled-link',
      PAST: '#history-link',
      FIND_DELIVERY: '#search-link'
    },

    REQUEST_DELIVERY: {
      REQUEST_BUTTON: '#requestButton',
      DROPOFF_ERROR: '#dropOff-error',
      PICKUP_ERROR: '#pickUp-error',
      PICKUP_CARD: '#pickUpCard-0',
      DROPOFF_CARD: '#dropOffCard-0',
      PICKUP_SEARCH_BOX: '#pickUpCard-0-fields-field-address',
      DROPOFF_SEARCH_BOX: '#dropOffCard-0-fields-field-address',
      ORDER_ID: '#dropOffCard-0-fields-field-clientReference',
      SCHEDULING_CARD: '#schedulingCard',
      NOW_OPTION: '.QdMjElLP',
      SEARCH_AUTO: '#react-autowhatever-1'
    },

    ONGOING: {
      ONGOING_PAGE: '#activeJobsPage'
    },

    ACCOUNT_MENU: {
      ACCOUNT_MENU_ICON: '#accountMenuButton',
      DROPDOWN_MENU_CONTAINER: '#dropdownMenuContainer'
    },

    ADDRESS_BOOK: {
      ADDRESS_CONTAINER: '#savedPlaceContainer',
      NEW_ADDRESS_BUTTON: '#addNewAddress',
      NEW_ADDRESS_POPUP: '#addressModal',
      SAVE_BUTTON: '#addressModalSaveButton',
      SEARCH_BOX: '#addressModal-field-address',
      ENTER_FIRST_NAME: '#addressModal-field-firstname'
    },

    SETTINGS: {
      ACCOUNT_DETAIL: '#settingsPage'
    }
  };
  
  export default CYPRESS_ATTRIBUTES;