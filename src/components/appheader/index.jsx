import { HomeFilled, ShoppingCartOutlined } from '@ant-design/icons';
import {
  Badge,
  Button,
  Checkbox,
  Drawer,
  Form,
  Input,
  InputNumber,
  Menu,
  message,
  Table,
  Typography,
} from 'antd';
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
  const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false);

  useEffect(() => {
    getCart().then((res) => {
      setCartItems(res.products);
    });
  }, []);

  const handleCheckoutCartClick = () => {
    setCheckoutDrawerOpen(true);
  };
  const onConfirmOrder = (values) => {
    console.log('values', values);
    setCartDrawerOpen(false);
    setCheckoutDrawerOpen(false);
    message.success('Your order has been placed successfully');
  };

  const handleQuantityChange = (value, id) => {
    setCartItems((prevItems) =>
      prevItems.map((cart) => {
        if (id === cart.id) {
          return { ...cart, total: cart.price * value, quantity: value };
        }
        return cart;
      })
    );
  };

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
                render: (value, record) => {
                  return (
                    <InputNumber
                      min={0}
                      defaultValue={value}
                      onChange={(newValue) => {
                        handleQuantityChange(newValue, record.id);
                      }}
                    ></InputNumber>
                  );
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
            summary={(data) => {
              const total = data.reduce((pre, current) => {
                return pre + current.total;
              }, 0);
              return <span>Total :{total}</span>;
            }}
          />
          <Button type='primary' onClick={handleCheckoutCartClick}>
            checkout your cart
          </Button>
        </Drawer>
        <Drawer
          open={checkoutDrawerOpen}
          onClose={() => {
            setCheckoutDrawerOpen(false);
          }}
          title='Confirm Order'
        >
          <Form onFinish={onConfirmOrder}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Please enter your full name',
                },
              ]}
              label='Full name'
              name='full_name'
            >
              <Input placeholder='Enter your full name' />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Please enter a valid email',
                },
              ]}
              label='Email'
              name='your_email'
            >
              <Input placeholder='Enter your email' />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Please enter your Address',
                },
              ]}
              label='Address'
              name='your_address'
            >
              <Input placeholder='Enter your address' />
            </Form.Item>
            <Form.Item>
              <Checkbox defaultChecked disabled>
                Cash on delivery
              </Checkbox>
            </Form.Item>
            <Typography.Paragraph type='secondary'>
              more methods are coming soon
            </Typography.Paragraph>
            <Button type='primary' htmlType='submit'>
              Confirm Order
            </Button>
          </Form>
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
