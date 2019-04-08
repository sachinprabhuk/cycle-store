Component structure

- App
  - BrandList
  - BikeList
    - BikeCard
     - ColorList

- Loading

---

Explanation of each Components purpose:

1. **App**
  Main or the root component, BikeList and BrandList components are embedded into this component.

2. **BrandList**
  This component displays all the brands
  I've used Set data structure to find distinct brands.

3. **BikeList**
  This component has a list of BikeCard component.

4. **BikeCard**
  This component is for the cards and it houses ColorList component
  This component takes bike information object as input/props.

5. **ColorList**
  This component is used to display list of colors available for a bike.
  Takes array of colors(Hex/RGB/color name) as input/props.

6. **Loading**
  is a loading component, and has been used in App component.
  Showed when data is being fetched. (In this case I've used setTimeout to simulate async request).