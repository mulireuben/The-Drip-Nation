import { Typography } from 'antd';

const Appfooter = () => {
  return (
    <div className='appfooter'>
      <Typography.Link href='https://www.google.com' target={'_blank'}>
        Privacy policy
      </Typography.Link>
      <Typography.Link href='https://www.google.com' target={'_blank'}>
        Terms & Conditions
      </Typography.Link>
      <Typography.Link href='https://www.google.com' target={'_blank'}>
        Return policy
      </Typography.Link>
      <Typography.Link href='tel:+254 708377276' target={'_blank'}>
        +254 708377276
      </Typography.Link>
    </div>
  );
};

export default Appfooter;
