/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { getAllProducts, addToCart } from '../../API';
import {
  Badge,
  Button,
  Card,
  Image,
  List,
  message,
  Rate,
  Typography,
} from 'antd';

function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setItems(res.products);
      // console.log(res.products);
    });
  }, []);

  function addToCartButton(item) {
    const addProductToCart = () => {
      addToCart(item.id)
        .then((resp) => {
          if (resp && resp.success) {
            message.success(`${item.title} has been added successfully`);
          } else {
            message.error('There was an issue adding the item to the cart.');
          }
        })
        .catch((error) => {
          message.error(`Error: ${error.message}`);
        });
    };

    return (
      <Button type='primary' onClick={addProductToCart}>
        Add to Cart
      </Button>
    );
  }

  return (
    <div>
      <List
        grid={{ column: 3 }}
        renderItem={(product, index) => (
          <List.Item key={index}>
            <Badge.Ribbon
              className='itemCardBadge'
              text={`${product.discountPercentage}% Off`}
              color='pink'
            >
              <Card
                className='itemCard'
                title={product.title}
                cover={
                  <Image className='itemCardImage' src={product.thumbnail} />
                }
                actions={[
                  <Rate allowHalf disabled value={product.rating} />,
                  addToCartButton(product),
                ]}
              >
                <Card.Meta
                  title={
                    <Typography.Paragraph>
                      Price: ${product.price}{' '}
                      <Typography.Text delete type='danger'>
                        $
                        {parseFloat(
                          product.price +
                            (product.price * product.discountPercentage) / 100
                        ).toFixed(2)}
                      </Typography.Text>
                    </Typography.Paragraph>
                  }
                  description={
                    <Typography.Paragraph
                      ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
                    >
                      {product.description}
                    </Typography.Paragraph>
                  }
                />
              </Card>
            </Badge.Ribbon>
          </List.Item>
        )}
        dataSource={items}
      />
    </div>
  );
}

export default Products;
