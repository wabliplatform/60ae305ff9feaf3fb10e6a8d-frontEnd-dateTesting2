document.getElementById('inu0c').onclick = (event) => { console.log("hello world");
};let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';let project = new TempApi.Project();document.getElementById('iu2o').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Dashboard' ;}};$(
      function () { $("#datepicker").datepicker({format: 'dd-mm-yyyy'}); }
    );$(
      function () { $("#datepicker-2").datepicker({format: 'dd-mm-yyyy'}); }
    );document.getElementById('inu0c').onclick = (event) => {
    event.preventDefault();
    project['pName'] = document.querySelector("[annotationname = 'pName']").value;project['pdate1'] = document.querySelector("[annotationname = 'pdate1']").value.replace(/(?<day>\d+)-(?<month>\d+-)/,'$<month>$<day>-');project['pdate2'] = document.querySelector("[annotationname = 'pdate2']").value.replace(/(?<day>\d+)-(?<month>\d+-)/,'$<month>$<day>-');project['pdate3'] = document.querySelector("[annotationname = 'pdate3']").value.replace(/(?<day>\d+)-(?<month>\d+-)/,'$<month>$<day>-');apiProjectApi.createproject( project, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); }});};window.onload = () => {};