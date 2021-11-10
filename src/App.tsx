import { Box, Button, Divider, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from 'store/api/examples';
import { valueSelector } from 'store/selectors/examples';

function App() {
  const data = useSelector(valueSelector);
  const dispatch = useDispatch();

  return (
    <Box textAlign="center">
      <Text fontSize="4xl" mt={8} mb={5}>
        DS4Biz Frontend boilerplate
      </Text>
      <Button onClick={() => dispatch(getData())} colorScheme="teal" mb="1">
        Get data
      </Button>

      {data && <pre>{JSON.stringify(data)}</pre>}
      <Divider my={3} />
      <Button
        as="a"
        href="https://chakra-ui.com/getting-started"
        target="_blank"
        colorScheme="blue"
      >
        Chakra UI docs
      </Button>

      <Button
        mx={3}
        as="a"
        href="https://github.com/airbnb/javascript/tree/master/react"
        target="_blank"
        colorScheme="red"
      >
        React Style Guide
      </Button>

      <Button
        as="a"
        href="https://ds4biz.gitbook.io/frontend-stack-initialization/"
        target="_blank"
        colorScheme="purple"
      >
        Frontend handbook
      </Button>
    </Box>
  );
}

export default App;
