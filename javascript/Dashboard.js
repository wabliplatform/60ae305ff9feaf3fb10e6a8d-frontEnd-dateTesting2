/** This is a comment template
  * @param {string} paramName
  * @return {Array} [Project]
  */
function pgetAll(param) {
  //a1
}// Insert js in pDelete as a function
function pDelete(param) {
  // insert code here
}let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';document.getElementById('idaw').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Dashboard' ;}};document.getElementById('ip6ks').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/AddProject' ;}};document.getElementById('ipc7pl').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/EditProject' ;}};document.getElementById('icdvk2').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/SearchByDate' ;}};document.getElementById('ig1xv').onclick = (event) => {
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
    apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('inrut').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/Dashboard/','');let project = new TempApi.Project();project['pName'] = document.querySelector("[annotationname = 'pName']").textContent;project['pdate1'] = document.querySelector("[annotationname = 'pdate1']").textContent.replace(/(?<day>\d+)-(?<month>\d+-)/,'$<month>$<day>-');project['pdate2'] = document.querySelector("[annotationname = 'pdate2']").textContent.replace(/(?<day>\d+)-(?<month>\d+-)/,'$<month>$<day>-');project['pdate3'] = document.querySelector("[annotationname = 'pdate3']").textContent.replace(/(?<day>\d+)-(?<month>\d+-)/,'$<month>$<day>-'); let opts = {project};apiProjectApi.updateproject( projectId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = pName]').textContent = response.body.query.pName ;if (response.body.query.pdate1) {const pdate1IsoFormat = new Date(response.body.query.pdate1); document.querySelector('[annotationname = pdate1]').textContent = pdate1IsoFormat.getDate()+'-'+pdate1IsoFormat.getMonth()+'-'+pdate1IsoFormat.getFullYear();} else {document.querySelector('[annotationname = pdate1]').textContent='';}if (response.body.query.pdate2) {const pdate2IsoFormat = new Date(response.body.query.pdate2); document.querySelector('[annotationname = pdate2]').textContent = pdate2IsoFormat.getDate()+'-'+pdate2IsoFormat.getMonth()+'-'+pdate2IsoFormat.getFullYear();} else {document.querySelector('[annotationname = pdate2]').textContent='';}if (response.body.query.pdate3) {const pdate3IsoFormat = new Date(response.body.query.pdate3); document.querySelector('[annotationname = pdate3]').textContent = pdate3IsoFormat.getDate()+'-'+pdate3IsoFormat.getMonth()+'-'+pdate3IsoFormat.getFullYear();} else {document.querySelector('[annotationname = pdate3]').textContent='';}}});};document.getElementById('ibfn9f').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/Dashboard/','');let project = new TempApi.Project();project['pName'] = document.querySelector("[annotationname = 'pName']").textContent;project['pdate1'] = document.querySelector("[annotationname = 'pdate1']").textContent.replace(/(?<day>\d+)-(?<month>\d+-)/,'$<month>$<day>-');project['pdate2'] = document.querySelector("[annotationname = 'pdate2']").textContent.replace(/(?<day>\d+)-(?<month>\d+-)/,'$<month>$<day>-');project['pdate3'] = document.querySelector("[annotationname = 'pdate3']").textContent.replace(/(?<day>\d+)-(?<month>\d+-)/,'$<month>$<day>-'); let opts = {project};apiProjectApi.updateproject( projectId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = pName]').textContent = response.body.query.pName ;if (response.body.query.pdate1) {const pdate1IsoFormat = new Date(response.body.query.pdate1); document.querySelector('[annotationname = pdate1]').textContent = pdate1IsoFormat.getDate()+'-'+pdate1IsoFormat.getMonth()+'-'+pdate1IsoFormat.getFullYear();} else {document.querySelector('[annotationname = pdate1]').textContent='';}if (response.body.query.pdate2) {const pdate2IsoFormat = new Date(response.body.query.pdate2); document.querySelector('[annotationname = pdate2]').textContent = pdate2IsoFormat.getDate()+'-'+pdate2IsoFormat.getMonth()+'-'+pdate2IsoFormat.getFullYear();} else {document.querySelector('[annotationname = pdate2]').textContent='';}if (response.body.query.pdate3) {const pdate3IsoFormat = new Date(response.body.query.pdate3); document.querySelector('[annotationname = pdate3]').textContent = pdate3IsoFormat.getDate()+'-'+pdate3IsoFormat.getMonth()+'-'+pdate3IsoFormat.getFullYear();} else {document.querySelector('[annotationname = pdate3]').textContent='';}}});};document.getElementById('iej1yb').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/Dashboard/','');let project = new TempApi.Project();project['pName'] = document.querySelector("[annotationname = 'pName']").textContent;project['pdate1'] = document.querySelector("[annotationname = 'pdate1']").textContent.replace(/(?<day>\d+)-(?<month>\d+-)/,'$<month>$<day>-');project['pdate2'] = document.querySelector("[annotationname = 'pdate2']").textContent.replace(/(?<day>\d+)-(?<month>\d+-)/,'$<month>$<day>-');project['pdate3'] = document.querySelector("[annotationname = 'pdate3']").textContent.replace(/(?<day>\d+)-(?<month>\d+-)/,'$<month>$<day>-'); let opts = {project};apiProjectApi.updateproject( projectId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = pName]').textContent = response.body.query.pName ;if (response.body.query.pdate1) {const pdate1IsoFormat = new Date(response.body.query.pdate1); document.querySelector('[annotationname = pdate1]').textContent = pdate1IsoFormat.getDate()+'-'+pdate1IsoFormat.getMonth()+'-'+pdate1IsoFormat.getFullYear();} else {document.querySelector('[annotationname = pdate1]').textContent='';}if (response.body.query.pdate2) {const pdate2IsoFormat = new Date(response.body.query.pdate2); document.querySelector('[annotationname = pdate2]').textContent = pdate2IsoFormat.getDate()+'-'+pdate2IsoFormat.getMonth()+'-'+pdate2IsoFormat.getFullYear();} else {document.querySelector('[annotationname = pdate2]').textContent='';}if (response.body.query.pdate3) {const pdate3IsoFormat = new Date(response.body.query.pdate3); document.querySelector('[annotationname = pdate3]').textContent = pdate3IsoFormat.getDate()+'-'+pdate3IsoFormat.getMonth()+'-'+pdate3IsoFormat.getFullYear();} else {document.querySelector('[annotationname = pdate3]').textContent='';}}});};document.getElementById('irzmxy').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/Dashboard/','');let project = new TempApi.Project();project['pName'] = document.querySelector("[annotationname = 'pName']").textContent;project['pdate1'] = document.querySelector("[annotationname = 'pdate1']").textContent.replace(/(?<day>\d+)-(?<month>\d+-)/,'$<month>$<day>-');project['pdate2'] = document.querySelector("[annotationname = 'pdate2']").textContent.replace(/(?<day>\d+)-(?<month>\d+-)/,'$<month>$<day>-');project['pdate3'] = document.querySelector("[annotationname = 'pdate3']").textContent.replace(/(?<day>\d+)-(?<month>\d+-)/,'$<month>$<day>-'); let opts = {project};apiProjectApi.updateproject( projectId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = pName]').textContent = response.body.query.pName ;if (response.body.query.pdate1) {const pdate1IsoFormat = new Date(response.body.query.pdate1); document.querySelector('[annotationname = pdate1]').textContent = pdate1IsoFormat.getDate()+'-'+pdate1IsoFormat.getMonth()+'-'+pdate1IsoFormat.getFullYear();} else {document.querySelector('[annotationname = pdate1]').textContent='';}if (response.body.query.pdate2) {const pdate2IsoFormat = new Date(response.body.query.pdate2); document.querySelector('[annotationname = pdate2]').textContent = pdate2IsoFormat.getDate()+'-'+pdate2IsoFormat.getMonth()+'-'+pdate2IsoFormat.getFullYear();} else {document.querySelector('[annotationname = pdate2]').textContent='';}if (response.body.query.pdate3) {const pdate3IsoFormat = new Date(response.body.query.pdate3); document.querySelector('[annotationname = pdate3]').textContent = pdate3IsoFormat.getDate()+'-'+pdate3IsoFormat.getMonth()+'-'+pdate3IsoFormat.getFullYear();} else {document.querySelector('[annotationname = pdate3]').textContent='';}}});};window.onload = () => {apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ibyt7").querySelectorAll( "[dataitem='true']" )].filter(
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
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ipmoz").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        console.log('There are no inside data elements');
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ilgkj").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        console.log('There are no inside data elements');
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i7uucq").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        console.log('There are no inside data elements');
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iqfsbf").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        console.log('There are no inside data elements');
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iqauu9").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        console.log('There are no inside data elements');
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};