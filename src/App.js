import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Offerwall from './pages/Offerwall/Offerwall';
import Modal from './components/Modal/Modal';
import Detail from './pages/Detail/Detail';
import { mock } from './utils/mock';
import img from './assets/images/the-product-manager.svg'
import './App.css';

const App = () => {
  /* init default states using hook `useState`*/
  const [products, setProducts] = useState([])
  const [visible, setVisible] = useState({creatingModal: false, removingProduct: false});
  const [selectedSort, setSelectedSort] = useState('')
  
  /* set products from mock file using `useEffect`*/
  useEffect(() => {
    setProducts([...products, ...mock])
  }, [])

  /* function that make modal visible */
  const makeModalVisible = (boolean, e) => {
    e.preventDefault()
    setVisible({...visible, ...boolean})
  }

  /* function that adding new product to state */
  const addNewProduct = (product) => {
    setProducts([...products, { ...product, imageUrl: img, id: Date.now(), size: {width: '', height: ''}, weight: '', comments: [] }])
    setVisible(false)
  }

  /* function that remove product from state */
  const removeProduct = (gettedProduct) => {
    let filteredProducts = products.filter( product => product !== gettedProduct)
    setProducts(filteredProducts)
  }

  /* function that sorted products by choosen sort */
  const sortProducts = (sort) => {
    setSelectedSort(sort)
    console.log(sort)
    setProducts([...products].sort((a,b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/offerwall">
            <Offerwall onChange={sort => sortProducts(sort)} removeProduct={removeProduct} setVisible={makeModalVisible} products={products} />
            <Modal addNewProduct={addNewProduct} visible={visible.creatingModal} setVisible={makeModalVisible} />
          </Route>
          <Route path="/offerwall/:id">
            <Detail products={products}/>
          </Route>
          <Redirect to="/offerwall" />
        </Switch>
      </BrowserRouter>     
    </div>
  );
}

export default App;
