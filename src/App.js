import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import TextSection from './components/Text-Section/Text-Section.component'
import Footer from './components/Footer/Footer.component';
import Counter from './components/Counter/Counter.component';

const firstText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis semper ligula. Duis luctus nisi felis, vitae sagittis diam fringilla a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum suscipit, augue ac feugiat iaculis, urna magna aliquet ipsum, et fermentum ipsum augue a erat. Sed lacus sapien, lobortis quis sollicitudin at, suscipit vel dolor. Duis convallis lectus a dui vulputate iaculis. Curabitur a condimentum nisi. Praesent sollicitudin aliquam risus, a porttitor nulla euismod sit amet. Sed malesuada ornare orci, quis pharetra mauris convallis in. Morbi orci nisl, lacinia id commodo sed, consequat nec enim. Integer vulputate sem eu aliquet gravida. Suspendisse fermentum justo vitae lectus malesuada, nec fermentum libero feugiat. In elit erat, maximus in libero at, bibendum maximus ex. Nulla molestie tellus ut mauris pharetra euismod. Ut justo mi, porta sed dui eget, sagittis euismod libero.
Integer justo enim, maximus id lectus et, mollis semper arcu. Donec et pharetra tortor. Morbi ac imperdiet arcu. Sed lacinia, diam sit amet pharetra consectetur, neque magna egestas elit, a vulputate purus magna et massa. Donec ut accumsan eros. Fusce fringilla, velit vitae pretium egestas, ligula est dapibus sem, sit amet faucibus justo tellus elementum enim. Maecenas tincidunt nisi id urna viverra, sed congue tellus fringilla. Pellentesque lacinia, dui a placerat blandit, erat nibh accumsan dolor, nec rutrum dolor velit id purus. Aliquam erat volutpat. Donec ipsum nulla, viverra et lobortis ac, lacinia a risus. Sed id congue est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam commodo, justo et molestie rutrum, neque nisi maximus eros, vitae blandit ante eros eget ipsum.`

const secondText = `Najnowesze wpisy na blogu`
class App extends Component {

  render() {
    return (
      <div className='App'>
        <Header />
        <TextSection text={firstText}/>
        <TextSection text={secondText}/>
        <Counter />
        <Footer/>
      </div>
    );
  }
}

export default App;
