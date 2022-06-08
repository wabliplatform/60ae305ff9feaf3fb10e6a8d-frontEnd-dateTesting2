let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';document.getElementById('ip6ks').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/AddProject' ;}};document.getElementById('ipmoz').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("ipmoz")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/EditProject/' + transitionId;}};document.getElementById('ig1xv').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/Dashboard/','');
      if(projectId === '/Dashboard' || projectId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ig1xv")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            projectId = value._id;
            parentId = key;
          }
        });
      }
    apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/Dashboard' ;}}});};document.getElementById('ilgkj').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("ilgkj")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/EditProject/' + transitionId;}};document.getElementById('inrut').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/Dashboard/','');
      if(projectId === '/Dashboard' || projectId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("inrut")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            projectId = value._id;
            parentId = key;
          }
        });
      }
    apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('i7uucq').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("i7uucq")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/EditProject/' + transitionId;}};document.getElementById('ibfn9f').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/Dashboard/','');
      if(projectId === '/Dashboard' || projectId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ibfn9f")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            projectId = value._id;
            parentId = key;
          }
        });
      }
    apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('iqfsbf').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("iqfsbf")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/EditProject/' + transitionId;}};document.getElementById('iej1yb').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/Dashboard/','');
      if(projectId === '/Dashboard' || projectId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iej1yb")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            projectId = value._id;
            parentId = key;
          }
        });
      }
    apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('iqauu9').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("iqauu9")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/EditProject/' + transitionId;}};document.getElementById('irzmxy').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/Dashboard/','');
      if(projectId === '/Dashboard' || projectId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("irzmxy")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            projectId = value._id;
            parentId = key;
          }
        });
      }
    apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};window.onload = () => {apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ibyt7").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'pName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].pName;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'pName'){
        subDataElements[i].textContent = data[data.length -i -1].pName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'pdate1']");
      const dateIsoFormat = new Date(data[data.length -i -1].pdate1);
      const outputString = (data[data.length -i -1].pdate1) ?   dateIsoFormat.getDate()+'-'+dateIsoFormat.getMonth()+'-'+dateIsoFormat.getFullYear() : '' ;
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = outputString;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'pdate1'){
        subDataElements[i].textContent = outputString;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'pdate2']");
      const dateIsoFormat = new Date(data[data.length -i -1].pdate2);
      const outputString = (data[data.length -i -1].pdate2) ?   dateIsoFormat.getDate()+'-'+dateIsoFormat.getMonth()+'-'+dateIsoFormat.getFullYear() : '' ;
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = outputString;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'pdate2'){
        subDataElements[i].textContent = outputString;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'pdate3']");
      const dateIsoFormat = new Date(data[data.length -i -1].pdate3);
      const outputString = (data[data.length -i -1].pdate3) ?   dateIsoFormat.getDate()+'-'+dateIsoFormat.getMonth()+'-'+dateIsoFormat.getFullYear() : '' ;
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = outputString;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'pdate3'){
        subDataElements[i].textContent = outputString;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};