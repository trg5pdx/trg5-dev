import { useEffect, useState } from 'react';
import { EmailStatus, notifData } from '../constants/constants';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Notification = (props: {
  status: EmailStatus;
  message: string;
  isOpen: boolean;
  changeNotif: (arg0: notifData) => void;
}) => {
  const [notifState, setNotifState] = useState('hidden');
  const [notifIcon, setNotifIcon] = useState(<></>);

  useEffect(() => {
    if (props.isOpen) {
      let notifStyle = `fixed z-50 w-11/12 md:w-[50rem] h-fit md:h-12 top-3/4 
        left-1/2 translate-x-[-50%] overflow-none flex flex-cols p-2 rounded 
        drop-shadow-2xl`;

      switch (props.status) {
        case EmailStatus.Success:
          setNotifState(notifStyle.concat(' bg-green-600'));
          setNotifIcon(<CheckCircleOutlineIcon className="mx-2" />);
          break;
        default:
          setNotifState(notifStyle.concat(' bg-red-500'));
          setNotifIcon(<HighlightOffIcon />);
          break;
      }
    } else {
      setNotifState('hidden');
    }
  }, [props.isOpen, props.status]);

  const closeNotif = () => {
    setNotifIcon(<></>);
    setNotifState('hidden');
    props.changeNotif(new notifData(EmailStatus.None, '', false));
  };

  return (
    <div className={notifState} onClick={() => closeNotif()}>
      {notifIcon}
      <p className="mx-3">{props.message}</p>
    </div>
  );
};

export default Notification;
