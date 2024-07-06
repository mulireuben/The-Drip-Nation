import { HomeFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

// const Items = (
//   <Menu
//     onClick={menuClick}
//     mode='horizontal'
//     items={[
//       {
//         label: <HomeFilled />,
//         key: '',
//       },
//       {
//         label: 'Men',
//         key: 'men',
//         children: [
//           {
//             label: 'Men Shirts',
//             key: 'men_shirts',
//           },
//           {
//             label: 'Men Shoes',
//             key: 'men_shoes',
//           },
//           {
//             label: 'Men Watches',
//             key: 'men_watches',
//           },
//         ],
//       },
//       {
//         label: 'Women',
//         key: 'women',
//         children: [
//           {
//             label: 'Women Dresses',
//             key: 'women_dresses',
//           },
//           {
//             label: 'Women Shoes',
//             key: 'women_shoes',
//           },
//           {
//             label: 'Women Watches',
//             key: 'women_watches',
//           },
//           {
//             label: 'Women Bags',
//             key: 'women_bags',
//           },
//           {
//             label: 'Women jewellary',
//             key: 'women_jewelary',
//           },
//         ],
//       },
//       {
//         label: 'Fragrances',
//         key: 'fragrances',
//       },
//     ]}
//   ></Menu>
// );

const Appheader = () => {
  const navigate = useNavigate();

  const menuClick = (item) => {
    navigate(`/${item.key}`);
  };
  return (
    <div className='appheader'>
      <Menu
        onClick={menuClick}
        mode='horizontal'
        items={[
          {
            label: <HomeFilled />,
            key: '',
          },
          {
            label: 'Men',
            key: 'men',
            children: [
              {
                label: 'Men Shirts',
                key: 'men_shirts',
              },
              {
                label: 'Men Shoes',
                key: 'men_shoes',
              },
              {
                label: 'Men Watches',
                key: 'men_watches',
              },
            ],
          },
          {
            label: 'Women',
            key: 'women',
            children: [
              {
                label: 'Women Dresses',
                key: 'women_dresses',
              },
              {
                label: 'Women Shoes',
                key: 'women_shoes',
              },
              {
                label: 'Women Watches',
                key: 'women_watches',
              },
              {
                label: 'Women Bags',
                key: 'women_bags',
              },
              {
                label: 'Women jewellary',
                key: 'women_jewelary',
              },
            ],
          },
          {
            label: 'Fragrances',
            key: 'fragrances',
          },
        ]}
      ></Menu>
    </div>
  );
};

export default Appheader;
