let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';document.getElementById('idaw').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Dashboard' ;}};document.getElementById('ip6ks').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/AddProject' ;}};window.onload = () => {apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ibyt7").querySelectorAll( "[dataitem='true']" )].filter(
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