import { useSelector } from 'react-redux';
export default function useSearch(initialData, keyCategory, searchData) {
  const productCategories = useSelector(
    state => state.getProductCategory.getProductCategoryArr
  );
  const productTags = useSelector(
    state => state.getProductTag.getProductTagArr
  );

  if (searchData.length > 0) {
    //-------------------Category Sort--------------
    if (searchData.substr(0, 12) === '&*$@category') {
      let response = [];

      initialData.forEach(data => {
        const productFilter = [];
        productCategories.forEach(f => {
          if (f.length > 0 && f[0].item_id === data.id) {
            productFilter.push(f);
            return;
          }
        });

        productFilter.forEach(el => {
          el.forEach(cat => {
            if (
              cat.id === Number(searchData.substring(12)) ||
              searchData.substring(12) == ''
            ) {
              if (!response.includes(data)) {
                response.push(data);
              }

              return;
            }
          });
        });
      });

      return response;
    }
    //-------------------Tag Sort--------------
    if (searchData.substr(0, 7) === '&*$@tag') {
      let response = [];

      initialData.forEach(data => {
        const productFilter = [];
        productTags.forEach(f => {
          if (f.length > 0 && f[0].item_id === data.id) {
            productFilter.push(f);
            return;
          }
        });

        productFilter.forEach(el => {
          el.forEach(tag => {
            if (
              tag.id === Number(searchData.substring(7)) ||
              searchData.substring(7) == ''
            ) {
              if (!response.includes(data)) {
                response.push(data);
              }

              return;
            }
          });
        });
      });

      return response;
    }
    //------------------sort---------------------
    else if (searchData === '$#&main') {
      return initialData;
    } else if (searchData === '$#&published') {
      return initialData.filter(item => item.published);
    } else if (searchData === '$#&unpublished') {
      return initialData.filter(item => !item.published);
    } else {
      return initialData.filter(item =>
        item[keyCategory].toLowerCase().includes(searchData.toLowerCase())
      );
    }
  } else {
    return initialData;
  }
}
