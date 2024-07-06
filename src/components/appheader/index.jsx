import { HomeFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Drawer, InputNumber, Menu, Table, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCart } from '../../API';

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
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState();

  useEffect(() => {
    getCart().then((res) => {
      setCartItems(res.products);
    });
  }, []);

  function AppCart() {
    return (
      <div>
        <Badge
          onClick={() => setCartDrawerOpen(true)}
          count={7}
          className='shoppingCartOutlined'
        >
          <ShoppingCartOutlined />
        </Badge>
        <Drawer
          open={cartDrawerOpen}
          onClose={() => setCartDrawerOpen(false)}
          title='Your cart '
          contentWrapperStyle={{ width: 500 }}
        >
          <Table
            columns={[
              {
                title: 'Title',
                dataIndex: 'title',
              },
              {
                title: 'Price',
                dataIndex: 'price',
                render: (value) => {
                  return <span>${value}</span>;
                },
              },
              {
                title: 'Quantity',
                dataIndex: 'quantity',
                render: (value) => {
                  return <InputNumber defaultValue={value}></InputNumber>;
                },
              },
              {
                title: 'Total',
                dataIndex: 'total',
                render: (value) => {
                  return <span>${value}</span>;
                },
              },
            ]}
            dataSource={cartItems}
          />
        </Drawer>
      </div>
    );
  }

  const menuClick = (item) => {
    navigate(`/${item.key}`);
    console.log(item.key);
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
                key: 'mens-shirts',
              },
              {
                label: 'Men Shoes',
                key: 'mens-shoes',
              },
              {
                label: 'Men Watches',
                key: 'mens-watches',
              },
            ],
          },
          {
            label: 'Women',
            key: 'women',
            children: [
              {
                label: 'Women Dresses',
                key: 'womens-dresses',
              },
              {
                label: 'Women Shoes',
                key: 'womens-shoes',
              },
              {
                label: 'Women Watches',
                key: 'womens-watches',
              },
              {
                label: 'Women Bags',
                key: 'womens-bags',
              },
              {
                label: 'Women jewellary',
                key: 'womens-jewelary',
              },
            ],
          },
          {
            label: 'Fragrances',
            key: 'fragrances',
          },
        ]}
      ></Menu>
      <Typography.Title>The Drip Nation</Typography.Title>
      <AppCart />
    </div>
  );
};

export default Appheader;
