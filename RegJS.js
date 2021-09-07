    var formTabIndex = 234;
    var memNum = 1, orgMemNum = 1;
    var myWidth = 0, myHeight = 0, conf = false, errstr = "", errcaptcha = false, confkeydown = false;
    var df, ds, dow = 0;
    var tmp = '';
    var yr, mo, da = 0;
    var fndFN = new Array();
    var fndDR = new Array();
    var fndDRStart = new Array();
    var fndDREnd = new Array();
    var bw = 0;
    var _calendar_active_instance = {};
    window.onload = function() {
      BuildTabIndex();
      if (document.getElementById('downloadInstead') != null)
        document.getElementById('downloadInstead').style.display = "none";
      if (document.getElementById('co-form-content') != null)
        document.getElementById('co-form-content').style.display = "";
      getBrowserSize();
      var ajaxDiv = document.createElement("div");
      ajaxDiv.id = "ajax-progressbar";
      ajaxDiv.innerHTML = "Checking with server. Please wait...";
      document.getElementById("CORegForm").appendChild(ajaxDiv);
      document.getElementById("ajax-progressbar").style.display = "none";
      document.getElementById("forxpmsie").style.display = "none";
      document.getElementById("noscriptmsg").style.display = "none";
      document.getElementById("load").style.display = "block";
      calendar.set("dteHeadBirthday");
      calendar.set("dteHeadSac1Date");
      calendar.set("dteHeadSac2Date");
      calendar.set("dteHeadSac3Date");
      calendar.set("dteHeadSac4Date");
      calendar.set("dteHeadSac5Date");
      calendar.set("dteSpouseBirthday");
      calendar.set("dteSpouseSac1Date");
      calendar.set("dteSpouseSac2Date");
      calendar.set("dteSpouseSac3Date");
      calendar.set("dteSpouseSac4Date");
      calendar.set("dteSpouseSac5Date");
      if (document.getElementById("dteMemberBirthday") != null)
        calendar.set("dteMemberBirthday");
      if (document.getElementById("dteMem1Birthday") != null)
        calendar.set("dteMem1Birthday");
      if (document.getElementById("dteMemberBirthday") != null)
        calendar.set("dteMemberSac1Date");
      if (document.getElementById("dteMem1Sac1Date") != null)
        calendar.set("dteMem1Sac1Date");
      if (document.getElementById("dteMemberBirthday") != null)
        calendar.set("dteMemberSac2Date");
      if (document.getElementById("dteMem1Sac2Date") != null)
        calendar.set("dteMem1Sac2Date");
      if (document.getElementById("dteMemberBirthday") != null)
        calendar.set("dteMemberSac3Date");
      if (document.getElementById("dteMem1Sac3Date") != null)
        calendar.set("dteMem1Sac3Date");
      if (document.getElementById("dteMemberBirthday") != null)
        calendar.set("dteMemberSac4Date");
      if (document.getElementById("dteMem1Sac4Date") != null)
        calendar.set("dteMem1Sac4Date");
      if (document.getElementById("dteMemberBirthday") != null)
        calendar.set("dteMemberSac5Date");
      if (document.getElementById("dteMem1Sac5Date") != null)
        calendar.set("dteMem1Sac5Date");
      if (document.getElementById('lblidenv') != null)
        document.getElementById('lblidenv').style.display = 'none';
      if (document.getElementById('idenv') != null)
        document.getElementById('idenv').style.display = 'none';
      if (document.getElementById('callChurch') != null)
        document.getElementById('callChurch').style.display = 'none';
      if (document.getElementById('txaFamIDEnv') != null)
        document.getElementById('txaFamIDEnv').style.display = 'none';
      if (document.getElementById('rbtNewRegID') != null)
        document.getElementById('rbtNewRegID').checked = false;
      if (document.getElementById('rbtEditRegID') != null)
        document.getElementById('rbtEditRegID').checked = false;
      document.onclick = documentClick;
      var currDate = new Date()
      var dd = ((currDate.getDate())>=10)? (currDate.getDate()) : '0' + (currDate.getDate());
      var mm = ((currDate.getMonth()+1)>=10)? (currDate.getMonth()+1) : '0' + (currDate.getMonth()+1);
      var yy = currDate.getFullYear();
      var currdate = mm+"/"+dd+"/"+yy;
      for (var i=1; i<fndFN.length+1; i++) {
        if (document.getElementById('amtRateFund'+i).value == "")
          document.getElementById('amtRateFund'+i).value = '';
        if (document.getElementById('amtTotalFund'+i).value == "")
          document.getElementById('amtTotalFund'+i).value = '';
        if (document.getElementById('dteFund'+i+'Start').value == "")
          document.getElementById('dteFund'+i+'Start').value = currdate;
      }
      if (document.getElementById('btnDelMember') != null)
        document.getElementById('btnDelMember').disabled = true;
      if (document.getElementById('captsection') != null)
        document.getElementById('captsection').style.display = "none";
      if (document.getElementById('pModal') != null)
        document.getElementById('pModal').style.display = "none";
      if (document.getElementById('fullModal') != null)
        document.getElementById('fullModal').style.display = "none";
      var nVer = navigator.appVersion;
      var nAgt = navigator.userAgent.toUpperCase();
      if (((nAgt.search('WINDOWS NT 5.1')>0) ||
           (nAgt.search('WINDOWS NT 5.2')>0)) &&
          ((nAgt.search('TRIDENT/')>0) ||
           (nAgt.search('MSIE')>0))) {
        var elem = document.getElementById("CORegForm");
        elem.parentNode.removeChild(elem);
        document.getElementById("forxpmsie").style.display = "block";
        document.getElementById("forxpmsie").innerHTML =
        "You are using an incompatible browser on a Windows XP computer.<br>To use this registration form, download either <a title='http://www.google.com/chrome/' href='http://www.google.com/chrome/'>Chrome</a> or <a title='https://www.mozilla.org/en-US/firefox/desktop/' href='https://www.mozilla.org/en-US/firefox/desktop/'>Firefox</a> and set it as your default browser.";
      }
    };
    function BuildTabIndex() {
      var tabindex = 1;
      $("input,select,radio,checkbox,textarea,button").each(function() {
        if (this.type != "hidden") {
          var $input = $(this);
          $input.attr("tabindex", tabindex);
          tabindex++;
        }
      });
    }
    function DoKeyUp(ele) {
        var key = event.keyCode || event.charCode, val = ele.value;
    	  if ((key === 8) || (key === 9) || (key === 46)) {
    	      clickOutSide();
    	       	  return true;
    	  }
    	  if (key === 84) {
    	      var today = new Date(),
    		  dd = String(today.getDate()).padStart(2, "0"),
    		  mm = String(today.getMonth() + 1).padStart(2, "0"), //January is 0!
    		  yyyy = today.getFullYear();
    	      today = mm + "/" + dd + "/" + yyyy;
    	      ele.value = today;
    	      clickOutSide();
    	      return true;
    	  }
    	  else if (ele.value === "mm/dd/yyyy") {
    	      ele.value = event.key;
    	      return true;
    	  }
    	  else {
    	      var regex = new RegExp(/[^0-9|\/]/, "g");
    	      if (regex.test(val)) {
    		  var txt = val.replace(/[^0-9|\/]/, "");
    		  ele.value = txt;
    		  return true;
    	      }
    	  }
    	  if ((val.length === 1) && (val === "/")) {
    	      ele.value = "01/";
    	  }
    	  else if (val.length === 2) {
    	      if (val.charAt(1) === "/") {
    		  if (val.charAt(0) === "0") {
    		      ele.value = "1" + val;
    		  }
    		  else {
    		      ele.value = "0" + val;
    		  }
    	      }
    	      else {
    	          ele.value = val + "/";
    	      }
    	  }
    	  else if (val.length === 3) {
    	      if (val.charAt(2) !== "/") {
    	          ele.value = val.charAt(0) + val.charAt(1) + "/" + val.charAt(2);
    	      }
    	  }
    	  else if (val.length === 4) {
    	      if (val.charAt(3) === "/") {
    	          var lv3 = val.length,
    		      ov3 = val;
    		  ele.value = ov3.substr(0, lv3-1);
    	      }
    	  }
    	  else if (val.length === 5) {
    	      if (val.charAt(4) === "/") {
    	          ele.value = val.charAt(0) + val.charAt(1) + val.charAt(2) + "0" + val.charAt(3) + val.charAt(4);
    	      }
    	      else {
    	          ele.value = val + "/";
    	      }
    	  }
    	  else if (val.length === 6) {
    	      if (val.charAt(5) !== "/") {
    	          ele.value = val.charAt(0) + val.charAt(1) + val.charAt(2) + val.charAt(3) + val.charAt(4) + "/" + val.charAt(5);
    	      }
    	  }
    	  else if (val.length >= 7) {
    	      if (val.charAt(6) === "/") {
    	          ele.value = val.charAt(0) + val.charAt(1) + val.charAt(2) + val.charAt(3) + val.charAt(4) + val.charAt(5);
    	      }
    	      else if (val.charAt(7) === "/") {
    	          ele.value = val.charAt(0) + val.charAt(1) + val.charAt(2) + val.charAt(3) + val.charAt(4) + val.charAt(5) + val.charAt(6);
    	      }
    	      else if (val.charAt(8) === "/") {
    	          ele.value = val.charAt(0) + val.charAt(1) + val.charAt(2) + val.charAt(3) + val.charAt(4) + val.charAt(5) + val.charAt(6) + val.charAt(7);
    	      }
    	      else if (val.charAt(9) === "/") {
    	          ele.value = val.charAt(0) + val.charAt(1) + val.charAt(2) + val.charAt(3) + val.charAt(4) + val.charAt(5) + val.charAt(6) + val.charAt(7) + val.charAt(8);
            }
        }
    }
    function GetNewCaptcha() {
      errcaptcha = false;
      if (document.getElementById('captsection') != null) {
        document.getElementById('captsection').style.display = "block";
        document.getElementById("appCaptcha").value = "";
        var x = new Date(), h = x.getHours(), m = x.getMinutes(), s = x.getSeconds();
        document.getElementById("idcaptcha").src = "https://forms.parishdata.com/PDSForms/CaptchaService/Captcha.gif?" + m + s;
        $("#idcaptcha").on("load",function(){
          errcaptcha = false;
        }).on("error", function(){
          errcaptcha = true;
          showmodal("appCaptcha", "Information", "Captcha service is not available.<br><br>Please contact your church.");
        });
      }
    }
    function showprogress(pbody,disp) {
      if (disp == true) {
        document.getElementById("pbody").innerHTML = '<div class="loader""></div><div style="padding-top: 10px;">'+pbody+'</div>';
        if ($("#pModal").css("display") == "none")
          $("#pModal").show();
      }
      else {
        $("#pModal").hide();
      }
    }
    function showmodal(ele, txthead, txtbody) {
      confkeydown = false;
      var modal = document.getElementById("fullModal");
      document.getElementById("modal-header").style.display = "block";
      document.getElementById("modheadtitle").innerHTML = '<span class="modalmark">&nbsp;&#161;&nbsp;</span>&nbsp;&nbsp;'+txthead;
      document.getElementById("modheadbody").innerHTML = '<span style="font-weight: 600;">'+txtbody+'</span>';
      document.getElementById("modal-footer").style.display = "none";
      document.getElementById("modbtn").style.display = "none";
      var by = document.getElementById("btnYes"), bn = document.getElementById("btnNo");
      if (txthead == "Confirmation") {
        confkeydown = true;
        document.getElementById("btnNo").style.display = "inline";
        document.getElementById("btnYes").value = "Yes";
        document.getElementById("btnNo").value = "No";
        document.getElementById("modal-footer").style.display = "block";
        document.getElementById("modbtn").style.display = "block";
        document.getElementById("modheadtitle").innerHTML = '<span class="modalmark">&nbsp;&#63;&nbsp;</span>&nbsp;&nbsp;'+txthead;
        document.getElementById("modheadbody").innerHTML = '<span style="font-weight: 600;">'+txtbody+'</span>';
        modal.style.display = "block";
        by.onclick = function() {
          conf = true;
          modal.style.display = "none";
          document.getElementById("CORegForm").submit();
        }
        bn.onclick = function() {
          modal.style.display = "none";
          conf = false;
        }
      }
      else if (txthead != "Information") {
        var btn = document.getElementById(ele);
        btn.onclick = function() {
          document.getElementById("modal-footer").style.display = "block";
          document.getElementById("modheadtitle").innerHTML = '<span class="modalmark">&nbsp;&#161;&nbsp;</span>&nbsp;&nbsp;'+txthead;
          document.getElementById("modheadbody").innerHTML = '<span style="font-weight: 600;">'+txtbody+'</span>';
          modal.style.display = "block";
        }
        document.getElementById("modbtn").style.display = "block";
        document.getElementById("btnNo").style.display = "none";
        document.getElementById("btnYes").value = "OK";
        by.onclick = function() {
          modal.style.display = "none";
          if (document.getElementById(ele) != null)
            document.getElementById(ele).focus();
        }
      }
      else {
        modal.style.display = "block";
        document.getElementById("modbtn").style.display = "block";
        document.getElementById("btnNo").style.display = "none";
        document.getElementById("btnYes").value = "OK";
        by.onclick = function() {
          modal.style.display = "none";
          if (document.getElementById(ele) != null)
            document.getElementById(ele).focus();
        }
      }
      var span = document.getElementsByClassName("closebtn")[0];
      span.onclick = function() {
        modal.style.display = "none";
        if (document.getElementById(ele) != null)
          document.getElementById(ele).focus();
      }
      window.onclick = function(event) {
        if ((event.target == modal) && (confkeydown == false)) {
          modal.style.display = "none";
          if (document.getElementById(ele) != null)
            document.getElementById(ele).focus();
        }
      }
      window.onkeydown = function(event) {
        var keyCode = (event.keyCode ? event.keyCode : event.which);
        if ((modal.style.display == "block") && (keyCode === 13) && (confkeydown == false)) {
          modal.style.display = "none";
          if (document.getElementById(ele) != null)
            document.getElementById(ele).focus();
        }
      }
    }
    function openNewWindow() {
      var popupWin = window.open('', resizable=1);
    }
    function showID() {
      if (document.getElementById('lblidenv') != null)
        document.getElementById('lblidenv').style.display = 'inline';
      if (document.getElementById('idenv') != null)
        document.getElementById('idenv').style.display = 'inline';
      if (document.getElementById('callChurch') != null)
        document.getElementById('callChurch').style.display = 'table-row';
      document.getElementById('txaFamIDEnv').style.display = 'inline';
    }
    function hideID() {
      if (document.getElementById('lblidenv') != null)
        document.getElementById('lblidenv').style.display = 'none';
      if (document.getElementById('idenv') != null)
        document.getElementById('idenv').style.display = 'none';
      if (document.getElementById('callChurch') != null)
        document.getElementById('callChurch').style.display = 'none';
      document.getElementById('txaFamIDEnv').style.display = 'none';
    }
    // display require labels
    function modifyDisplay() {
      if (((document.getElementById('rbtEditRegID') != null) && (document.getElementById('rbtEditRegID').checked==true)) ||
          ((document.getElementById('rbtNewRegID') != null) && (document.getElementById('rbtNewRegID').checked==true))) {
        var reqLbls = document.getElementsByTagName('span');
        var i = reqLbls.length;
        while(i--) {
          // r0=require for new
          if (reqLbls[i].id == 'r0') {
            reqLbls[i].innerHTML= '&nbsp;&nbsp';
            if ((document.getElementById('rbtNewRegID') != null) && (document.getElementById('rbtNewRegID').checked==true) && (reqLbls[i].id == 'r0')) {
              reqLbls[i].innerHTML = '*';
            }
          }
        }
      }
    }
    // get browser size
    function getBrowserSize() {
      bw = window.innerWidth;
    }
    function AddNewMem() {
      try {
        if (memNum < orgMemNum)
          memNum = orgMemNum;
        memNum = memNum+1;
        if (document.getElementById('btnDelMember') != null)
          document.getElementById('btnDelMember').disabled = false;
        var table = document.getElementById("mainTable");
        var mainTableBody = document.getElementById("mainTbody");
        var tr1 = document.createElement('tr');
        tr1.setAttribute('name', 'tr1'+memNum);
        tr1.setAttribute('id', 'tr1'+memNum);
        mainTableBody.appendChild(tr1);
        formTabIndex = formTabIndex + 1;
        tr1.insertCell(0).innerHTML = '<td><input type="button" name="btnMember'+memNum+'Btn" id="btnMember'+memNum+'Btn" title="Toggle Member '+memNum+' Section" value="Hide" onclick="toggleMember('+memNum+')" style="width:80px" class="btnstyle" /></td>';
        var s = "Member 1", res = "Member 1";
        if (res !== "") {
          res = res.replace(/[0-9]/g, "");
        }
        $(tr1).append('<td colspan=3><span class="titlelbl">'+res+' '+memNum+'</span></td>');
        tr1.insertCell(2).innerHTML = '<td><span class="lbl" id="labelMem'+memNum+'Type">&nbsp;&nbsp;Type&nbsp;&nbsp;</span></td>';
        tr1.insertCell(3).innerHTML = '<td>'+
          '<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Type" id="cboMem'+memNum+'Type" style="width:110px" title="Select a type in the pull down list" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="2">Adult</option>'+
          '<option value="3">Young Adult</option>'+
          '<option value="4">Child</option>'+
          '<option value="5">Other</option>'+
          '</select>'+
          '</td>';
        var tr2 = document.createElement('tr');
        tr2.setAttribute('name', 'tr2'+memNum);
        tr2.setAttribute('id', 'tr2'+memNum);
        mainTableBody.appendChild(tr2);
        formTabIndex = formTabIndex + 1;
        tr2.insertCell(0).innerHTML = '<td><span class="lbl">Title</span></td>';
        tr2.insertCell(1).innerHTML = '<td>'+
          '<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Title" id="cboMem'+memNum+'Title" style="width:110px" title="Select a title in the pull down list" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="">None</option>'+
          '<option value="Mr.">Mr.</option>'+
          '<option value="Ms.">Ms.</option>'+
          '<option value="Mrs.">Mrs.</option>'+
          '<option value="Miss">Miss</option>'+
          '<option value="Dr.">Dr.</option>'+
          '<option value="Fr.">Fr.</option>'+
          '<option value="Msgr.">Msgr.</option>'+
          '<option value="Sr.">Sr.</option>'+
          '<option value="Rev.">Rev.</option>'+
          '<option value="Deacon">Deacon</option>'+
          '<option value="Sr.">Sr.</option>'+
          '<option value="Sra">Sra</option>'+
          '<option value="M/M">M/M</option>'+
          '<option value="M/M">M/M</option>'+
          '<option value="D/M">D/M</option>'+
          '<option value="D/M">D/M</option>'+
          '<option value="M/D">M/D</option>'+
          '<option value="M/D">M/D</option>'+
          '<option value="D/D">D/D</option>'+
          '<option value="D/D">D/D</option>'+
          '<option value="S/S">S/S</option>'+
          '<option value="S/S">S/S</option>'+
          '<option value="Adm">Adm</option>'+
          '<option value="Amn">Amn</option>'+
          '<option value="A1C">A1C</option>'+
          '<option value="BG">BG</option>'+
          '<option value="BG">BG</option>'+
          '<option value="BG">BG</option>'+
          '<option value="Cpt">Cpt</option>'+
          '<option value="Cpt">Cpt</option>'+
          '<option value="Cpt">Cpt</option>'+
          '<option value="Cpt">Cpt</option>'+
          '<option value="CMSgt">CMSgt</option>'+
          '<option value="Col">Col</option>'+
          '<option value="Col">Col</option>'+
          '<option value="Col">Col</option>'+
          '<option value="CSM">CSM</option>'+
          '<option value="Cmdr">Cmdr</option>'+
          '<option value="Cdr">Cdr</option>'+
          '<option value="Como">Como</option>'+
          '<option value="CPL">CPL</option>'+
          '<option value="Ens">Ens</option>'+
          '<option value="1Lt">1Lt</option>'+
          '<option value="1Lt">1Lt</option>'+
          '<option value="1Lt">1Lt</option>'+
          '<option value="1SG">1SG</option>'+
          '<option value="1st Sgt">1st Sgt</option>'+
          '<option value="Gen">Gen</option>'+
          '<option value="Gen">Gen</option>'+
          '<option value="Gen">Gen</option>'+
          '<option value="GySgt">GySgt</option>'+
          '<option value="LCpl">LCpl</option>'+
          '<option value="Lt">Lt</option>'+
          '<option value="Ltc">Ltc</option>'+
          '<option value="Ltc">Ltc</option>'+
          '<option value="Ltc">Ltc</option>'+
          '<option value="LCdr">LCdr</option>'+
          '<option value="Ltg">Ltg</option>'+
          '<option value="Ltg">Ltg</option>'+
          '<option value="Ltg">Ltg</option>'+
          '<option value="LtJG">LtJG</option>'+
          '<option value="Maj">Maj</option>'+
          '<option value="Maj">Maj</option>'+
          '<option value="Maj">Maj</option>'+
          '<option value="MG">MG</option>'+
          '<option value="MG">MG</option>'+
          '<option value="MG">MG</option>'+
          '<option value="MGySgt">MGySgt</option>'+
          '<option value="MSG">MSG</option>'+
          '<option value="MSgt">MSgt</option>'+
          '<option value="MSgt">MSgt</option>'+
          '<option value="PSG">PSG</option>'+
          '<option value="PVT">PVT</option>'+
          '<option value="PVT">PVT</option>'+
          '<option value="PFC">PFC</option>'+
          '<option value="PFC">PFC</option>'+
          '<option value="RAdm">RAdm</option>'+
          '<option value="RDML">RDML</option>'+
          '<option value="2Lt">2Lt</option>'+
          '<option value="2Lt">2Lt</option>'+
          '<option value="2Lt">2Lt</option>'+
          '<option value="SMSgt">SMSgt</option>'+
          '<option value="SGT">SGT</option>'+
          '<option value="SFC">SFC</option>'+
          '<option value="SGM">SGM</option>'+
          '<option value="SMA">SMA</option>'+
          '<option value="SP4">SP4</option>'+
          '<option value="SrA">SrA</option>'+
          '<option value="SSgt">SSgt</option>'+
          '<option value="SSgt">SSgt</option>'+
          '<option value="SSG">SSG</option>'+
          '<option value="TSgt">TSgt</option>'+
          '<option value="WO">WO</option>'+
          '<option value="WO">WO</option>'+
          '<option value="WO">WO</option>'+
          '<option value="CWO2">CWO2</option>'+
          '<option value="CWO3">CWO3</option>'+
          '<option value="CWO4">CWO4</option>'+
          '</select>'+
          '</td>';
        formTabIndex = formTabIndex + 1;
        tr2.insertCell(2).innerHTML = '<td><span class="lbl">&nbsp;&nbsp;First Name</span></td>';
        tr2.insertCell(3).innerHTML = '<td><input tabindex="'+formTabIndex+'" maxlength="100" style="width:150px" title="Please enter first name here" name="txaMem'+memNum+'FirstName" id="txaMem'+memNum+'FirstName" class="textboxstyle" /></td>';
        formTabIndex = formTabIndex + 1;
        tr2.insertCell(4).innerHTML = '<td><span class="lbl">&nbsp;&nbsp;Last Name</span></td>';
        tr2.insertCell(5).innerHTML = '<td><input tabindex="'+formTabIndex+'" maxlength="100" style="width:150px" title="Please enter last name here" name="txaMem'+memNum+'LastName" id="txaMem'+memNum+'LastName" class="textboxstyle" /></td>';
        formTabIndex = formTabIndex + 1;
        tr2.insertCell(6).innerHTML = '<td><span class="lbl">Suffix</span></td>';
        tr2.insertCell(7).innerHTML = '<td>'+
          '<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Suffix" id="cboMem'+memNum+'Suffix" style="width:75px" title="Select a suffix in the pull down list" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="">None</option>'+
          '<option value="Sr.">Sr.</option>'+
          '<option value="Jr.">Jr.</option>'+
          '<option value="II">II</option>'+
          '<option value="III">III</option>'+
          '<option value="IV">IV</option>'+
          '<option value="V">V</option>'+
          '<option value="VI">VI</option>'+
          '<option value="VII">VII</option>'+
          '<option value="VIII">VIII</option>'+
          '<option value="XV">XV</option>'+
          '<option value="X">X</option>'+
          '</select>'+
          '</td>';
        var tr3 = document.createElement('tr');
        tr3.setAttribute('name', 'tr3'+memNum);
        tr3.setAttribute('id', 'tr3'+memNum);
        mainTableBody.appendChild(tr3);
        formTabIndex = formTabIndex + 1;
        tr3.insertCell(0).innerHTML = '<td><span class="lbl">Relationship</span></td>';
        tr3.insertCell(1).innerHTML = '<td>'+
          '<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Relationship" id="cboMem'+memNum+'Relationship" style="width:110px" title="select a relationship in the pull down list" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Adopted Daughter">Adopted Daughter</option>'+
          '<option value="Adopted Son">Adopted Son</option>'+
          '<option value="Aunt">Aunt</option>'+
          '<option value="Brother">Brother</option>'+
          '<option value="Cousin">Cousin</option>'+
          '<option value="Daughter">Daughter</option>'+
          '<option value="Father">Father</option>'+
          '<option value="Granddaughter">Granddaughter</option>'+
          '<option value="Grandfather">Grandfather</option>'+
          '<option value="Grandmother">Grandmother</option>'+
          '<option value="Grandson">Grandson</option>'+
          '<option value="Head">Head</option>'+
          '<option value="Husband">Husband</option>'+
          '<option value="Individual Living Alone">Individual Living Alone</option>'+
          '<option value="In-Law">In-Law</option>'+
          '<option value="Mother">Mother</option>'+
          '<option value="Nephew">Nephew</option>'+
          '<option value="Niece">Niece</option>'+
          '<option value="Other">Other</option>'+
          '<option value="Significant Other">Significant Other</option>'+
          '<option value="Son">Son</option>'+
          '<option value="Stepdaughter">Stepdaughter</option>'+
          '<option value="Stepfather">Stepfather</option>'+
          '<option value="Stepmother">Stepmother</option>'+
          '<option value="Stepson">Stepson</option>'+
          '<option value="Uncle">Uncle</option>'+
          '<option value="Wife">Wife</option>'+
          '</select>'+
          '</td>';
        formTabIndex = formTabIndex + 1;
        tr3.insertCell(2).innerHTML = '<td><span class="lbl">&nbsp;&nbsp;Middle Name</span></td>';
        tr3.insertCell(3).innerHTML = '<td><input tabindex="'+formTabIndex+'" maxlength="100" style="width:150px" title="Please enter middle name here" name="txaMem'+memNum+'MidName" id="txaMem'+memNum+'MidName" class="textboxstyle" /></td>';
        formTabIndex = formTabIndex + 1;
        tr3.insertCell(4).innerHTML = '<td><span class="lbl">&nbsp;&nbsp;Nickname</span></td>';
        tr3.insertCell(5).innerHTML = '<td><input tabindex="'+formTabIndex+'" maxlength="100" style="width:150px" title="Please enter nickname here" name="txaMem'+memNum+'Nickname" id="txaMem'+memNum+'Nickname" class="textboxstyle" /></td>';
        formTabIndex = formTabIndex + 1;
        tr3.insertCell(6).innerHTML = '<td><span class="lbl">Maiden Name</span></td>';
        tr3.insertCell(7).innerHTML = '<td><input tabindex="'+formTabIndex+'" maxlength="100" style="width:150px" title="Please enter maiden name" name="txaMem'+memNum+'MaidName" id="txaMem'+memNum+'MaidName" class="textboxstyle" /></td>';
        var tr4 = document.createElement('tr');
        tr4.setAttribute('name', 'tr4'+memNum);
        tr4.setAttribute('id', 'tr4'+memNum);
        mainTableBody.appendChild(tr4);
        formTabIndex = formTabIndex + 1;
        tr4.insertCell(0).innerHTML = '<td><span class="lbl">Ethnicity</span></td>';
        tr4.insertCell(1).innerHTML = '<td>'+
          '<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Ethnicity" id="cboMem'+memNum+'Ethnicity" style="width: 110px" title="select an ethnicity in the pull down list" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Italian">Italian</option>'+
          '<option value="Mexican">Mexican</option>'+
          '<option value="Romanian">Romanian</option>'+
          '<option value="Russian">Russian</option>'+
          '<option value="slovenian">slovenian</option>'+
          '</select>'+
          '</td>';
        formTabIndex = formTabIndex + 1;
        tr4.insertCell(2).innerHTML = '<td><span class="lbl">&nbsp;&nbsp;Birth Date</span></td>';
        tr4.insertCell(3).innerHTML = '<td><input tabindex="'+formTabIndex+'" maxlength="10" style="width:85px" autocomplete="off" value="mm/dd/yyyy" title="Please select a birth date" name="dteMem'+memNum+'Birthday" id="dteMem'+memNum+'Birthday" onkeydown="onKeyPressed(event, this);" onFocus="this.select()" class="textboxstyle dateInput" onchange="checkDate(this.id)" onkeyup="DoKeyUp(this)" /></td>';
        calendar.set('dteMem'+memNum+'Birthday');
        formTabIndex = formTabIndex + 1;
        tr4.insertCell(4).innerHTML = '<td>&nbsp;&nbsp;<span class="lbl">Gender</span>';
        tr4.insertCell(5).innerHTML = '<td><input tabindex="'+formTabIndex+'" type="radio" title="select mem1 gender" name="rbtMem'+memNum+'Gender" id="rbtMem'+memNum+'GenderMale" value="0" class="rbtnstyle" /><span class="lbl"> Female</span>&nbsp;&nbsp;<input tabindex="'+(formTabIndex+1)+'" type="radio" title="select mem1 gender" name="rbtMem'+memNum+'Gender" id="rbtMem'+memNum+'GenderFemale" value="1" class="rbtnstyle" /><span class="lbl"> Male</span></td>';
        formTabIndex = formTabIndex + 2;
        var tr5 = document.createElement('tr');
        tr5.setAttribute('name', 'tr5'+memNum);
        tr5.setAttribute('id', 'tr5'+memNum);
        mainTableBody.appendChild(tr5);
        formTabIndex = formTabIndex + 1;
        tr5.insertCell(0).innerHTML = '<td><span class="lbl">Grade/Degree</span></td>';
        tr5.insertCell(1).innerHTML = '<td>'+
          '<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Grade" id="cboMem'+memNum+'Grade" title="select a grade/degree in the pull down list" style="width:110px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Preschool">Preschool</option>'+
          '<option value="Kindergarten">Kindergarten</option>'+
          '<option value="1">1</option>'+
          '<option value="2">2</option>'+
          '<option value="3">3</option>'+
          '<option value="4">4</option>'+
          '<option value="5">5</option>'+
          '<option value="6">6</option>'+
          '<option value="7">7</option>'+
          '<option value="8">8</option>'+
          '<option value="9">9</option>'+
          '<option value="10">10</option>'+
          '<option value="11">11</option>'+
          '<option value="12">12</option>'+
          '<option value="HS Grad">HS Grad</option>'+
          '<option value="Technical School">Technical School</option>'+
          '<option value="College">College</option>'+
          '<option value="Associate">Associate</option>'+
          '<option value="Bachelor">Bachelor</option>'+
          '<option value="Masters">Masters</option>'+
          '<option value="Doctorate">Doctorate</option>'+
          '</select>'+
          '</td>';
        formTabIndex = formTabIndex + 1;
        tr5.insertCell(2).innerHTML = '<td><span class="lbl">&nbsp;&nbsp;School</span></td>';
        tr5.insertCell(3).innerHTML = '<td>'+
          '<select tabindex="'+formTabIndex+'" title="select a school in the pull down list" name="cboMem'+memNum+'KW1" id="cboMem'+memNum+'KW1" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Agape">Agape</option>'+
          '<option value="Ashland University">Ashland University</option>'+
          '<option value="Aurora">Aurora</option>'+
          '<option value="Aurora Cooperative">Aurora Cooperative</option>'+
          '<option value="Benedictine">Benedictine</option>'+
          '<option value="Berkshire">Berkshire</option>'+
          '<option value="Berkshire Elementary">Berkshire Elementary</option>'+
          '<option value="Berkshire High School">Berkshire High School</option>'+
          '<option value="Bowling Green University">Bowling Green University</option>'+
          '<option value="Burton Elementary">Burton Elementary</option>'+
          '<option value="Cardinal Elementary">Cardinal Elementary</option>'+
          '<option value="Cardinal High School">Cardinal High School</option>'+
          '<option value="Cardinal Middle School">Cardinal Middle School</option>'+
          '<option value="Chagrin Falls">Chagrin Falls</option>'+
          '<option value="Chagrin Falls High School">Chagrin Falls High School</option>'+
          '<option value="Chardon High School">Chardon High School</option>'+
          '<option value="Chardon Middle School">Chardon Middle School</option>'+
          '<option value="Cleveland State University">Cleveland State University</option>'+
          '<option value="College">College</option>'+
          '<option value="Emory University">Emory University</option>'+
          '<option value="Gardiner Early Learning Center">Gardiner Early Learning Center</option>'+
          '<option value="Gilmour Academy">Gilmour Academy</option>'+
          '<option value="Hambden Elementary">Hambden Elementary</option>'+
          '<option value="Hawken">Hawken</option>'+
          '<option value="Heartland">Heartland</option>'+
          '<option value="Hillsdale College">Hillsdale College</option>'+
          '<option value="Homeschool">Homeschool</option>'+
          '<option value="Huntsburg Preschool">Huntsburg Preschool</option>'+
          '<option value="J.A. Garfield Elementary">J.A. Garfield Elementary</option>'+
          '<option value="John Carroll University">John Carroll University</option>'+
          '<option value="Jurdak Elementary">Jurdak Elementary</option>'+
          '<option value="Just 4 Kidz Preschool">Just 4 Kidz Preschool</option>'+
          '<option value="JWU">JWU</option>'+
          '<option value="Kenston Elementary">Kenston Elementary</option>'+
          '<option value="Kenston High School">Kenston High School</option>'+
          '<option value="Kenston Middle">Kenston Middle</option>'+
          '<option value="Kent State University">Kent State University</option>'+
          '<option value="Lakeland Community College">Lakeland Community College</option>'+
          '<option value="Laurel School">Laurel School</option>'+
          '<option value="Lawrence School">Lawrence School</option>'+
          '<option value="Lindsey Elementary">Lindsey Elementary</option>'+
          '<option value="Lyceum">Lyceum</option>'+
          '<option value="Maple Elementary">Maple Elementary</option>'+
          '<option value="Mentor Methodist Preschool">Mentor Methodist Preschool</option>'+
          '<option value="Metzenbaum">Metzenbaum</option>'+
          '<option value="Metzenbaum Preschool">Metzenbaum Preschool</option>'+
          '<option value="Miami University">Miami University</option>'+
          '<option value="Miss Pat\'s Preschool">Miss Pat\'s Preschool</option>'+
          '<option value="Munson Elementary">Munson Elementary</option>'+
          '<option value="NDCL">NDCL</option>'+
          '<option value="NDES">NDES</option>'+
          '<option value="NDPS">NDPS</option>'+
          '<option value="Newbury Elementary School">Newbury Elementary School</option>'+
          '<option value="Newbury High School">Newbury High School</option>'+
          '<option value="Notre Dame College">Notre Dame College</option>'+
          '<option value="Notre Dame Elementary">Notre Dame Elementary</option>'+
          '<option value="Notre Dame Preschool">Notre Dame Preschool</option>'+
          '<option value="Ohio State University">Ohio State University</option>'+
          '<option value="Park Elementary">Park Elementary</option>'+
          '<option value="Peace Lutheran Preschool">Peace Lutheran Preschool</option>'+
          '<option value="School">School</option>'+
          '<option value="Shaker">Shaker</option>'+
          '<option value="Small Hands Big Dreams">Small Hands Big Dreams</option>'+
          '<option value="Solon Middle School">Solon Middle School</option>'+
          '<option value="St. Anselm">St. Anselm</option>'+
          '<option value="St. Helen Preschool">St. Helen Preschool</option>'+
          '<option value="St. Helen School">St. Helen School</option>'+
          '<option value="St. Ignatius">St. Ignatius</option>'+
          '<option value="St. Mary">St. Mary</option>'+
          '<option value="St. Mary - Chardon">St. Mary - Chardon</option>'+
          '<option value="Student">Student</option>'+
          '<option value="Technical School">Technical School</option>'+
          '<option value="The Goddard School">The Goddard School</option>'+
          '<option value="The Ohio State University">The Ohio State University</option>'+
          '<option value="Timmons Elementary">Timmons Elementary</option>'+
          '<option value="University of Akron">University of Akron</option>'+
          '<option value="University of Cincinnati">University of Cincinnati</option>'+
          '<option value="University of Findlay">University of Findlay</option>'+
          '<option value="US Air Force Academy">US Air Force Academy</option>'+
          '<option value="Valley Christian">Valley Christian</option>'+
          '<option value="West Geauga High School">West Geauga High School</option>'+
          '<option value="West Geauga Middle School">West Geauga Middle School</option>'+
          '<option value="West Virginia University">West Virginia University</option>'+
          '<option value="Westwood Elementary">Westwood Elementary</option>'+
          '</select>'+
          '</td>';
        formTabIndex = formTabIndex + 1;
        tr5.insertCell(4).innerHTML = '<td><span class="lbl">&nbsp;&nbsp;Language</span></td>';
        tr5.insertCell(5).innerHTML = '<td>'+
          '<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Lang1" id="cboMem'+memNum+'Lang1" title="select a language in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Albanian">Albanian</option>'+
          '<option value="Chinese">Chinese</option>'+
          '<option value="Croatian">Croatian</option>'+
          '<option value="Croation">Croation</option>'+
          '<option value="Czechoslovakian">Czechoslovakian</option>'+
          '<option value="English">English</option>'+
          '<option value="French">French</option>'+
          '<option value="Gaelic">Gaelic</option>'+
          '<option value="German">German</option>'+
          '<option value="Hungarian">Hungarian</option>'+
          '<option value="Italian">Italian</option>'+
          '<option value="japanese">japanese</option>'+
          '<option value="Korean">Korean</option>'+
          '<option value="Lebanese">Lebanese</option>'+
          '<option value="Lithuania">Lithuania</option>'+
          '<option value="Pilipino">Pilipino</option>'+
          '<option value="Polish">Polish</option>'+
          '<option value="Romanian">Romanian</option>'+
          '<option value="Sign">Sign</option>'+
          '<option value="Slovak">Slovak</option>'+
          '<option value="Slovenian">Slovenian</option>'+
          '<option value="Spanish">Spanish</option>'+
          '<option value="Tagalog">Tagalog</option>'+
          '<option value="Vietnamese">Vietnamese</option>'+
          '</select>'+
          '</td>';
        formTabIndex = formTabIndex + 1;
        tr5.insertCell(6).innerHTML = '<td><span class="lbl">Marital Status</span></td>';
        tr5.insertCell(7).innerHTML = '<td>'+
          '<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Mary" id="cboMem'+memNum+'Mary" title="select a marital status in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="1st Marriage">1st Marriage</option>'+
          '<option value="1st Marriage N">1st Marriage N</option>'+
          '<option value="1st Marriage Y">1st Marriage Y</option>'+
          '<option value="2nd Marriage N">2nd Marriage N</option>'+
          '<option value="2nd Marriage Y">2nd Marriage Y</option>'+
          '<option value="3rd Marriage N">3rd Marriage N</option>'+
          '<option value="3rd Marriage Y">3rd Marriage Y</option>'+
          '<option value="Annulled">Annulled</option>'+
          '<option value="Divorced">Divorced</option>'+
          '<option value="Divorced-Remarried">Divorced-Remarried</option>'+
          '<option value="Married">Married</option>'+
          '<option value="Separated">Separated</option>'+
          '<option value="Single">Single</option>'+
          '<option value="Validation">Validation</option>'+
          '<option value="Widowed">Widowed</option>'+
          '<option value="Widowed-Remarried">Widowed-Remarried</option>'+
          '</select>'+
          '</td>';
        var tr6 = document.createElement('tr');
        tr6.setAttribute('name', 'tr6'+memNum);
        tr6.setAttribute('id', 'tr6'+memNum);
        mainTableBody.appendChild(tr6);
        tr6.insertCell(0).innerHTML = '<td></td>';
        tr6.insertCell(1).innerHTML = '<td></td>';
        formTabIndex = formTabIndex + 1;
        tr6.insertCell(2).innerHTML = '<td><span class="lbl">&nbsp;&nbsp;District</span></td>';
        tr6.insertCell(3).innerHTML = '<td>'+
          '<select tabindex="'+formTabIndex+'" title="select a district in the pull down list" name="cboMem'+memNum+'KW2" id="cboMem'+memNum+'KW2" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Berkshire">Berkshire</option>'+
          '<option value="Burton">Burton</option>'+
          '<option value="Cardinal">Cardinal</option>'+
          '<option value="Chardon">Chardon</option>'+
          '<option value="Kenston">Kenston</option>'+
          '<option value="Maplewood">Maplewood</option>'+
          '<option value="Middlefield">Middlefield</option>'+
          '<option value="Newbury">Newbury</option>'+
          '<option value="West Geauga">West Geauga</option>'+
          '<option value="Willoughby-Eastlake">Willoughby-Eastlake</option>'+
          '</select>'+
          '</td>';
        var tr7 = document.createElement('tr');
        tr7.setAttribute('name', 'tr7'+memNum);
        tr7.setAttribute('id', 'tr7'+memNum);
        mainTableBody.appendChild(tr7);
        tr7.insertCell(0).innerHTML = '<td></td>';
        tr7.insertCell(1).innerHTML = '<td></td>';
        formTabIndex = formTabIndex + 1;
        tr7.insertCell(2).innerHTML = '<td><span class="lbl">&nbsp;&nbsp;Phone 1</span></td>';
        var td7 = document.createElement('td');
        td7.setAttribute('id', 'td7'+memNum);
        td7.setAttribute('colspan', '8');
        tr7.appendChild(td7);
        td7.innerHTML = 
          '<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Phone1Type" id="cboMem'+memNum+'Phone1Type" title="select a phone type in the pull down list" style="width:120px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Cellular Head">Cellular Head</option>'+
          '<option value="Cellular Spouse">Cellular Spouse</option>'+
          '<option value="Home Phone">Home Phone</option>'+
          '<option value="Other">Other</option>'+
          '<option value="Work Phone">Work Phone</option>'+
          '</select>'+
          ' ( <input tabindex="'+(formTabIndex+1)+'" maxlength="3" style="width:30px" title="enter phone area code" name="txnMem'+memNum+'Phone1Num1" id="txnMem'+memNum+'Phone1Num1" onkeyup="autoTab(this, document.CORegForm.txnMem'+memNum+'Phone1Num2)" class="textboxstyle" /> ) '+
          '<input tabindex="'+(formTabIndex+2)+'" maxlength="3" style="width:30px" title="enter phone prefix" name="txnMem'+memNum+'Phone1Num2" id="txnMem'+memNum+'Phone1Num2" onkeyup="autoTab(this, document.CORegForm.txnMem'+memNum+'Phone1Num3)" class="textboxstyle" /> - '+
          '<input tabindex="'+(formTabIndex+3)+'" maxlength="4" style="width:50px" title="enter phone line number" name="txnMem'+memNum+'Phone1Num3" id="txnMem'+memNum+'Phone1Num3" class="textboxstyle" />'+
          '<input tabindex="'+(formTabIndex+4)+'" type="checkbox" name="cbxMem'+memNum+'Phone1Unl" id="cbxMem'+memNum+'Phone1Unl" class="chkboxstyle" /><span class="lbl"> Unlisted</span>';
        formTabIndex = formTabIndex + 1;
        formTabIndex = formTabIndex + 1;
        formTabIndex = formTabIndex + 1;
        formTabIndex = formTabIndex + 1;
        var tr8 = document.createElement('tr');
        tr8.setAttribute('name', 'tr8'+memNum);
        tr8.setAttribute('id', 'tr8'+memNum);
        mainTableBody.appendChild(tr8);
        tr8.insertCell(0).innerHTML = '<td></td>';
        tr8.insertCell(1).innerHTML = '<td></td>';
        formTabIndex = formTabIndex + 1;
        tr8.insertCell(2).innerHTML = '<td><span class="lbl">&nbsp;&nbsp;Phone 2</span></td>';
        var td8 = document.createElement('td');
        td8.setAttribute('id', 'td8'+memNum);
        td8.setAttribute('colspan', '8');
        tr8.appendChild(td8);
        td8.innerHTML = 
          '<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Phone2Type" id="cboMem'+memNum+'Phone2Type" title="select a phone type in the pull down list" style="width:120px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Cellular Head">Cellular Head</option>'+
          '<option value="Cellular Spouse">Cellular Spouse</option>'+
          '<option value="Home Phone">Home Phone</option>'+
          '<option value="Other">Other</option>'+
          '<option value="Work Phone">Work Phone</option>'+
          '</select>'+
          ' ( <input tabindex="'+(formTabIndex+1)+'" maxlength="3" style="width:30px" title="enter phone area code" name="txnMem'+memNum+'Phone2Num1" id="txnMem'+memNum+'Phone2Num1" onkeyup="autoTab(this, document.CORegForm.txnMem'+memNum+'Phone2Num2)" class="textboxstyle" /> ) '+
          '<input tabindex="'+(formTabIndex+2)+'" maxlength="3" style="width:30px" title="enter phone prefix" name="txnMem'+memNum+'Phone2Num2" id="txnMem'+memNum+'Phone2Num2" onkeyup="autoTab(this, document.CORegForm.txnMem'+memNum+'Phone2Num3)" class="textboxstyle" /> - '+
          '<input tabindex="'+(formTabIndex+3)+'" maxlength="4" style="width:50px" title="enter phone line number" name="txnMem'+memNum+'Phone2Num3" id="txnMem'+memNum+'Phone2Num3" class="textboxstyle" />'+
          '<input tabindex="'+(formTabIndex+4)+'" type="checkbox" name="cbxMem'+memNum+'Phone2Unl" id="cbxMem'+memNum+'Phone2Unl" class="chkboxstyle" /><span class="lbl"> Unlisted</span>';
        formTabIndex = formTabIndex + 1;
        formTabIndex = formTabIndex + 1;
        formTabIndex = formTabIndex + 1;
        formTabIndex = formTabIndex + 1;
        var tr9 = document.createElement('tr');
        tr9.setAttribute('name', 'tr9'+memNum);
        tr9.setAttribute('id', 'tr9'+memNum);
        mainTableBody.appendChild(tr9);
        tr9.insertCell(0).innerHTML = '<td></td>';
        tr9.insertCell(1).innerHTML = '<td></td>';
        formTabIndex = formTabIndex + 1;
        tr9.insertCell(2).innerHTML = '<td><span class="lbl">&nbsp;&nbsp;Email 1</span></td>';
        var td9 = document.createElement('td');
        td9.setAttribute('id', 'td9'+memNum);
        td9.setAttribute('colspan', '8');
        tr9.appendChild(td9);
        td9.innerHTML = 
          '<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Email1Type" id="cboMem'+memNum+'Email1Type" title="select an email 1 type in the pull down list" style="width:120px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Head">Head</option>'+
          '<option value="Spouse">Spouse</option>'+
          '</select>'+
          '&nbsp;&nbsp;'+
          '<input tabindex="'+(formTabIndex+1)+'" maxlength="100" style="width:266px" name="txaMem'+memNum+'Email1" id="txaMem'+memNum+'Email1" title="enter an email address" class="textboxstyle" />'+
          '<input tabindex="'+(formTabIndex+2)+'" type="checkbox" name="cbxMem'+memNum+'Email1Unl" id="cbxMem'+memNum+'Email1Unl" class="chkboxstyle" /><span class="lbl"> Unlisted</span>';
        var tr10 = document.createElement('tr');
        tr10.setAttribute('name', 'tr10'+memNum);
        tr10.setAttribute('id', 'tr10'+memNum);
        mainTableBody.appendChild(tr10);
        tr10.insertCell(0).innerHTML = '<td></td>';
        tr10.insertCell(1).innerHTML = '<td></td>';
        tr10.insertCell(2).innerHTML = '<td></td>';
        var td10 = document.createElement('td');
        td10.setAttribute('id', 'td10'+memNum);
        td10.setAttribute('colspan', '8');
        tr10.appendChild(td10);
        td10.innerHTML = 
         '<td colspan="3"><input tabindex="'+(formTabIndex+3)+'" type="checkbox" name="cbxMem'+memNum+'UseEmail1" id="cbxMem'+memNum+'UseEmail1" class="chkboxstyle" /> <span class="lbl">Send Email Instead of Mail When Possible</span> </td>';
        formTabIndex = formTabIndex + 1;
        formTabIndex = formTabIndex + 1;
        formTabIndex = formTabIndex + 1;
        var tr11 = document.createElement('tr');
        tr11.setAttribute('name', 'tr11'+memNum);
        tr11.setAttribute('id', 'tr11'+memNum);
        mainTableBody.appendChild(tr11);
        tr11.insertCell(0).innerHTML = '<td></td>';
        tr11.insertCell(1).innerHTML = '<td><span class="titlelbl">Sacraments</span></td>';
        var td11 = document.createElement('td');
        td11.setAttribute('id', 'td11'+memNum);
        td11.setAttribute('colspan', '2');
        tr11.appendChild(td11);
        td11.innerHTML = '<span class="lbl">&nbsp;&nbsp;<u>Name</u></span>';
        var td12 = document.createElement('td');
        td12.setAttribute('id', 'td12'+memNum);
        td12.setAttribute('colspan', '1');
        tr11.appendChild(td12);
        td12.innerHTML = '<span class="lbl"><u>Received</u></span>';
        var td13 = document.createElement('td');
        td13.setAttribute('id', 'td13'+memNum);
        td13.setAttribute('colspan', '1');
        tr11.appendChild(td13);
        td13.innerHTML = '<span class="lbl"><u>Date</u></span></td>';
        var td14 = document.createElement('td');
        td14.setAttribute('id', 'td14'+memNum);
        td14.setAttribute('colspan', '1');
        tr11.appendChild(td14);
        td14.innerHTML = '<span class="lbl"><u>Place</u></span></td>';
        formTabIndex = formTabIndex + 1;
        var tr12 = document.createElement('tr');
        tr12.setAttribute('name', 'tr12'+memNum);
        tr12.setAttribute('id', 'tr12'+memNum);
        mainTableBody.appendChild(tr12);
        tr12.insertCell(0).innerHTML = '<td></td>';
        tr12.insertCell(1).innerHTML = '<td></td>';
        var td12 = document.createElement('td');
        td12.setAttribute('id', 'td12'+memNum);
        td12.setAttribute('colspan', '2');
        tr12.appendChild(td12);
        td12.innerHTML = '<span class="lbl">&nbsp;&nbsp;&nbsp;Baptism</span><input type="hidden" name="txaMem'+memNum+'Sac1Name" id="txaMem'+memNum+'Sac1Name" value="Baptism" />';
        var td13 = document.createElement('td');
        td13.setAttribute('id', 'td13'+memNum);
        td13.setAttribute('colspan', '1');
        tr12.appendChild(td13);
        td13.innerHTML = ' <select tabindex="199" name="cboMem'+memNum+'Sac1" id="cboMem'+memNum+'Sac1" class="pulldownstyle"><option value="" /><option value="Yes">Yes</option><option value="No">No</option></select>';
        var td14 = document.createElement('td');
        td14.setAttribute('id', 'td14'+memNum);
        td14.setAttribute('colspan', '1');
        tr12.appendChild(td14);
        td14.innerHTML = '<input tabindex="'+(formTabIndex+1)+'" style="width:100px" autocomplete="off" value="mm/dd/yyyy" title="enter the baptism date" name="dteMem'+memNum+'Sac1Date" id="dteMem'+memNum+'Sac1Date" maxlength="10" onkeydown="onKeyPressed(event, this);" onFocus="this.select()" class="textboxstyle dateInput" onchange="checkDate(this.id)" onkeyup="DoKeyUp(this)" />';
        calendar.set('dteMem'+memNum+'Sac1Date');
        formTabIndex = formTabIndex + 1;
        var td15 = document.createElement('td');
        td15.setAttribute('id', 'td15'+memNum);
        td15.setAttribute('colspan', '2');
        tr12.appendChild(td15);
        td15.innerHTML = 
          '<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Sac1Place" id="cboMem'+memNum+'Sac1Place" title="Select a place in the pull down list" style="width: 166px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Bethany Covenant Church, Lyndhurst      Lyndhurst, Oh.">Bethany Covenant Church, Lyndhurst      Lyndhurst, Oh.</option>'+
          '<option value="Blessed Sacrament, Valley Stream, NY      Valley Stream, NY      11580">Blessed Sacrament, Valley Stream, NY      Valley Stream, NY      11580</option>'+
          '<option value="Blessed Sacrament, Warren      Warren Ohio      44483">Blessed Sacrament, Warren      Warren Ohio      44483</option>'+
          '<option value="Blessed Trinity, Cleveland      Cleveland, Ohio 44135">Blessed Trinity, Cleveland      Cleveland, Ohio 44135</option>'+
          '<option value="Braceville Community Church, Newton Falls      Newton Falls, Ohio">Braceville Community Church, Newton Falls      Newton Falls, Ohio</option>'+
          '<option value="Burton Congregational Church      Burton, OH      44021">Burton Congregational Church      Burton, OH      44021</option>'+
          '<option value="Cathedral Basilica of St. Peter in Chains, Cincinnati      Lebanon, OH      45036">Cathedral Basilica of St. Peter in Chains, Cincinnati      Lebanon, OH      45036</option>'+
          '<option value="Cathedral of Christ the King, Lexington      Lexington, KY      40502-2322">Cathedral of Christ the King, Lexington      Lexington, KY      40502-2322</option>'+
          '<option value="Cathedral of St. John the Evangelist, Cleveland      Cleveland, Ohio      44114-2582">Cathedral of St. John the Evangelist, Cleveland      Cleveland, Ohio      44114-2582</option>'+
          '<option value="Christ the King, Akron      Akron Ohio      44310">Christ the King, Akron      Akron Ohio      44310</option>'+
          '<option value="Christ the King, Cleveland      East Cleveland, OH      44112-1636">Christ the King, Cleveland      East Cleveland, OH      44112-1636</option>'+
          '<option value="Christ The King, Las Vegas      Las Vegas, NV      89118">Christ The King, Las Vegas      Las Vegas, NV      89118</option>'+
          '<option value="Church of Annunciation, Cleveland      Cleveland, OH      44135">Church of Annunciation, Cleveland      Cleveland, OH      44135</option>'+
          '<option value="Church of Beloved Disciple, Grove City      Grove City, PA      16127">Church of Beloved Disciple, Grove City      Grove City, PA      16127</option>'+
          '<option value="Church of St. Anthony, Joliet      Joliet, IL      60432-4210">Church of St. Anthony, Joliet      Joliet, IL      60432-4210</option>'+
          '<option value="Church of St. Mary and St. Joseph, Newton Falls      Newton Falls, Ohio      44444">Church of St. Mary and St. Joseph, Newton Falls      Newton Falls, Ohio      44444</option>'+
          '<option value="Church of the Assumption, Broadview Hts.      Broadview Heights, Ohio      44147">Church of the Assumption, Broadview Hts.      Broadview Heights, Ohio      44147</option>'+
          '<option value="Church of the Blessed Sacrament, Warren      Warren Ohio      44483">Church of the Blessed Sacrament, Warren      Warren Ohio      44483</option>'+
          '<option value="Church of the Incarnation, Centerville      Centerville, Ohio      45459">Church of the Incarnation, Centerville      Centerville, Ohio      45459</option>'+
          '<option value="Church Of The Resurection, New Albany      New Albany, Ohio">Church Of The Resurection, New Albany      New Albany, Ohio</option>'+
          '<option value="Communion of Saints, Cleveland Hts.      Cleveland Heights, Ohio      44118">Communion of Saints, Cleveland Hts.      Cleveland Heights, Ohio      44118</option>'+
          '<option value="Curch of the Annunciation, Cleveland      Cleveland, Ohio      44135">Curch of the Annunciation, Cleveland      Cleveland, Ohio      44135</option>'+
          '<option value="Divine Word, Kirtland      Kirtland, OH      44094-9714">Divine Word, Kirtland      Kirtland, OH      44094-9714</option>'+
          '<option value="First Congregational Church of Claridon      Chardon, OH      44024">First Congregational Church of Claridon      Chardon, OH      44024</option>'+
          '<option value="First Presbyterian, East Cleveland      East cleveland ohio">First Presbyterian, East Cleveland      East cleveland ohio</option>'+
          '<option value="Germany">Germany</option>'+
          '<option value="Gesu, Universtiy Hts.      University Hts., OH      44118-3896">Gesu, Universtiy Hts.      University Hts., OH      44118-3896</option>'+
          '<option value="Holy Angels, Chagrin Falls      Chagrin Falls,  OH      44023-4879">Holy Angels, Chagrin Falls      Chagrin Falls,  OH      44023-4879</option>'+
          '<option value="Holy Cross, Euclid      Euclid, OH      44119-1066">Holy Cross, Euclid      Euclid, OH      44119-1066</option>'+
          '<option value="Holy Family Parish (Archives)      Cleveland, Ohio      44114">Holy Family Parish (Archives)      Cleveland, Ohio      44114</option>'+
          '<option value="Holy Family, Endwell      Endwell, NY      13760">Holy Family, Endwell      Endwell, NY      13760</option>'+
          '<option value="Holy Family, Parma      Parma, OH      44130">Holy Family, Parma      Parma, OH      44130</option>'+
          '<option value="Holy Family, Stow      Stow, OH      44224">Holy Family, Stow      Stow, OH      44224</option>'+
          '<option value="Holy Name, Cleveland      Cleveland, OH">Holy Name, Cleveland      Cleveland, OH</option>'+
          '<option value="Holy Redeemer, Cleveland      Cleveland, OH      44110-3104">Holy Redeemer, Cleveland      Cleveland, OH      44110-3104</option>'+
          '<option value="Holy Rosary, Cleveland      Cleveland, OH      44106-1996">Holy Rosary, Cleveland      Cleveland, OH      44106-1996</option>'+
          '<option value="Holy Trinity, Avon      Avon, Ohio      44011">Holy Trinity, Avon      Avon, Ohio      44011</option>'+
          '<option value="Holy Trinity, Bedford Hts.      Bedford Hts., OH      44146-2599">Holy Trinity, Bedford Hts.      Bedford Hts., OH      44146-2599</option>'+
          '<option value="Immaculate Conception Church Madison      Madison Ohio">Immaculate Conception Church Madison      Madison Ohio</option>'+
          '<option value="Immaculate Conception, Bellevue      Bellevue, OH      44811">Immaculate Conception, Bellevue      Bellevue, OH      44811</option>'+
          '<option value="Immaculate Conception, Cleveland      Cleveland, OH      44103-1179">Immaculate Conception, Cleveland      Cleveland, OH      44103-1179</option>'+
          '<option value="Immaculate Conception, Durham      Durham, NC      27701">Immaculate Conception, Durham      Durham, NC      27701</option>'+
          '<option value="Immaculate Conception, Willoughby      Willoughby, Ohio">Immaculate Conception, Willoughby      Willoughby, Ohio</option>'+
          '<option value="Immaculate Heart of Mary, Cuyahoga Falls      Cuyahoga Falls, Ohio      44223">Immaculate Heart of Mary, Cuyahoga Falls      Cuyahoga Falls, Ohio      44223</option>'+
          '<option value="King of Kings Evangelical Lutheran Church, Willoughby      Willoughby, Ohio      44094-7570">King of Kings Evangelical Lutheran Church, Willoughby      Willoughby, Ohio      44094-7570</option>'+
          '<option value="Lake Shore Christian Church, Cleveland      Cleveland, OH      44132">Lake Shore Christian Church, Cleveland      Cleveland, OH      44132</option>'+
          '<option value="Lord of Life Lutheran Church, Chagrin Falls      Chagrin Falls, Ohio      44023">Lord of Life Lutheran Church, Chagrin Falls      Chagrin Falls, Ohio      44023</option>'+
          '<option value="Mariapoch Shrine, Burton      Burton, OH      44021">Mariapoch Shrine, Burton      Burton, OH      44021</option>'+
          '<option value="Mary Queen of Peace, Cleveland      Cleveland, Ohio      44109">Mary Queen of Peace, Cleveland      Cleveland, Ohio      44109</option>'+
          '<option value="Most Holy Trinity Church, Chesterland      Chesterland">Most Holy Trinity Church, Chesterland      Chesterland</option>'+
          '<option value="Mother of Mercy, Washington NC      Washington, NC      27889">Mother of Mercy, Washington NC      Washington, NC      27889</option>'+
          '<option value="Mother of Sorrows, Peninsula      Peninsula, Ohio      44264">Mother of Sorrows, Peninsula      Peninsula, Ohio      44264</option>'+
          '<option value="Nativity of Our Lord Church, Orchard Park      Orchard Park, NY      14127">Nativity of Our Lord Church, Orchard Park      Orchard Park, NY      14127</option>'+
          '<option value="Nativity of the Blessed Virgin Mary, South Amherst      South Amherst, OH      44001">Nativity of the Blessed Virgin Mary, South Amherst      South Amherst, OH      44001</option>'+
          '<option value="Newton Falls United Methodist      Newton Falls, Ohio">Newton Falls United Methodist      Newton Falls, Ohio</option>'+
          '<option value="North American Martyrs Church, Monroville      Monroville, PA">North American Martyrs Church, Monroville      Monroville, PA</option>'+
          '<option value="Other">Other</option>'+
          '<option value="Our Lady Chapel/Gilmour, Gates Mills      Gates Mills,  Ohio      44040">Our Lady Chapel/Gilmour, Gates Mills      Gates Mills,  Ohio      44040</option>'+
          '<option value="Our Lady Of Good Council, Cleveland      Cleveland, OH      44109">Our Lady Of Good Council, Cleveland      Cleveland, OH      44109</option>'+
          '<option value="Our Lady Of Grace, Hickley      Hickley, OH      44233">Our Lady Of Grace, Hickley      Hickley, OH      44233</option>'+
          '<option value="Our Lady Of Guadalupe, Macedonia      Macedonia, OH      44056-1450">Our Lady Of Guadalupe, Macedonia      Macedonia, OH      44056-1450</option>'+
          '<option value="Our Lady Of Hope, Bedford      Bedford, Ohio      44146">Our Lady Of Hope, Bedford      Bedford, Ohio      44146</option>'+
          '<option value="Our Lady Of Loreto, Ft. Rucker      Ft. Rucker, AL">Our Lady Of Loreto, Ft. Rucker      Ft. Rucker, AL</option>'+
          '<option value="Our Lady Of Lourdes, Cleveland      Cleveland, OH      44127-1692">Our Lady Of Lourdes, Cleveland      Cleveland, OH      44127-1692</option>'+
          '<option value="Our Lady Of Lourdes, Genoa      Genoa, OH">Our Lady Of Lourdes, Genoa      Genoa, OH</option>'+
          '<option value="Our Lady Of Mount Carmel, Ashtabula      Ashtabula, Ohio      44004">Our Lady Of Mount Carmel, Ashtabula      Ashtabula, Ohio      44004</option>'+
          '<option value="Our Lady Of Mount Carmel, Cleveland      Cleveland      44102">Our Lady Of Mount Carmel, Cleveland      Cleveland      44102</option>'+
          '<option value="Our Lady Of Mt. Carmel, Wickliffe      Wickliffe, OH      44092-1896">Our Lady Of Mt. Carmel, Wickliffe      Wickliffe, OH      44092-1896</option>'+
          '<option value="Our Lady Of Peace, Cleveland      Cleveland, Ohio      44120">Our Lady Of Peace, Cleveland      Cleveland, Ohio      44120</option>'+
          '<option value="Our Lady Of Perpetual Help, Aurora      Aurora, OH      44202">Our Lady Of Perpetual Help, Aurora      Aurora, OH      44202</option>'+
          '<option value="Our Lady Of Perpetual Help, Cleveland      Cleveland Ohio      44119">Our Lady Of Perpetual Help, Cleveland      Cleveland Ohio      44119</option>'+
          '<option value="Our Lady Of Sorrows, Vestal      Vestal, NY">Our Lady Of Sorrows, Vestal      Vestal, NY</option>'+
          '<option value="Our Lady Of The Lake, Edinboro      Edinboro, PA">Our Lady Of The Lake, Edinboro      Edinboro, PA</option>'+
          '<option value="Our Lady of the Lakes, Euclid      Euclid, OH      44119">Our Lady of the Lakes, Euclid      Euclid, OH      44119</option>'+
          '<option value="Our Lady of the Lakes, Waterford      Waterford, MI      48329">Our Lady of the Lakes, Waterford      Waterford, MI      48329</option>'+
          '<option value="Our Lady\'s Immaculate Heart, Ankeny      Ankeny, IA">Our Lady\'s Immaculate Heart, Ankeny      Ankeny, IA</option>'+
          '<option value="Parroquia De Corpus Christi      Queretaro, Queretaro">Parroquia De Corpus Christi      Queretaro, Queretaro</option>'+
          '<option value="Peace Lutheran Church, Chardon      Chardon Ohio      44024">Peace Lutheran Church, Chardon      Chardon Ohio      44024</option>'+
          '<option value="Port Alfred Christian Centre      Port Alfred">Port Alfred Christian Centre      Port Alfred</option>'+
          '<option value="Redeemer Lutheran, Cuyahoga Falls      Cuyahoga Falls, OH      44221">Redeemer Lutheran, Cuyahoga Falls      Cuyahoga Falls, OH      44221</option>'+
          '<option value="Resurrection of Our Lord, Solon      Solon, OH      44139">Resurrection of Our Lord, Solon      Solon, OH      44139</option>'+
          '<option value="Resurrection Parish, Lexington      Lexington, Ohio      44904">Resurrection Parish, Lexington      Lexington, Ohio      44904</option>'+
          '<option value="Riverwood Community Chapel">Riverwood Community Chapel</option>'+
          '<option value="Sacred Heart of Jesus, S. Euclid      South Euclid, Ohio      44121-4085">Sacred Heart of Jesus, S. Euclid      South Euclid, Ohio      44121-4085</option>'+
          '<option value="Sacred Heart, Cullman      Cullman, Alabama">Sacred Heart, Cullman      Cullman, Alabama</option>'+
          '<option value="Sacred Heart, Malden      Malden, MA">Sacred Heart, Malden      Malden, MA</option>'+
          '<option value="Sacred Heart, Rock Creek      Rock Creek, OH      44084">Sacred Heart, Rock Creek      Rock Creek, OH      44084</option>'+
          '<option value="San Pedro Alcantara, Namiquipa, Chih.">San Pedro Alcantara, Namiquipa, Chih.</option>'+
          '<option value="St Anselm      Chesterland, OH">St Anselm      Chesterland, OH</option>'+
          '<option value="St Jude Thadeus      Trece Martires City">St Jude Thadeus      Trece Martires City</option>'+
          '<option value="St. Adelbert, Berea      Berea, OH      44017">St. Adelbert, Berea      Berea, OH      44017</option>'+
          '<option value="St. Agnes, Cleveland      Cleveland">St. Agnes, Cleveland      Cleveland</option>'+
          '<option value="St. Albert the Great, Kettering      Kettering, OH      45429">St. Albert the Great, Kettering      Kettering, OH      45429</option>'+
          '<option value="St. Alexander, Palos Hts.      Palos Heights, Illinois      60463">St. Alexander, Palos Hts.      Palos Heights, Illinois      60463</option>'+
          '<option value="St. Alphonsus, Davenport      Davenport, Iowa      52802">St. Alphonsus, Davenport      Davenport, Iowa      52802</option>'+
          '<option value="St. Ambrose, Brunswick      Brunswick, OH      44212">St. Ambrose, Brunswick      Brunswick, OH      44212</option>'+
          '<option value="St. Ambrose, Garrettsville      Garrettsville, OH      44231">St. Ambrose, Garrettsville      Garrettsville, OH      44231</option>'+
          '<option value="St. Ambrose, Hollywood      Hollywood, CA      90046">St. Ambrose, Hollywood      Hollywood, CA      90046</option>'+
          '<option value="St. Ambrose, Seymour      Seymour, Indiana      47274">St. Ambrose, Seymour      Seymour, Indiana      47274</option>'+
          '<option value="St. Andrew, Kingsville      Kingsville, Ohio      44048">St. Andrew, Kingsville      Kingsville, Ohio      44048</option>'+
          '<option value="St. Ann, Hiawatha      Hiawatha, KS">St. Ann, Hiawatha      Hiawatha, KS</option>'+
          '<option value="St. Ann, Marietta      Marietta,GA      30062">St. Ann, Marietta      Marietta,GA      30062</option>'+
          '<option value="St. Anselm, Chesterland      Chesterland, OH      44026-3199">St. Anselm, Chesterland      Chesterland, OH      44026-3199</option>'+
          '<option value="St. Anthony of Padua, Akron      Akron, OH      44310-3184">St. Anthony of Padua, Akron      Akron, OH      44310-3184</option>'+
          '<option value="St. Anthony of Padua, Fairport Harbor      Fairport Harbor, OH      44077-5696">St. Anthony of Padua, Fairport Harbor      Fairport Harbor, OH      44077-5696</option>'+
          '<option value="St. Anthony of Padua, Parma      Parma, OH      44134-4518">St. Anthony of Padua, Parma      Parma, OH      44134-4518</option>'+
          '<option value="St. Anthony of Padua, San Antonio      San Antonio, FL      33576">St. Anthony of Padua, San Antonio      San Antonio, FL      33576</option>'+
          '<option value="St. Augustine, Milwaukee      Milwaukee, WI      53207">St. Augustine, Milwaukee      Milwaukee, WI      53207</option>'+
          '<option value="St. Barnabas, Northfield      Northfield, OH      44067-2499">St. Barnabas, Northfield      Northfield, OH      44067-2499</option>'+
          '<option value="St. Bartholomew, Middleburg Hts.      Middleburg Heights, Ohio      44130">St. Bartholomew, Middleburg Hts.      Middleburg Heights, Ohio      44130</option>'+
          '<option value="St. Basil the Great, Brecksville      Brecksville, Ohio      44141">St. Basil the Great, Brecksville      Brecksville, Ohio      44141</option>'+
          '<option value="St. Bede the Venerable, Mentor      Mentor, OH      44060-1697">St. Bede the Venerable, Mentor      Mentor, OH      44060-1697</option>'+
          '<option value="St. Bernadette, Westlake      Westlake, OH      44145-4328">St. Bernadette, Westlake      Westlake, OH      44145-4328</option>'+
          '<option value="St. Bernard of Clairvaux, Cincinnati      Cincinnati, OH      45247">St. Bernard of Clairvaux, Cincinnati      Cincinnati, OH      45247</option>'+
          '<option value="St. Bernard, Akron      Akron, OH      44308">St. Bernard, Akron      Akron, OH      44308</option>'+
          '<option value="St. Boniface, Erie      Erie, PA      16509">St. Boniface, Erie      Erie, PA      16509</option>'+
          '<option value="St. Boniface, Lafayette      Lafayette, Indiana">St. Boniface, Lafayette      Lafayette, Indiana</option>'+
          '<option value="St. Brigid, San Antonio      San Antonio, TX      78240">St. Brigid, San Antonio      San Antonio, TX      78240</option>'+
          '<option value="St. Casimir, Cleveland      Cleveland, OH      44103">St. Casimir, Cleveland      Cleveland, OH      44103</option>'+
          '<option value="St. Catherine, Cleveland">St. Catherine, Cleveland</option>'+
          '<option value="St. Catherine, Crescent      Crescent, PA 15046">St. Catherine, Crescent      Crescent, PA 15046</option>'+
          '<option value="St. Cecelia,      Rochester, PA      15074">St. Cecelia,      Rochester, PA      15074</option>'+
          '<option value="St. Cecelia, Cleveland      Cleveland, OH">St. Cecelia, Cleveland      Cleveland, OH</option>'+
          '<option value="St. Cecelia, Rochester      Rochester, PA.">St. Cecelia, Rochester      Rochester, PA.</option>'+
          '<option value="St. Cecelia, Rochester PA">St. Cecelia, Rochester PA</option>'+
          '<option value="St. Cecilia">St. Cecilia</option>'+
          '<option value="St. Cecilia, Boston      Boston, Massachusetts      02115">St. Cecilia, Boston      Boston, Massachusetts      02115</option>'+
          '<option value="St. Charles Borromeo, Parma      Parma, OH">St. Charles Borromeo, Parma      Parma, OH</option>'+
          '<option value="St. Charles Borromeo, Youngstown      Youngstown, Ohio">St. Charles Borromeo, Youngstown      Youngstown, Ohio</option>'+
          '<option value="St. Christine, Euclid      Euclid, OH      44123-3317">St. Christine, Euclid      Euclid, OH      44123-3317</option>'+
          '<option value="St. Christopher by the River, Gates Mills      Gates Mills, OH">St. Christopher by the River, Gates Mills      Gates Mills, OH</option>'+
          '<option value="St. Christopher, Rocky River      Rocky River, OH">St. Christopher, Rocky River      Rocky River, OH</option>'+
          '<option value="St. Clare, Lyndhurst      Lyndhurst, OH      44124-2915">St. Clare, Lyndhurst      Lyndhurst, OH      44124-2915</option>'+
          '<option value="St. Clement, Calhoun      Calhoun, GA">St. Clement, Calhoun      Calhoun, GA</option>'+
          '<option value="St. Clement, Lakewood      Lakewood, OH      44107">St. Clement, Lakewood      Lakewood, OH      44107</option>'+
          '<option value="St. Colman, Cleveland      Cleveland, Ohio      44102">St. Colman, Cleveland      Cleveland, Ohio      44102</option>'+
          '<option value="St. Columba Cathedral, Youngstown      Youngstown Ohio">St. Columba Cathedral, Youngstown      Youngstown Ohio</option>'+
          '<option value="St. Columba, Ottowa      Ottawa, IL      61350">St. Columba, Ottowa      Ottawa, IL      61350</option>'+
          '<option value="St. Columban, Loveland      Loveland, Ohio">St. Columban, Loveland      Loveland, Ohio</option>'+
          '<option value="St. Columbkille, Parma      Parma, OH      44134-4898">St. Columbkille, Parma      Parma, OH      44134-4898</option>'+
          '<option value="St. Cosmos and Damien, Twinsburg      Twinsburg, OH      44087">St. Cosmos and Damien, Twinsburg      Twinsburg, OH      44087</option>'+
          '<option value="St. Dominic, Shaker Hts.      Shaker Heights, OH      44122-4967">St. Dominic, Shaker Hts.      Shaker Heights, OH      44122-4967</option>'+
          '<option value="St. Edward, Parkman      Parkman, OH      44080-0709">St. Edward, Parkman      Parkman, OH      44080-0709</option>'+
          '<option value="St. Elizabeth Ann Seton, Warren      Warren, Ohio      44484-5217">St. Elizabeth Ann Seton, Warren      Warren, Ohio      44484-5217</option>'+
          '<option value="St. Emeric, Cleveland      Cleveland/Ohio">St. Emeric, Cleveland      Cleveland/Ohio</option>'+
          '<option value="St. Eugene, Akron      Arron Ohio      44221">St. Eugene, Akron      Arron Ohio      44221</option>'+
          '<option value="St. FCO De Asis      Chih">St. FCO De Asis      Chih</option>'+
          '<option value="St. Felicitas, Euclid      Euclid, OH      44143-1299">St. Felicitas, Euclid      Euclid, OH      44143-1299</option>'+
          '<option value="St. Felipe de Jesus      Atotonlico el Alto, Jalisco">St. Felipe de Jesus      Atotonlico el Alto, Jalisco</option>'+
          '<option value="St. Francis De Sales, Lebenon      Lebenon, Ohio      45036-1352">St. Francis De Sales, Lebenon      Lebenon, Ohio      45036-1352</option>'+
          '<option value="St. Francis De Sales, Parma      Parma, OH      44134-2904">St. Francis De Sales, Parma      Parma, OH      44134-2904</option>'+
          '<option value="St. Francis Of Assisi, Ann Arbor      Ann Arbor, MI      48104">St. Francis Of Assisi, Ann Arbor      Ann Arbor, MI      48104</option>'+
          '<option value="St. Francis Of Assisi, Gates Mills      Gates Mills, OH      44040-9635">St. Francis Of Assisi, Gates Mills      Gates Mills, OH      44040-9635</option>'+
          '<option value="St. Francis Xavier, Ft. Myers      Ft. Myers, FL      33901">St. Francis Xavier, Ft. Myers      Ft. Myers, FL      33901</option>'+
          '<option value="St. Francis Xavier, Medina      Medina, OH      44256">St. Francis Xavier, Medina      Medina, OH      44256</option>'+
          '<option value="St. Gabriel, Concord      Concord, Ohio      44060-6294">St. Gabriel, Concord      Concord, Ohio      44060-6294</option>'+
          '<option value="St. Gregory, Euclid      South Euclid, OH      44121-4085">St. Gregory, Euclid      South Euclid, OH      44121-4085</option>'+
          '<option value="St. Hedwig, Detroit      Detroit, MI">St. Hedwig, Detroit      Detroit, MI</option>'+
          '<option value="St. Helen Church, Newbury      Newbury, OH      44065">St. Helen Church, Newbury      Newbury, OH      44065</option>'+
          '<option value="St. Helena, Cleveland      Cleveland, OH      44102">St. Helena, Cleveland      Cleveland, OH      44102</option>'+
          '<option value="St. Henry, Cleveland      Cleveland, OH      44128-1796">St. Henry, Cleveland      Cleveland, OH      44128-1796</option>'+
          '<option value="St. Hyacinth, Toledo      Toledo, Ohio      43607">St. Hyacinth, Toledo      Toledo, Ohio      43607</option>'+
          '<option value="St. Ignatius of Antioch, Cleveland      Cleveland, Ohio      44111-5470">St. Ignatius of Antioch, Cleveland      Cleveland, Ohio      44111-5470</option>'+
          '<option value="St. Ignatius of Loyola, Rogers City      Rogers City, MI      49779">St. Ignatius of Loyola, Rogers City      Rogers City, MI      49779</option>'+
          '<option value="St. Ignatius, San Francisco      San Francisco, CA      94118">St. Ignatius, San Francisco      San Francisco, CA      94118</option>'+
          '<option value="St. James De Chantal, Bethleham      Bethleham, PA">St. James De Chantal, Bethleham      Bethleham, PA</option>'+
          '<option value="St. James the Apostle, Carmel      Carmel, NY">St. James the Apostle, Carmel      Carmel, NY</option>'+
          '<option value="St. James, Lakewood      Lakewood, OH      44107">St. James, Lakewood      Lakewood, OH      44107</option>'+
          '<option value="St. James, Mukwonago      Mukwonago WI      53149">St. James, Mukwonago      Mukwonago WI      53149</option>'+
          '<option value="St. Jane de Chatel, Easton      Easton, PA      18045">St. Jane de Chatel, Easton      Easton, PA      18045</option>'+
          '<option value="St. Jerome, Cleveland      Cleveland, OH      44110-1298">St. Jerome, Cleveland      Cleveland, OH      44110-1298</option>'+
          '<option value="St. Joan Of Arc, Chagrin Falls      Chagrin Falls, OH      44022-2999">St. Joan Of Arc, Chagrin Falls      Chagrin Falls, OH      44022-2999</option>'+
          '<option value="St. Joan of Arc, Evanston      Evanston, IL">St. Joan of Arc, Evanston      Evanston, IL</option>'+
          '<option value="St. Joan Of Arc, Streetsboro      Streetsboro, OH      44241">St. Joan Of Arc, Streetsboro      Streetsboro, OH      44241</option>'+
          '<option value="St. John Bosco, Parma      Parma, OH      44130-2997">St. John Bosco, Parma      Parma, OH      44130-2997</option>'+
          '<option value="St. John Gualbert, Johnstown      Johnstown, PA">St. John Gualbert, Johnstown      Johnstown, PA</option>'+
          '<option value="St. John Lutheran      Garfield hts, OH      44125">St. John Lutheran      Garfield hts, OH      44125</option>'+
          '<option value="St. John Lutheran Church, Roanoke      Roanoke VA      24018">St. John Lutheran Church, Roanoke      Roanoke VA      24018</option>'+
          '<option value="St. John Neiman, Irvine      Irvine, CA">St. John Neiman, Irvine      Irvine, CA</option>'+
          '<option value="St. John Nepomucene, Cleveland      Cleveland, OH      44105-3357">St. John Nepomucene, Cleveland      Cleveland, OH      44105-3357</option>'+
          '<option value="St. John of the Cross, Euclid      Euclid, Ohio      44143">St. John of the Cross, Euclid      Euclid, Ohio      44143</option>'+
          '<option value="St. John Rochester, Fairporn      Fairporn, NY">St. John Rochester, Fairporn      Fairporn, NY</option>'+
          '<option value="St. John the Baptist, Somonauk      Somonauk, IL">St. John the Baptist, Somonauk      Somonauk, IL</option>'+
          '<option value="St. John Vianney, Flint      Flint, MI      48504">St. John Vianney, Flint      Flint, MI      48504</option>'+
          '<option value="St. John Vianney, Mentor      Mentor, Ohio      44060-3997">St. John Vianney, Mentor      Mentor, Ohio      44060-3997</option>'+
          '<option value="St. Joseph Cathedral, Columbus      Columbus, Ohio      43215">St. Joseph Cathedral, Columbus      Columbus, Ohio      43215</option>'+
          '<option value="St. Joseph Church, Richardson      Richardson, TX      75081">St. Joseph Church, Richardson      Richardson, TX      75081</option>'+
          '<option value="St. Joseph, Amherst      Amherst, Ohio      44001">St. Joseph, Amherst      Amherst, Ohio      44001</option>'+
          '<option value="St. Joseph, Cold Spring      Cold Spring, KY      41076-1895">St. Joseph, Cold Spring      Cold Spring, KY      41076-1895</option>'+
          '<option value="St. Joseph, Cuyahoga Falls      Cuyahoga Falls, Ohio      44221">St. Joseph, Cuyahoga Falls      Cuyahoga Falls, Ohio      44221</option>'+
          '<option value="St. Joseph, Dover      Dover Ohio      44622">St. Joseph, Dover      Dover Ohio      44622</option>'+
          '<option value="St. Joseph, Lucinda      Lucinda, Pennsylvania      16235">St. Joseph, Lucinda      Lucinda, Pennsylvania      16235</option>'+
          '<option value="St. Joseph, Mantua      Mantua, OH      44255">St. Joseph, Mantua      Mantua, OH      44255</option>'+
          '<option value="St. Joseph, Maumee      Maumee, OH      43537">St. Joseph, Maumee      Maumee, OH      43537</option>'+
          '<option value="St. Joseph, Port Huron      Port Huron, MI      48060">St. Joseph, Port Huron      Port Huron, MI      48060</option>'+
          '<option value="St. Joseph, South Bend      South Bend, IN      46617">St. Joseph, South Bend      South Bend, IN      46617</option>'+
          '<option value="St. Joseph, Sylvania      Sylvania Ohio      43560">St. Joseph, Sylvania      Sylvania Ohio      43560</option>'+
          '<option value="St. Joseph, Toledo      Toledo, Ohio      43697">St. Joseph, Toledo      Toledo, Ohio      43697</option>'+
          '<option value="St. Jude, Warrensville Hts.      Warrensville Hts., OH      44128-5986">St. Jude, Warrensville Hts.      Warrensville Hts., OH      44128-5986</option>'+
          '<option value="St. Justin Martyr, Eastlake      Eastlake, OH      44095-5095">St. Justin Martyr, Eastlake      Eastlake, OH      44095-5095</option>'+
          '<option value="St. Ladislas, Westlake      Westlake, OH      44145-2999">St. Ladislas, Westlake      Westlake, OH      44145-2999</option>'+
          '<option value="St. Lawrence, Cleveland      Cleveland, Ohio      44105-1521">St. Lawrence, Cleveland      Cleveland, Ohio      44105-1521</option>'+
          '<option value="St. Leo The Great, Cleveland      Cleveland, OH      44109-5799">St. Leo The Great, Cleveland      Cleveland, OH      44109-5799</option>'+
          '<option value="St. Louis, Louisville">St. Louis, Louisville</option>'+
          '<option value="St. Louis, Waco      Waco, TX      76708">St. Louis, Waco      Waco, TX      76708</option>'+
          '<option value="St. Lucy, Middlefield      Middlefield, OH      44062">St. Lucy, Middlefield      Middlefield, OH      44062</option>'+
          '<option value="St. Luke, Lakewood      Lakewood OH      44107">St. Luke, Lakewood      Lakewood OH      44107</option>'+
          '<option value="St. Margaret Mary, S. Euclid      South Euclid, Ohio      44121">St. Margaret Mary, S. Euclid      South Euclid, Ohio      44121</option>'+
          '<option value="St. Mark the Evangelist, Plano      Plano, Texas      75075">St. Mark the Evangelist, Plano      Plano, Texas      75075</option>'+
          '<option value="St. Mark, Cleveland      Cleveland, OH      44111-1084">St. Mark, Cleveland      Cleveland, OH      44111-1084</option>'+
          '<option value="St. Martha, Akron      Akron Ohio">St. Martha, Akron      Akron Ohio</option>'+
          '<option value="St. Martin of Tours, Maple Hts.      Maple Hts., OH      44137-4788">St. Martin of Tours, Maple Hts.      Maple Hts., OH      44137-4788</option>'+
          '<option value="St. Martin Of Tours, Santa Clara      Santa Clara, CA">St. Martin Of Tours, Santa Clara      Santa Clara, CA</option>'+
          '<option value="St. Martin of Tours, Valley City      Valley City, OH      44280">St. Martin of Tours, Valley City      Valley City, OH      44280</option>'+
          '<option value="St. Martin, St. Martin MN      St. Martin, MN      56376">St. Martin, St. Martin MN      St. Martin, MN      56376</option>'+
          '<option value="St. Mary Magdalene, Willowick      Willowick, Ohio      44095-3573">St. Mary Magdalene, Willowick      Willowick, Ohio      44095-3573</option>'+
          '<option value="St. Mary Magdalyn, Columbus      Columbus, OH      43204">St. Mary Magdalyn, Columbus      Columbus, OH      43204</option>'+
          '<option value="St. Mary of Czestochowa, New Kensington      New Kensington, PA      15068-5696">St. Mary of Czestochowa, New Kensington      New Kensington, PA      15068-5696</option>'+
          '<option value="St. Mary of Lourdes, Mayville      Mayville, NY      14757">St. Mary of Lourdes, Mayville      Mayville, NY      14757</option>'+
          '<option value="St. Mary of the Assumption, Cleveland      Cleveland, Ohio      44110">St. Mary of the Assumption, Cleveland      Cleveland, Ohio      44110</option>'+
          '<option value="St. Mary of the Assumption, Mentor      Mentor, Ohio      44060-5853">St. Mary of the Assumption, Mentor      Mentor, Ohio      44060-5853</option>'+
          '<option value="St. Mary of the Falls, Olmsted Falls      Olmsted Falls, OH">St. Mary of the Falls, Olmsted Falls      Olmsted Falls, OH</option>'+
          '<option value="St. Mary of tthe Assumption, Herman      Herman, PA      16039">St. Mary of tthe Assumption, Herman      Herman, PA      16039</option>'+
          '<option value="St. Mary, Bedford      Bedford, Ohio      44146">St. Mary, Bedford      Bedford, Ohio      44146</option>'+
          '<option value="St. Mary, Chardon      Chardon Ohio      44024">St. Mary, Chardon      Chardon Ohio      44024</option>'+
          '<option value="St. Mary, Cincinnati      Cincinnati, Ohio      45208">St. Mary, Cincinnati      Cincinnati, Ohio      45208</option>'+
          '<option value="St. Mary, Cleveland      Cleveland, OH      44110-2497">St. Mary, Cleveland      Cleveland, OH      44110-2497</option>'+
          '<option value="St. Mary, Davenport      Davenport, Iowa      52802">St. Mary, Davenport      Davenport, Iowa      52802</option>'+
          '<option value="St. Mary, Greenville      Greenville, South Carolina">St. Mary, Greenville      Greenville, South Carolina</option>'+
          '<option value="St. Mary, Hudson      Hudson, Ohio      44236">St. Mary, Hudson      Hudson, Ohio      44236</option>'+
          '<option value="St. Mary, Massillon      Massillon, OH      44646">St. Mary, Massillon      Massillon, OH      44646</option>'+
          '<option value="St. Mary, Mayville      Mayville, NY      14757">St. Mary, Mayville      Mayville, NY      14757</option>'+
          '<option value="St. Mary, Mentor      Mentor, OH      44060">St. Mary, Mentor      Mentor, OH      44060</option>'+
          '<option value="St. Mary, Montrose      Montrose, Colorado      81401">St. Mary, Montrose      Montrose, Colorado      81401</option>'+
          '<option value="St. Mary, Orwell      Orwell, Ohio      44076">St. Mary, Orwell      Orwell, Ohio      44076</option>'+
          '<option value="St. Mary, Ottawa      Ottawa, IL      61350">St. Mary, Ottawa      Ottawa, IL      61350</option>'+
          '<option value="St. Mary, Painesville      Painesville Ohio      44077">St. Mary, Painesville      Painesville Ohio      44077</option>'+
          '<option value="St. Mary, Shrewsbury      Shrewsbury, MA      01545">St. Mary, Shrewsbury      Shrewsbury, MA      01545</option>'+
          '<option value="St. Mary, St. Clairsville OH      St. Clairsville, Ohio      43950">St. Mary, St. Clairsville OH      St. Clairsville, Ohio      43950</option>'+
          '<option value="St. Mary, Swormville      Swormville, NY      14051">St. Mary, Swormville      Swormville, NY      14051</option>'+
          '<option value="St. Matthew, Glendale Hts.      Glendale Hts., IL      60139">St. Matthew, Glendale Hts.      Glendale Hts., IL      60139</option>'+
          '<option value="St. Mel, Cleveland      Cleveland Ohio      44111">St. Mel, Cleveland      Cleveland Ohio      44111</option>'+
          '<option value="St. Michael, Belvue      Belvue, Ohio">St. Michael, Belvue      Belvue, Ohio</option>'+
          '<option value="St. Michael, Independence      Cleveland, OH      44131">St. Michael, Independence      Cleveland, OH      44131</option>'+
          '<option value="St. Monica, Duluth      Duluth, GA      30097">St. Monica, Duluth      Duluth, GA      30097</option>'+
          '<option value="St. Monica, Garfield Hts.      Garfield Hts., OH      44125-5197">St. Monica, Garfield Hts.      Garfield Hts., OH      44125-5197</option>'+
          '<option value="St. Nicholas Byzantine, Cleveland      Cleveland, Ohio      44114">St. Nicholas Byzantine, Cleveland      Cleveland, Ohio      44114</option>'+
          '<option value="St. Noel, Willoughby Hills      Willoughby Hills, OH      44094-9193">St. Noel, Willoughby Hills      Willoughby Hills, OH      44094-9193</option>'+
          '<option value="St. Paschal Baylon, Highland Hts.      Highland Hts., OH      44143-3092">St. Paschal Baylon, Highland Hts.      Highland Hts., OH      44143-3092</option>'+
          '<option value="St. Patrick      Kent, OH">St. Patrick      Kent, OH</option>'+
          '<option value="St. Patrick, Ann Arbor      Ann Arbor, MI      48105">St. Patrick, Ann Arbor      Ann Arbor, MI      48105</option>'+
          '<option value="St. Patrick, Cleveland      Cleveland, OH      44113">St. Patrick, Cleveland      Cleveland, OH      44113</option>'+
          '<option value="St. Patrick, Cleveland      Cleveland, OH      44135">St. Patrick, Cleveland      Cleveland, OH      44135</option>'+
          '<option value="St. Patrick, Leetonia      Leetonia, OH">St. Patrick, Leetonia      Leetonia, OH</option>'+
          '<option value="St. Patrick, Ottawa      Ottawa, IL      61350">St. Patrick, Ottawa      Ottawa, IL      61350</option>'+
          '<option value="St. Patrick, Thompson      Thompson, OH      44086">St. Patrick, Thompson      Thompson, OH      44086</option>'+
          '<option value="St. Patrick, Wisconsin      Onalaska, WI">St. Patrick, Wisconsin      Onalaska, WI</option>'+
          '<option value="St. Patrick, Youngstown      Kinsman, Ohio      44428">St. Patrick, Youngstown      Kinsman, Ohio      44428</option>'+
          '<option value="St. Paul Croatian, Cleveland      Cleveland, Ohio      44103">St. Paul Croatian, Cleveland      Cleveland, Ohio      44103</option>'+
          '<option value="St. Paul the Apostle Church, Davenport, IA      Davenport, IA">St. Paul the Apostle Church, Davenport, IA      Davenport, IA</option>'+
          '<option value="St. Paul, Euclid      Euclid, OH      44117-1192">St. Paul, Euclid      Euclid, OH      44117-1192</option>'+
          '<option value="St. Paul, Euclid      Euclid, Ohio      44143">St. Paul, Euclid      Euclid, Ohio      44143</option>'+
          '<option value="St. Peter and Paul, Garfield Hts.      Garfield Heights, OH">St. Peter and Paul, Garfield Hts.      Garfield Heights, OH</option>'+
          '<option value="St. Peter Cathedral      Erie, PA">St. Peter Cathedral      Erie, PA</option>'+
          '<option value="St. Peter Parish, Skokie      Skokie, IL      60077">St. Peter Parish, Skokie      Skokie, IL      60077</option>'+
          '<option value="St. Peter the Apostle, Boerne      Boerne, TX      78006">St. Peter the Apostle, Boerne      Boerne, TX      78006</option>'+
          '<option value="St. Peter the Apostle, Brook Park      Brook Park, OH      44142-3503">St. Peter the Apostle, Brook Park      Brook Park, OH      44142-3503</option>'+
          '<option value="St. Peter, Cleveland      Cleveland, Ohio">St. Peter, Cleveland      Cleveland, Ohio</option>'+
          '<option value="St. Peter, Spring Grove      Spring Grove, IL 60081">St. Peter, Spring Grove      Spring Grove, IL 60081</option>'+
          '<option value="St. Philomena, E. Cleveland      East Cleveland, Ohio      44112">St. Philomena, E. Cleveland      East Cleveland, Ohio      44112</option>'+
          '<option value="St. Pius X, Bedford      Bedford, OH      44146-2296">St. Pius X, Bedford      Bedford, OH      44146-2296</option>'+
          '<option value="St. Pius X, Warren      Warren, Ohio      44485">St. Pius X, Warren      Warren, Ohio      44485</option>'+
          '<option value="St. Raphael, Bay Village      Bay Village, OH      44140-2366">St. Raphael, Bay Village      Bay Village, OH      44140-2366</option>'+
          '<option value="St. Richard, North Olmsted      North Olmsted, OH      44070-3260">St. Richard, North Olmsted      North Olmsted, OH      44070-3260</option>'+
          '<option value="St. Rita, Solon      Solon, OH      44139-4098">St. Rita, Solon      Solon, OH      44139-4098</option>'+
          '<option value="St. Robert Bellarmine, Euclid      Euclid, OH      44123-1200">St. Robert Bellarmine, Euclid      Euclid, OH      44123-1200</option>'+
          '<option value="St. Robert of Newminster, Ada      Ada, MI">St. Robert of Newminster, Ada      Ada, MI</option>'+
          '<option value="St. Roch, Indianapolis      Indianapolis IN      46227">St. Roch, Indianapolis      Indianapolis IN      46227</option>'+
          '<option value="St. Rose of Lima, Cleveland      Cleveland, OH      44102-2399">St. Rose of Lima, Cleveland      Cleveland, OH      44102-2399</option>'+
          '<option value="St. Rose, Girard      Girard,OH">St. Rose, Girard      Girard,OH</option>'+
          '<option value="St. Sebastian, Akron      Akron, OH      44320">St. Sebastian, Akron      Akron, OH      44320</option>'+
          '<option value="St. Sebastian, Ft. Lauderdale      Ft. Lauderdale, FL.      33316-3299">St. Sebastian, Ft. Lauderdale      Ft. Lauderdale, FL.      33316-3299</option>'+
          '<option value="St. Stanislaus, Cleveland      Cleveland, OH      44105-1293">St. Stanislaus, Cleveland      Cleveland, OH      44105-1293</option>'+
          '<option value="St. Stephen, Cleveland      Cleveland      44102">St. Stephen, Cleveland      Cleveland      44102</option>'+
          '<option value="St. Stephen, New Boston      New Boston, MI">St. Stephen, New Boston      New Boston, MI</option>'+
          '<option value="St. Stephen, Riverview      Riverview, FL      33569">St. Stephen, Riverview      Riverview, FL      33569</option>'+
          '<option value="St. Stephen, West Salem      West Salem, Ohio      44287">St. Stephen, West Salem      West Salem, Ohio      44287</option>'+
          '<option value="St. Sussana, Mason      Mason, Ohio      45050">St. Sussana, Mason      Mason, Ohio      45050</option>'+
          '<option value="St. Therese, Garfield Hts.      Garfield Hts.,  OH      44125-2698">St. Therese, Garfield Hts.      Garfield Hts.,  OH      44125-2698</option>'+
          '<option value="St. Thomas Aquinas, IA      Ames, IA      50014">St. Thomas Aquinas, IA      Ames, IA      50014</option>'+
          '<option value="St. Thomas Aquinas, IO      Ames, IA      50014">St. Thomas Aquinas, IO      Ames, IA      50014</option>'+
          '<option value="St. Thomas More, Brookings      Brookings, SD      57006">St. Thomas More, Brookings      Brookings, SD      57006</option>'+
          '<option value="St. Thomas More, Brooklyn OH      Brooklyn, OH      44144">St. Thomas More, Brooklyn OH      Brooklyn, OH      44144</option>'+
          '<option value="St. Thomas the Apostle, Crystal Lake      Crystal Lake, IL      60014">St. Thomas the Apostle, Crystal Lake      Crystal Lake, IL      60014</option>'+
          '<option value="St. Timothy, Garfield Hts.      Garfield Hts., OH">St. Timothy, Garfield Hts.      Garfield Hts., OH</option>'+
          '<option value="St. Vincent de Paul, Akron      Akron, OH      44303">St. Vincent de Paul, Akron      Akron, OH      44303</option>'+
          '<option value="St. Vincent de Paul, Cleveland      Cleveland, Ohio      44111">St. Vincent de Paul, Cleveland      Cleveland, Ohio      44111</option>'+
          '<option value="St. Vincent de Paul, Elyria      Elyria, OH      44035">St. Vincent de Paul, Elyria      Elyria, OH      44035</option>'+
          '<option value="St. Vincent, Vienna      Vienna, Ohio      44473">St. Vincent, Vienna      Vienna, Ohio      44473</option>'+
          '<option value="St. Vitus, Cleveland      Cleveland, Ohio      44103">St. Vitus, Cleveland      Cleveland, Ohio      44103</option>'+
          '<option value="St. Walter, Roselle      Roselle, IL">St. Walter, Roselle      Roselle, IL</option>'+
          '<option value="St. Wenceslas, Maple Hts.      Maple Hts., OH      44137-1598">St. Wenceslas, Maple Hts.      Maple Hts., OH      44137-1598</option>'+
          '<option value="St. William, Euclid      Euclid, OH      44132-1495">St. William, Euclid      Euclid, OH      44132-1495</option>'+
          '<option value="Sts. Cyril &amp; Methodius, Lakewood      Lakewood, OH      44107-4997">Sts. Cyril &amp; Methodius, Lakewood      Lakewood, OH      44107-4997</option>'+
          '<option value="Sts. Peter and Paul, Garfield Hts.      Garfield Hts">Sts. Peter and Paul, Garfield Hts.      Garfield Hts</option>'+
          '<option value="Sts. Peter and Paul, Hamburg      Hamburg, NY      14075-5059">Sts. Peter and Paul, Hamburg      Hamburg, NY      14075-5059</option>'+
          '<option value="Sts. Phillips &amp; James Church, Cleveland      Cleveland, OH      44111">Sts. Phillips &amp; James Church, Cleveland      Cleveland, OH      44111</option>'+
          '<option value="Sts. Robert and William, Euclid      Euclid, Ohio      44132">Sts. Robert and William, Euclid      Euclid, Ohio      44132</option>'+
          '<option value="The Church of the Good Shepherd, Cumming, GA      Cumming, GA      30041">The Church of the Good Shepherd, Cumming, GA      Cumming, GA      30041</option>'+
          '<option value="Transfiguration, Lakewood      Lakewood, Ohio      44107">Transfiguration, Lakewood      Lakewood, Ohio      44107</option>'+
          '<option value="Tribunal Cleveland, Ohio      Cleveland Ohio      44114">Tribunal Cleveland, Ohio      Cleveland Ohio      44114</option>'+
          '<option value="Trinity English Luthern Church      Fort Wayne, IN">Trinity English Luthern Church      Fort Wayne, IN</option>'+
          '<option value="United Methodist Church Chagrin Falls      Chagrin Falls, Ohio">United Methodist Church Chagrin Falls      Chagrin Falls, Ohio</option>'+
          '<option value="USAG Chapel      Wiesbader">USAG Chapel      Wiesbader</option>'+
          '<option value="Valley Lutheran      Chagrin Falls, Oh">Valley Lutheran      Chagrin Falls, Oh</option>'+
          '<option value="Virger del Carmen      Villahermosa, Tabasco">Virger del Carmen      Villahermosa, Tabasco</option>'+
          '<option value="Vogelweh Chapel &quot;Military Orinariate&quot;      New York 22., New York">Vogelweh Chapel &quot;Military Orinariate&quot;      New York 22., New York</option>'+
          '<option value="Willoughby, United Methodist">Willoughby, United Methodist</option>'+
          '</select>';
        formTabIndex = formTabIndex + 1;
        var tr13 = document.createElement('tr');
        tr13.setAttribute('name', 'tr13'+memNum);
        tr13.setAttribute('id', 'tr13'+memNum);
        mainTableBody.appendChild(tr13);
        tr13.insertCell(0).innerHTML = '<td></td>';
        tr13.insertCell(1).innerHTML = '<td></td>';
        var td13 = document.createElement('td');
        td13.setAttribute('id', 'td13'+memNum);
        td13.setAttribute('colspan', '2');
        tr13.appendChild(td13);
        td13.innerHTML = '<span class="lbl">&nbsp;&nbsp;&nbsp;1st Comm</span><input type="hidden" name="txaMem'+memNum+'Sac2Name" id="txaMem'+memNum+'Sac2Name" value="1st Comm" />';
        var td14 = document.createElement('td');
        td14.setAttribute('id', 'td14'+memNum);
        td14.setAttribute('colspan', '1');
        tr13.appendChild(td14);
        td14.innerHTML = ' <select tabindex="202" name="cboMem'+memNum+'Sac2" id="cboMem'+memNum+'Sac2" class="pulldownstyle"><option value="" /><option value="Yes">Yes</option><option value="No">No</option></select>';
        var td15 = document.createElement('td');
        td15.setAttribute('id', 'td15'+memNum);
        td15.setAttribute('colspan', '1');
        tr13.appendChild(td15);
        td15.innerHTML = '<input tabindex="'+(formTabIndex+1)+'" style="width:100px" autocomplete="off" value="mm/dd/yyyy" title="enter the 1stcomm date" name="dteMem'+memNum+'Sac2Date" id="dteMem'+memNum+'Sac2Date" maxlength="10" onkeydown="onKeyPressed(event, this);" onFocus="this.select()" class="textboxstyle dateInput" onchange="checkDate(this.id)" onkeyup="DoKeyUp(this)" />';
        calendar.set('dteMem'+memNum+'Sac2Date');
        formTabIndex = formTabIndex + 1;
        var td16 = document.createElement('td');
        td16.setAttribute('id', 'td16'+memNum);
        td16.setAttribute('colspan', '2');
        tr13.appendChild(td16);
        td16.innerHTML = 
          '<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Sac2Place" id="cboMem'+memNum+'Sac2Place" title="Select a place in the pull down list" style="width: 166px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Bethany Covenant Church, Lyndhurst      Lyndhurst, Oh.">Bethany Covenant Church, Lyndhurst      Lyndhurst, Oh.</option>'+
          '<option value="Blessed Sacrament, Valley Stream, NY      Valley Stream, NY      11580">Blessed Sacrament, Valley Stream, NY      Valley Stream, NY      11580</option>'+
          '<option value="Blessed Sacrament, Warren      Warren Ohio      44483">Blessed Sacrament, Warren      Warren Ohio      44483</option>'+
          '<option value="Blessed Trinity, Cleveland      Cleveland, Ohio 44135">Blessed Trinity, Cleveland      Cleveland, Ohio 44135</option>'+
          '<option value="Braceville Community Church, Newton Falls      Newton Falls, Ohio">Braceville Community Church, Newton Falls      Newton Falls, Ohio</option>'+
          '<option value="Burton Congregational Church      Burton, OH      44021">Burton Congregational Church      Burton, OH      44021</option>'+
          '<option value="Cathedral Basilica of St. Peter in Chains, Cincinnati      Lebanon, OH      45036">Cathedral Basilica of St. Peter in Chains, Cincinnati      Lebanon, OH      45036</option>'+
          '<option value="Cathedral of Christ the King, Lexington      Lexington, KY      40502-2322">Cathedral of Christ the King, Lexington      Lexington, KY      40502-2322</option>'+
          '<option value="Cathedral of St. John the Evangelist, Cleveland      Cleveland, Ohio      44114-2582">Cathedral of St. John the Evangelist, Cleveland      Cleveland, Ohio      44114-2582</option>'+
          '<option value="Christ the King, Akron      Akron Ohio      44310">Christ the King, Akron      Akron Ohio      44310</option>'+
          '<option value="Christ the King, Cleveland      East Cleveland, OH      44112-1636">Christ the King, Cleveland      East Cleveland, OH      44112-1636</option>'+
          '<option value="Christ The King, Las Vegas      Las Vegas, NV      89118">Christ The King, Las Vegas      Las Vegas, NV      89118</option>'+
          '<option value="Church of Annunciation, Cleveland      Cleveland, OH      44135">Church of Annunciation, Cleveland      Cleveland, OH      44135</option>'+
          '<option value="Church of Beloved Disciple, Grove City      Grove City, PA      16127">Church of Beloved Disciple, Grove City      Grove City, PA      16127</option>'+
          '<option value="Church of St. Anthony, Joliet      Joliet, IL      60432-4210">Church of St. Anthony, Joliet      Joliet, IL      60432-4210</option>'+
          '<option value="Church of St. Mary and St. Joseph, Newton Falls      Newton Falls, Ohio      44444">Church of St. Mary and St. Joseph, Newton Falls      Newton Falls, Ohio      44444</option>'+
          '<option value="Church of the Assumption, Broadview Hts.      Broadview Heights, Ohio      44147">Church of the Assumption, Broadview Hts.      Broadview Heights, Ohio      44147</option>'+
          '<option value="Church of the Blessed Sacrament, Warren      Warren Ohio      44483">Church of the Blessed Sacrament, Warren      Warren Ohio      44483</option>'+
          '<option value="Church of the Incarnation, Centerville      Centerville, Ohio      45459">Church of the Incarnation, Centerville      Centerville, Ohio      45459</option>'+
          '<option value="Church Of The Resurection, New Albany      New Albany, Ohio">Church Of The Resurection, New Albany      New Albany, Ohio</option>'+
          '<option value="Communion of Saints, Cleveland Hts.      Cleveland Heights, Ohio      44118">Communion of Saints, Cleveland Hts.      Cleveland Heights, Ohio      44118</option>'+
          '<option value="Curch of the Annunciation, Cleveland      Cleveland, Ohio      44135">Curch of the Annunciation, Cleveland      Cleveland, Ohio      44135</option>'+
          '<option value="Divine Word, Kirtland      Kirtland, OH      44094-9714">Divine Word, Kirtland      Kirtland, OH      44094-9714</option>'+
          '<option value="First Congregational Church of Claridon      Chardon, OH      44024">First Congregational Church of Claridon      Chardon, OH      44024</option>'+
          '<option value="First Presbyterian, East Cleveland      East cleveland ohio">First Presbyterian, East Cleveland      East cleveland ohio</option>'+
          '<option value="Germany">Germany</option>'+
          '<option value="Gesu, Universtiy Hts.      University Hts., OH      44118-3896">Gesu, Universtiy Hts.      University Hts., OH      44118-3896</option>'+
          '<option value="Holy Angels, Chagrin Falls      Chagrin Falls,  OH      44023-4879">Holy Angels, Chagrin Falls      Chagrin Falls,  OH      44023-4879</option>'+
          '<option value="Holy Cross, Euclid      Euclid, OH      44119-1066">Holy Cross, Euclid      Euclid, OH      44119-1066</option>'+
          '<option value="Holy Family Parish (Archives)      Cleveland, Ohio      44114">Holy Family Parish (Archives)      Cleveland, Ohio      44114</option>'+
          '<option value="Holy Family, Endwell      Endwell, NY      13760">Holy Family, Endwell      Endwell, NY      13760</option>'+
          '<option value="Holy Family, Parma      Parma, OH      44130">Holy Family, Parma      Parma, OH      44130</option>'+
          '<option value="Holy Family, Stow      Stow, OH      44224">Holy Family, Stow      Stow, OH      44224</option>'+
          '<option value="Holy Name, Cleveland      Cleveland, OH">Holy Name, Cleveland      Cleveland, OH</option>'+
          '<option value="Holy Redeemer, Cleveland      Cleveland, OH      44110-3104">Holy Redeemer, Cleveland      Cleveland, OH      44110-3104</option>'+
          '<option value="Holy Rosary, Cleveland      Cleveland, OH      44106-1996">Holy Rosary, Cleveland      Cleveland, OH      44106-1996</option>'+
          '<option value="Holy Trinity, Avon      Avon, Ohio      44011">Holy Trinity, Avon      Avon, Ohio      44011</option>'+
          '<option value="Holy Trinity, Bedford Hts.      Bedford Hts., OH      44146-2599">Holy Trinity, Bedford Hts.      Bedford Hts., OH      44146-2599</option>'+
          '<option value="Immaculate Conception Church Madison      Madison Ohio">Immaculate Conception Church Madison      Madison Ohio</option>'+
          '<option value="Immaculate Conception, Bellevue      Bellevue, OH      44811">Immaculate Conception, Bellevue      Bellevue, OH      44811</option>'+
          '<option value="Immaculate Conception, Cleveland      Cleveland, OH      44103-1179">Immaculate Conception, Cleveland      Cleveland, OH      44103-1179</option>'+
          '<option value="Immaculate Conception, Durham      Durham, NC      27701">Immaculate Conception, Durham      Durham, NC      27701</option>'+
          '<option value="Immaculate Conception, Willoughby      Willoughby, Ohio">Immaculate Conception, Willoughby      Willoughby, Ohio</option>'+
          '<option value="Immaculate Heart of Mary, Cuyahoga Falls      Cuyahoga Falls, Ohio      44223">Immaculate Heart of Mary, Cuyahoga Falls      Cuyahoga Falls, Ohio      44223</option>'+
          '<option value="King of Kings Evangelical Lutheran Church, Willoughby      Willoughby, Ohio      44094-7570">King of Kings Evangelical Lutheran Church, Willoughby      Willoughby, Ohio      44094-7570</option>'+
          '<option value="Lake Shore Christian Church, Cleveland      Cleveland, OH      44132">Lake Shore Christian Church, Cleveland      Cleveland, OH      44132</option>'+
          '<option value="Lord of Life Lutheran Church, Chagrin Falls      Chagrin Falls, Ohio      44023">Lord of Life Lutheran Church, Chagrin Falls      Chagrin Falls, Ohio      44023</option>'+
          '<option value="Mariapoch Shrine, Burton      Burton, OH      44021">Mariapoch Shrine, Burton      Burton, OH      44021</option>'+
          '<option value="Mary Queen of Peace, Cleveland      Cleveland, Ohio      44109">Mary Queen of Peace, Cleveland      Cleveland, Ohio      44109</option>'+
          '<option value="Most Holy Trinity Church, Chesterland      Chesterland">Most Holy Trinity Church, Chesterland      Chesterland</option>'+
          '<option value="Mother of Mercy, Washington NC      Washington, NC      27889">Mother of Mercy, Washington NC      Washington, NC      27889</option>'+
          '<option value="Mother of Sorrows, Peninsula      Peninsula, Ohio      44264">Mother of Sorrows, Peninsula      Peninsula, Ohio      44264</option>'+
          '<option value="Nativity of Our Lord Church, Orchard Park      Orchard Park, NY      14127">Nativity of Our Lord Church, Orchard Park      Orchard Park, NY      14127</option>'+
          '<option value="Nativity of the Blessed Virgin Mary, South Amherst      South Amherst, OH      44001">Nativity of the Blessed Virgin Mary, South Amherst      South Amherst, OH      44001</option>'+
          '<option value="Newton Falls United Methodist      Newton Falls, Ohio">Newton Falls United Methodist      Newton Falls, Ohio</option>'+
          '<option value="North American Martyrs Church, Monroville      Monroville, PA">North American Martyrs Church, Monroville      Monroville, PA</option>'+
          '<option value="Other">Other</option>'+
          '<option value="Our Lady Chapel/Gilmour, Gates Mills      Gates Mills,  Ohio      44040">Our Lady Chapel/Gilmour, Gates Mills      Gates Mills,  Ohio      44040</option>'+
          '<option value="Our Lady Of Good Council, Cleveland      Cleveland, OH      44109">Our Lady Of Good Council, Cleveland      Cleveland, OH      44109</option>'+
          '<option value="Our Lady Of Grace, Hickley      Hickley, OH      44233">Our Lady Of Grace, Hickley      Hickley, OH      44233</option>'+
          '<option value="Our Lady Of Guadalupe, Macedonia      Macedonia, OH      44056-1450">Our Lady Of Guadalupe, Macedonia      Macedonia, OH      44056-1450</option>'+
          '<option value="Our Lady Of Hope, Bedford      Bedford, Ohio      44146">Our Lady Of Hope, Bedford      Bedford, Ohio      44146</option>'+
          '<option value="Our Lady Of Loreto, Ft. Rucker      Ft. Rucker, AL">Our Lady Of Loreto, Ft. Rucker      Ft. Rucker, AL</option>'+
          '<option value="Our Lady Of Lourdes, Cleveland      Cleveland, OH      44127-1692">Our Lady Of Lourdes, Cleveland      Cleveland, OH      44127-1692</option>'+
          '<option value="Our Lady Of Lourdes, Genoa      Genoa, OH">Our Lady Of Lourdes, Genoa      Genoa, OH</option>'+
          '<option value="Our Lady Of Mount Carmel, Ashtabula      Ashtabula, Ohio      44004">Our Lady Of Mount Carmel, Ashtabula      Ashtabula, Ohio      44004</option>'+
          '<option value="Our Lady Of Mount Carmel, Cleveland      Cleveland      44102">Our Lady Of Mount Carmel, Cleveland      Cleveland      44102</option>'+
          '<option value="Our Lady Of Mt. Carmel, Wickliffe      Wickliffe, OH      44092-1896">Our Lady Of Mt. Carmel, Wickliffe      Wickliffe, OH      44092-1896</option>'+
          '<option value="Our Lady Of Peace, Cleveland      Cleveland, Ohio      44120">Our Lady Of Peace, Cleveland      Cleveland, Ohio      44120</option>'+
          '<option value="Our Lady Of Perpetual Help, Aurora      Aurora, OH      44202">Our Lady Of Perpetual Help, Aurora      Aurora, OH      44202</option>'+
          '<option value="Our Lady Of Perpetual Help, Cleveland      Cleveland Ohio      44119">Our Lady Of Perpetual Help, Cleveland      Cleveland Ohio      44119</option>'+
          '<option value="Our Lady Of Sorrows, Vestal      Vestal, NY">Our Lady Of Sorrows, Vestal      Vestal, NY</option>'+
          '<option value="Our Lady Of The Lake, Edinboro      Edinboro, PA">Our Lady Of The Lake, Edinboro      Edinboro, PA</option>'+
          '<option value="Our Lady of the Lakes, Euclid      Euclid, OH      44119">Our Lady of the Lakes, Euclid      Euclid, OH      44119</option>'+
          '<option value="Our Lady of the Lakes, Waterford      Waterford, MI      48329">Our Lady of the Lakes, Waterford      Waterford, MI      48329</option>'+
          '<option value="Our Lady\'s Immaculate Heart, Ankeny      Ankeny, IA">Our Lady\'s Immaculate Heart, Ankeny      Ankeny, IA</option>'+
          '<option value="Parroquia De Corpus Christi      Queretaro, Queretaro">Parroquia De Corpus Christi      Queretaro, Queretaro</option>'+
          '<option value="Peace Lutheran Church, Chardon      Chardon Ohio      44024">Peace Lutheran Church, Chardon      Chardon Ohio      44024</option>'+
          '<option value="Port Alfred Christian Centre      Port Alfred">Port Alfred Christian Centre      Port Alfred</option>'+
          '<option value="Redeemer Lutheran, Cuyahoga Falls      Cuyahoga Falls, OH      44221">Redeemer Lutheran, Cuyahoga Falls      Cuyahoga Falls, OH      44221</option>'+
          '<option value="Resurrection of Our Lord, Solon      Solon, OH      44139">Resurrection of Our Lord, Solon      Solon, OH      44139</option>'+
          '<option value="Resurrection Parish, Lexington      Lexington, Ohio      44904">Resurrection Parish, Lexington      Lexington, Ohio      44904</option>'+
          '<option value="Riverwood Community Chapel">Riverwood Community Chapel</option>'+
          '<option value="Sacred Heart of Jesus, S. Euclid      South Euclid, Ohio      44121-4085">Sacred Heart of Jesus, S. Euclid      South Euclid, Ohio      44121-4085</option>'+
          '<option value="Sacred Heart, Cullman      Cullman, Alabama">Sacred Heart, Cullman      Cullman, Alabama</option>'+
          '<option value="Sacred Heart, Malden      Malden, MA">Sacred Heart, Malden      Malden, MA</option>'+
          '<option value="Sacred Heart, Rock Creek      Rock Creek, OH      44084">Sacred Heart, Rock Creek      Rock Creek, OH      44084</option>'+
          '<option value="San Pedro Alcantara, Namiquipa, Chih.">San Pedro Alcantara, Namiquipa, Chih.</option>'+
          '<option value="St Anselm      Chesterland, OH">St Anselm      Chesterland, OH</option>'+
          '<option value="St Jude Thadeus      Trece Martires City">St Jude Thadeus      Trece Martires City</option>'+
          '<option value="St. Adelbert, Berea      Berea, OH      44017">St. Adelbert, Berea      Berea, OH      44017</option>'+
          '<option value="St. Agnes, Cleveland      Cleveland">St. Agnes, Cleveland      Cleveland</option>'+
          '<option value="St. Albert the Great, Kettering      Kettering, OH      45429">St. Albert the Great, Kettering      Kettering, OH      45429</option>'+
          '<option value="St. Alexander, Palos Hts.      Palos Heights, Illinois      60463">St. Alexander, Palos Hts.      Palos Heights, Illinois      60463</option>'+
          '<option value="St. Alphonsus, Davenport      Davenport, Iowa      52802">St. Alphonsus, Davenport      Davenport, Iowa      52802</option>'+
          '<option value="St. Ambrose, Brunswick      Brunswick, OH      44212">St. Ambrose, Brunswick      Brunswick, OH      44212</option>'+
          '<option value="St. Ambrose, Garrettsville      Garrettsville, OH      44231">St. Ambrose, Garrettsville      Garrettsville, OH      44231</option>'+
          '<option value="St. Ambrose, Hollywood      Hollywood, CA      90046">St. Ambrose, Hollywood      Hollywood, CA      90046</option>'+
          '<option value="St. Ambrose, Seymour      Seymour, Indiana      47274">St. Ambrose, Seymour      Seymour, Indiana      47274</option>'+
          '<option value="St. Andrew, Kingsville      Kingsville, Ohio      44048">St. Andrew, Kingsville      Kingsville, Ohio      44048</option>'+
          '<option value="St. Ann, Hiawatha      Hiawatha, KS">St. Ann, Hiawatha      Hiawatha, KS</option>'+
          '<option value="St. Ann, Marietta      Marietta,GA      30062">St. Ann, Marietta      Marietta,GA      30062</option>'+
          '<option value="St. Anselm, Chesterland      Chesterland, OH      44026-3199">St. Anselm, Chesterland      Chesterland, OH      44026-3199</option>'+
          '<option value="St. Anthony of Padua, Akron      Akron, OH      44310-3184">St. Anthony of Padua, Akron      Akron, OH      44310-3184</option>'+
          '<option value="St. Anthony of Padua, Fairport Harbor      Fairport Harbor, OH      44077-5696">St. Anthony of Padua, Fairport Harbor      Fairport Harbor, OH      44077-5696</option>'+
          '<option value="St. Anthony of Padua, Parma      Parma, OH      44134-4518">St. Anthony of Padua, Parma      Parma, OH      44134-4518</option>'+
          '<option value="St. Anthony of Padua, San Antonio      San Antonio, FL      33576">St. Anthony of Padua, San Antonio      San Antonio, FL      33576</option>'+
          '<option value="St. Augustine, Milwaukee      Milwaukee, WI      53207">St. Augustine, Milwaukee      Milwaukee, WI      53207</option>'+
          '<option value="St. Barnabas, Northfield      Northfield, OH      44067-2499">St. Barnabas, Northfield      Northfield, OH      44067-2499</option>'+
          '<option value="St. Bartholomew, Middleburg Hts.      Middleburg Heights, Ohio      44130">St. Bartholomew, Middleburg Hts.      Middleburg Heights, Ohio      44130</option>'+
          '<option value="St. Basil the Great, Brecksville      Brecksville, Ohio      44141">St. Basil the Great, Brecksville      Brecksville, Ohio      44141</option>'+
          '<option value="St. Bede the Venerable, Mentor      Mentor, OH      44060-1697">St. Bede the Venerable, Mentor      Mentor, OH      44060-1697</option>'+
          '<option value="St. Bernadette, Westlake      Westlake, OH      44145-4328">St. Bernadette, Westlake      Westlake, OH      44145-4328</option>'+
          '<option value="St. Bernard of Clairvaux, Cincinnati      Cincinnati, OH      45247">St. Bernard of Clairvaux, Cincinnati      Cincinnati, OH      45247</option>'+
          '<option value="St. Bernard, Akron      Akron, OH      44308">St. Bernard, Akron      Akron, OH      44308</option>'+
          '<option value="St. Boniface, Erie      Erie, PA      16509">St. Boniface, Erie      Erie, PA      16509</option>'+
          '<option value="St. Boniface, Lafayette      Lafayette, Indiana">St. Boniface, Lafayette      Lafayette, Indiana</option>'+
          '<option value="St. Brigid, San Antonio      San Antonio, TX      78240">St. Brigid, San Antonio      San Antonio, TX      78240</option>'+
          '<option value="St. Casimir, Cleveland      Cleveland, OH      44103">St. Casimir, Cleveland      Cleveland, OH      44103</option>'+
          '<option value="St. Catherine, Cleveland">St. Catherine, Cleveland</option>'+
          '<option value="St. Catherine, Crescent      Crescent, PA 15046">St. Catherine, Crescent      Crescent, PA 15046</option>'+
          '<option value="St. Cecelia,      Rochester, PA      15074">St. Cecelia,      Rochester, PA      15074</option>'+
          '<option value="St. Cecelia, Cleveland      Cleveland, OH">St. Cecelia, Cleveland      Cleveland, OH</option>'+
          '<option value="St. Cecelia, Rochester      Rochester, PA.">St. Cecelia, Rochester      Rochester, PA.</option>'+
          '<option value="St. Cecelia, Rochester PA">St. Cecelia, Rochester PA</option>'+
          '<option value="St. Cecilia">St. Cecilia</option>'+
          '<option value="St. Cecilia, Boston      Boston, Massachusetts      02115">St. Cecilia, Boston      Boston, Massachusetts      02115</option>'+
          '<option value="St. Charles Borromeo, Parma      Parma, OH">St. Charles Borromeo, Parma      Parma, OH</option>'+
          '<option value="St. Charles Borromeo, Youngstown      Youngstown, Ohio">St. Charles Borromeo, Youngstown      Youngstown, Ohio</option>'+
          '<option value="St. Christine, Euclid      Euclid, OH      44123-3317">St. Christine, Euclid      Euclid, OH      44123-3317</option>'+
          '<option value="St. Christopher by the River, Gates Mills      Gates Mills, OH">St. Christopher by the River, Gates Mills      Gates Mills, OH</option>'+
          '<option value="St. Christopher, Rocky River      Rocky River, OH">St. Christopher, Rocky River      Rocky River, OH</option>'+
          '<option value="St. Clare, Lyndhurst      Lyndhurst, OH      44124-2915">St. Clare, Lyndhurst      Lyndhurst, OH      44124-2915</option>'+
          '<option value="St. Clement, Calhoun      Calhoun, GA">St. Clement, Calhoun      Calhoun, GA</option>'+
          '<option value="St. Clement, Lakewood      Lakewood, OH      44107">St. Clement, Lakewood      Lakewood, OH      44107</option>'+
          '<option value="St. Colman, Cleveland      Cleveland, Ohio      44102">St. Colman, Cleveland      Cleveland, Ohio      44102</option>'+
          '<option value="St. Columba Cathedral, Youngstown      Youngstown Ohio">St. Columba Cathedral, Youngstown      Youngstown Ohio</option>'+
          '<option value="St. Columba, Ottowa      Ottawa, IL      61350">St. Columba, Ottowa      Ottawa, IL      61350</option>'+
          '<option value="St. Columban, Loveland      Loveland, Ohio">St. Columban, Loveland      Loveland, Ohio</option>'+
          '<option value="St. Columbkille, Parma      Parma, OH      44134-4898">St. Columbkille, Parma      Parma, OH      44134-4898</option>'+
          '<option value="St. Cosmos and Damien, Twinsburg      Twinsburg, OH      44087">St. Cosmos and Damien, Twinsburg      Twinsburg, OH      44087</option>'+
          '<option value="St. Dominic, Shaker Hts.      Shaker Heights, OH      44122-4967">St. Dominic, Shaker Hts.      Shaker Heights, OH      44122-4967</option>'+
          '<option value="St. Edward, Parkman      Parkman, OH      44080-0709">St. Edward, Parkman      Parkman, OH      44080-0709</option>'+
          '<option value="St. Elizabeth Ann Seton, Warren      Warren, Ohio      44484-5217">St. Elizabeth Ann Seton, Warren      Warren, Ohio      44484-5217</option>'+
          '<option value="St. Emeric, Cleveland      Cleveland/Ohio">St. Emeric, Cleveland      Cleveland/Ohio</option>'+
          '<option value="St. Eugene, Akron      Arron Ohio      44221">St. Eugene, Akron      Arron Ohio      44221</option>'+
          '<option value="St. FCO De Asis      Chih">St. FCO De Asis      Chih</option>'+
          '<option value="St. Felicitas, Euclid      Euclid, OH      44143-1299">St. Felicitas, Euclid      Euclid, OH      44143-1299</option>'+
          '<option value="St. Felipe de Jesus      Atotonlico el Alto, Jalisco">St. Felipe de Jesus      Atotonlico el Alto, Jalisco</option>'+
          '<option value="St. Francis De Sales, Lebenon      Lebenon, Ohio      45036-1352">St. Francis De Sales, Lebenon      Lebenon, Ohio      45036-1352</option>'+
          '<option value="St. Francis De Sales, Parma      Parma, OH      44134-2904">St. Francis De Sales, Parma      Parma, OH      44134-2904</option>'+
          '<option value="St. Francis Of Assisi, Ann Arbor      Ann Arbor, MI      48104">St. Francis Of Assisi, Ann Arbor      Ann Arbor, MI      48104</option>'+
          '<option value="St. Francis Of Assisi, Gates Mills      Gates Mills, OH      44040-9635">St. Francis Of Assisi, Gates Mills      Gates Mills, OH      44040-9635</option>'+
          '<option value="St. Francis Xavier, Ft. Myers      Ft. Myers, FL      33901">St. Francis Xavier, Ft. Myers      Ft. Myers, FL      33901</option>'+
          '<option value="St. Francis Xavier, Medina      Medina, OH      44256">St. Francis Xavier, Medina      Medina, OH      44256</option>'+
          '<option value="St. Gabriel, Concord      Concord, Ohio      44060-6294">St. Gabriel, Concord      Concord, Ohio      44060-6294</option>'+
          '<option value="St. Gregory, Euclid      South Euclid, OH      44121-4085">St. Gregory, Euclid      South Euclid, OH      44121-4085</option>'+
          '<option value="St. Hedwig, Detroit      Detroit, MI">St. Hedwig, Detroit      Detroit, MI</option>'+
          '<option value="St. Helen Church, Newbury      Newbury, OH      44065">St. Helen Church, Newbury      Newbury, OH      44065</option>'+
          '<option value="St. Helena, Cleveland      Cleveland, OH      44102">St. Helena, Cleveland      Cleveland, OH      44102</option>'+
          '<option value="St. Henry, Cleveland      Cleveland, OH      44128-1796">St. Henry, Cleveland      Cleveland, OH      44128-1796</option>'+
          '<option value="St. Hyacinth, Toledo      Toledo, Ohio      43607">St. Hyacinth, Toledo      Toledo, Ohio      43607</option>'+
          '<option value="St. Ignatius of Antioch, Cleveland      Cleveland, Ohio      44111-5470">St. Ignatius of Antioch, Cleveland      Cleveland, Ohio      44111-5470</option>'+
          '<option value="St. Ignatius of Loyola, Rogers City      Rogers City, MI      49779">St. Ignatius of Loyola, Rogers City      Rogers City, MI      49779</option>'+
          '<option value="St. Ignatius, San Francisco      San Francisco, CA      94118">St. Ignatius, San Francisco      San Francisco, CA      94118</option>'+
          '<option value="St. James De Chantal, Bethleham      Bethleham, PA">St. James De Chantal, Bethleham      Bethleham, PA</option>'+
          '<option value="St. James the Apostle, Carmel      Carmel, NY">St. James the Apostle, Carmel      Carmel, NY</option>'+
          '<option value="St. James, Lakewood      Lakewood, OH      44107">St. James, Lakewood      Lakewood, OH      44107</option>'+
          '<option value="St. James, Mukwonago      Mukwonago WI      53149">St. James, Mukwonago      Mukwonago WI      53149</option>'+
          '<option value="St. Jane de Chatel, Easton      Easton, PA      18045">St. Jane de Chatel, Easton      Easton, PA      18045</option>'+
          '<option value="St. Jerome, Cleveland      Cleveland, OH      44110-1298">St. Jerome, Cleveland      Cleveland, OH      44110-1298</option>'+
          '<option value="St. Joan Of Arc, Chagrin Falls      Chagrin Falls, OH      44022-2999">St. Joan Of Arc, Chagrin Falls      Chagrin Falls, OH      44022-2999</option>'+
          '<option value="St. Joan of Arc, Evanston      Evanston, IL">St. Joan of Arc, Evanston      Evanston, IL</option>'+
          '<option value="St. Joan Of Arc, Streetsboro      Streetsboro, OH      44241">St. Joan Of Arc, Streetsboro      Streetsboro, OH      44241</option>'+
          '<option value="St. John Bosco, Parma      Parma, OH      44130-2997">St. John Bosco, Parma      Parma, OH      44130-2997</option>'+
          '<option value="St. John Gualbert, Johnstown      Johnstown, PA">St. John Gualbert, Johnstown      Johnstown, PA</option>'+
          '<option value="St. John Lutheran      Garfield hts, OH      44125">St. John Lutheran      Garfield hts, OH      44125</option>'+
          '<option value="St. John Lutheran Church, Roanoke      Roanoke VA      24018">St. John Lutheran Church, Roanoke      Roanoke VA      24018</option>'+
          '<option value="St. John Neiman, Irvine      Irvine, CA">St. John Neiman, Irvine      Irvine, CA</option>'+
          '<option value="St. John Nepomucene, Cleveland      Cleveland, OH      44105-3357">St. John Nepomucene, Cleveland      Cleveland, OH      44105-3357</option>'+
          '<option value="St. John of the Cross, Euclid      Euclid, Ohio      44143">St. John of the Cross, Euclid      Euclid, Ohio      44143</option>'+
          '<option value="St. John Rochester, Fairporn      Fairporn, NY">St. John Rochester, Fairporn      Fairporn, NY</option>'+
          '<option value="St. John the Baptist, Somonauk      Somonauk, IL">St. John the Baptist, Somonauk      Somonauk, IL</option>'+
          '<option value="St. John Vianney, Flint      Flint, MI      48504">St. John Vianney, Flint      Flint, MI      48504</option>'+
          '<option value="St. John Vianney, Mentor      Mentor, Ohio      44060-3997">St. John Vianney, Mentor      Mentor, Ohio      44060-3997</option>'+
          '<option value="St. Joseph Cathedral, Columbus      Columbus, Ohio      43215">St. Joseph Cathedral, Columbus      Columbus, Ohio      43215</option>'+
          '<option value="St. Joseph Church, Richardson      Richardson, TX      75081">St. Joseph Church, Richardson      Richardson, TX      75081</option>'+
          '<option value="St. Joseph, Amherst      Amherst, Ohio      44001">St. Joseph, Amherst      Amherst, Ohio      44001</option>'+
          '<option value="St. Joseph, Cold Spring      Cold Spring, KY      41076-1895">St. Joseph, Cold Spring      Cold Spring, KY      41076-1895</option>'+
          '<option value="St. Joseph, Cuyahoga Falls      Cuyahoga Falls, Ohio      44221">St. Joseph, Cuyahoga Falls      Cuyahoga Falls, Ohio      44221</option>'+
          '<option value="St. Joseph, Dover      Dover Ohio      44622">St. Joseph, Dover      Dover Ohio      44622</option>'+
          '<option value="St. Joseph, Lucinda      Lucinda, Pennsylvania      16235">St. Joseph, Lucinda      Lucinda, Pennsylvania      16235</option>'+
          '<option value="St. Joseph, Mantua      Mantua, OH      44255">St. Joseph, Mantua      Mantua, OH      44255</option>'+
          '<option value="St. Joseph, Maumee      Maumee, OH      43537">St. Joseph, Maumee      Maumee, OH      43537</option>'+
          '<option value="St. Joseph, Port Huron      Port Huron, MI      48060">St. Joseph, Port Huron      Port Huron, MI      48060</option>'+
          '<option value="St. Joseph, South Bend      South Bend, IN      46617">St. Joseph, South Bend      South Bend, IN      46617</option>'+
          '<option value="St. Joseph, Sylvania      Sylvania Ohio      43560">St. Joseph, Sylvania      Sylvania Ohio      43560</option>'+
          '<option value="St. Joseph, Toledo      Toledo, Ohio      43697">St. Joseph, Toledo      Toledo, Ohio      43697</option>'+
          '<option value="St. Jude, Warrensville Hts.      Warrensville Hts., OH      44128-5986">St. Jude, Warrensville Hts.      Warrensville Hts., OH      44128-5986</option>'+
          '<option value="St. Justin Martyr, Eastlake      Eastlake, OH      44095-5095">St. Justin Martyr, Eastlake      Eastlake, OH      44095-5095</option>'+
          '<option value="St. Ladislas, Westlake      Westlake, OH      44145-2999">St. Ladislas, Westlake      Westlake, OH      44145-2999</option>'+
          '<option value="St. Lawrence, Cleveland      Cleveland, Ohio      44105-1521">St. Lawrence, Cleveland      Cleveland, Ohio      44105-1521</option>'+
          '<option value="St. Leo The Great, Cleveland      Cleveland, OH      44109-5799">St. Leo The Great, Cleveland      Cleveland, OH      44109-5799</option>'+
          '<option value="St. Louis, Louisville">St. Louis, Louisville</option>'+
          '<option value="St. Louis, Waco      Waco, TX      76708">St. Louis, Waco      Waco, TX      76708</option>'+
          '<option value="St. Lucy, Middlefield      Middlefield, OH      44062">St. Lucy, Middlefield      Middlefield, OH      44062</option>'+
          '<option value="St. Luke, Lakewood      Lakewood OH      44107">St. Luke, Lakewood      Lakewood OH      44107</option>'+
          '<option value="St. Margaret Mary, S. Euclid      South Euclid, Ohio      44121">St. Margaret Mary, S. Euclid      South Euclid, Ohio      44121</option>'+
          '<option value="St. Mark the Evangelist, Plano      Plano, Texas      75075">St. Mark the Evangelist, Plano      Plano, Texas      75075</option>'+
          '<option value="St. Mark, Cleveland      Cleveland, OH      44111-1084">St. Mark, Cleveland      Cleveland, OH      44111-1084</option>'+
          '<option value="St. Martha, Akron      Akron Ohio">St. Martha, Akron      Akron Ohio</option>'+
          '<option value="St. Martin of Tours, Maple Hts.      Maple Hts., OH      44137-4788">St. Martin of Tours, Maple Hts.      Maple Hts., OH      44137-4788</option>'+
          '<option value="St. Martin Of Tours, Santa Clara      Santa Clara, CA">St. Martin Of Tours, Santa Clara      Santa Clara, CA</option>'+
          '<option value="St. Martin of Tours, Valley City      Valley City, OH      44280">St. Martin of Tours, Valley City      Valley City, OH      44280</option>'+
          '<option value="St. Martin, St. Martin MN      St. Martin, MN      56376">St. Martin, St. Martin MN      St. Martin, MN      56376</option>'+
          '<option value="St. Mary Magdalene, Willowick      Willowick, Ohio      44095-3573">St. Mary Magdalene, Willowick      Willowick, Ohio      44095-3573</option>'+
          '<option value="St. Mary Magdalyn, Columbus      Columbus, OH      43204">St. Mary Magdalyn, Columbus      Columbus, OH      43204</option>'+
          '<option value="St. Mary of Czestochowa, New Kensington      New Kensington, PA      15068-5696">St. Mary of Czestochowa, New Kensington      New Kensington, PA      15068-5696</option>'+
          '<option value="St. Mary of Lourdes, Mayville      Mayville, NY      14757">St. Mary of Lourdes, Mayville      Mayville, NY      14757</option>'+
          '<option value="St. Mary of the Assumption, Cleveland      Cleveland, Ohio      44110">St. Mary of the Assumption, Cleveland      Cleveland, Ohio      44110</option>'+
          '<option value="St. Mary of the Assumption, Mentor      Mentor, Ohio      44060-5853">St. Mary of the Assumption, Mentor      Mentor, Ohio      44060-5853</option>'+
          '<option value="St. Mary of the Falls, Olmsted Falls      Olmsted Falls, OH">St. Mary of the Falls, Olmsted Falls      Olmsted Falls, OH</option>'+
          '<option value="St. Mary of tthe Assumption, Herman      Herman, PA      16039">St. Mary of tthe Assumption, Herman      Herman, PA      16039</option>'+
          '<option value="St. Mary, Bedford      Bedford, Ohio      44146">St. Mary, Bedford      Bedford, Ohio      44146</option>'+
          '<option value="St. Mary, Chardon      Chardon Ohio      44024">St. Mary, Chardon      Chardon Ohio      44024</option>'+
          '<option value="St. Mary, Cincinnati      Cincinnati, Ohio      45208">St. Mary, Cincinnati      Cincinnati, Ohio      45208</option>'+
          '<option value="St. Mary, Cleveland      Cleveland, OH      44110-2497">St. Mary, Cleveland      Cleveland, OH      44110-2497</option>'+
          '<option value="St. Mary, Davenport      Davenport, Iowa      52802">St. Mary, Davenport      Davenport, Iowa      52802</option>'+
          '<option value="St. Mary, Greenville      Greenville, South Carolina">St. Mary, Greenville      Greenville, South Carolina</option>'+
          '<option value="St. Mary, Hudson      Hudson, Ohio      44236">St. Mary, Hudson      Hudson, Ohio      44236</option>'+
          '<option value="St. Mary, Massillon      Massillon, OH      44646">St. Mary, Massillon      Massillon, OH      44646</option>'+
          '<option value="St. Mary, Mayville      Mayville, NY      14757">St. Mary, Mayville      Mayville, NY      14757</option>'+
          '<option value="St. Mary, Mentor      Mentor, OH      44060">St. Mary, Mentor      Mentor, OH      44060</option>'+
          '<option value="St. Mary, Montrose      Montrose, Colorado      81401">St. Mary, Montrose      Montrose, Colorado      81401</option>'+
          '<option value="St. Mary, Orwell      Orwell, Ohio      44076">St. Mary, Orwell      Orwell, Ohio      44076</option>'+
          '<option value="St. Mary, Ottawa      Ottawa, IL      61350">St. Mary, Ottawa      Ottawa, IL      61350</option>'+
          '<option value="St. Mary, Painesville      Painesville Ohio      44077">St. Mary, Painesville      Painesville Ohio      44077</option>'+
          '<option value="St. Mary, Shrewsbury      Shrewsbury, MA      01545">St. Mary, Shrewsbury      Shrewsbury, MA      01545</option>'+
          '<option value="St. Mary, St. Clairsville OH      St. Clairsville, Ohio      43950">St. Mary, St. Clairsville OH      St. Clairsville, Ohio      43950</option>'+
          '<option value="St. Mary, Swormville      Swormville, NY      14051">St. Mary, Swormville      Swormville, NY      14051</option>'+
          '<option value="St. Matthew, Glendale Hts.      Glendale Hts., IL      60139">St. Matthew, Glendale Hts.      Glendale Hts., IL      60139</option>'+
          '<option value="St. Mel, Cleveland      Cleveland Ohio      44111">St. Mel, Cleveland      Cleveland Ohio      44111</option>'+
          '<option value="St. Michael, Belvue      Belvue, Ohio">St. Michael, Belvue      Belvue, Ohio</option>'+
          '<option value="St. Michael, Independence      Cleveland, OH      44131">St. Michael, Independence      Cleveland, OH      44131</option>'+
          '<option value="St. Monica, Duluth      Duluth, GA      30097">St. Monica, Duluth      Duluth, GA      30097</option>'+
          '<option value="St. Monica, Garfield Hts.      Garfield Hts., OH      44125-5197">St. Monica, Garfield Hts.      Garfield Hts., OH      44125-5197</option>'+
          '<option value="St. Nicholas Byzantine, Cleveland      Cleveland, Ohio      44114">St. Nicholas Byzantine, Cleveland      Cleveland, Ohio      44114</option>'+
          '<option value="St. Noel, Willoughby Hills      Willoughby Hills, OH      44094-9193">St. Noel, Willoughby Hills      Willoughby Hills, OH      44094-9193</option>'+
          '<option value="St. Paschal Baylon, Highland Hts.      Highland Hts., OH      44143-3092">St. Paschal Baylon, Highland Hts.      Highland Hts., OH      44143-3092</option>'+
          '<option value="St. Patrick      Kent, OH">St. Patrick      Kent, OH</option>'+
          '<option value="St. Patrick, Ann Arbor      Ann Arbor, MI      48105">St. Patrick, Ann Arbor      Ann Arbor, MI      48105</option>'+
          '<option value="St. Patrick, Cleveland      Cleveland, OH      44113">St. Patrick, Cleveland      Cleveland, OH      44113</option>'+
          '<option value="St. Patrick, Cleveland      Cleveland, OH      44135">St. Patrick, Cleveland      Cleveland, OH      44135</option>'+
          '<option value="St. Patrick, Leetonia      Leetonia, OH">St. Patrick, Leetonia      Leetonia, OH</option>'+
          '<option value="St. Patrick, Ottawa      Ottawa, IL      61350">St. Patrick, Ottawa      Ottawa, IL      61350</option>'+
          '<option value="St. Patrick, Thompson      Thompson, OH      44086">St. Patrick, Thompson      Thompson, OH      44086</option>'+
          '<option value="St. Patrick, Wisconsin      Onalaska, WI">St. Patrick, Wisconsin      Onalaska, WI</option>'+
          '<option value="St. Patrick, Youngstown      Kinsman, Ohio      44428">St. Patrick, Youngstown      Kinsman, Ohio      44428</option>'+
          '<option value="St. Paul Croatian, Cleveland      Cleveland, Ohio      44103">St. Paul Croatian, Cleveland      Cleveland, Ohio      44103</option>'+
          '<option value="St. Paul the Apostle Church, Davenport, IA      Davenport, IA">St. Paul the Apostle Church, Davenport, IA      Davenport, IA</option>'+
          '<option value="St. Paul, Euclid      Euclid, OH      44117-1192">St. Paul, Euclid      Euclid, OH      44117-1192</option>'+
          '<option value="St. Paul, Euclid      Euclid, Ohio      44143">St. Paul, Euclid      Euclid, Ohio      44143</option>'+
          '<option value="St. Peter and Paul, Garfield Hts.      Garfield Heights, OH">St. Peter and Paul, Garfield Hts.      Garfield Heights, OH</option>'+
          '<option value="St. Peter Cathedral      Erie, PA">St. Peter Cathedral      Erie, PA</option>'+
          '<option value="St. Peter Parish, Skokie      Skokie, IL      60077">St. Peter Parish, Skokie      Skokie, IL      60077</option>'+
          '<option value="St. Peter the Apostle, Boerne      Boerne, TX      78006">St. Peter the Apostle, Boerne      Boerne, TX      78006</option>'+
          '<option value="St. Peter the Apostle, Brook Park      Brook Park, OH      44142-3503">St. Peter the Apostle, Brook Park      Brook Park, OH      44142-3503</option>'+
          '<option value="St. Peter, Cleveland      Cleveland, Ohio">St. Peter, Cleveland      Cleveland, Ohio</option>'+
          '<option value="St. Peter, Spring Grove      Spring Grove, IL 60081">St. Peter, Spring Grove      Spring Grove, IL 60081</option>'+
          '<option value="St. Philomena, E. Cleveland      East Cleveland, Ohio      44112">St. Philomena, E. Cleveland      East Cleveland, Ohio      44112</option>'+
          '<option value="St. Pius X, Bedford      Bedford, OH      44146-2296">St. Pius X, Bedford      Bedford, OH      44146-2296</option>'+
          '<option value="St. Pius X, Warren      Warren, Ohio      44485">St. Pius X, Warren      Warren, Ohio      44485</option>'+
          '<option value="St. Raphael, Bay Village      Bay Village, OH      44140-2366">St. Raphael, Bay Village      Bay Village, OH      44140-2366</option>'+
          '<option value="St. Richard, North Olmsted      North Olmsted, OH      44070-3260">St. Richard, North Olmsted      North Olmsted, OH      44070-3260</option>'+
          '<option value="St. Rita, Solon      Solon, OH      44139-4098">St. Rita, Solon      Solon, OH      44139-4098</option>'+
          '<option value="St. Robert Bellarmine, Euclid      Euclid, OH      44123-1200">St. Robert Bellarmine, Euclid      Euclid, OH      44123-1200</option>'+
          '<option value="St. Robert of Newminster, Ada      Ada, MI">St. Robert of Newminster, Ada      Ada, MI</option>'+
          '<option value="St. Roch, Indianapolis      Indianapolis IN      46227">St. Roch, Indianapolis      Indianapolis IN      46227</option>'+
          '<option value="St. Rose of Lima, Cleveland      Cleveland, OH      44102-2399">St. Rose of Lima, Cleveland      Cleveland, OH      44102-2399</option>'+
          '<option value="St. Rose, Girard      Girard,OH">St. Rose, Girard      Girard,OH</option>'+
          '<option value="St. Sebastian, Akron      Akron, OH      44320">St. Sebastian, Akron      Akron, OH      44320</option>'+
          '<option value="St. Sebastian, Ft. Lauderdale      Ft. Lauderdale, FL.      33316-3299">St. Sebastian, Ft. Lauderdale      Ft. Lauderdale, FL.      33316-3299</option>'+
          '<option value="St. Stanislaus, Cleveland      Cleveland, OH      44105-1293">St. Stanislaus, Cleveland      Cleveland, OH      44105-1293</option>'+
          '<option value="St. Stephen, Cleveland      Cleveland      44102">St. Stephen, Cleveland      Cleveland      44102</option>'+
          '<option value="St. Stephen, New Boston      New Boston, MI">St. Stephen, New Boston      New Boston, MI</option>'+
          '<option value="St. Stephen, Riverview      Riverview, FL      33569">St. Stephen, Riverview      Riverview, FL      33569</option>'+
          '<option value="St. Stephen, West Salem      West Salem, Ohio      44287">St. Stephen, West Salem      West Salem, Ohio      44287</option>'+
          '<option value="St. Sussana, Mason      Mason, Ohio      45050">St. Sussana, Mason      Mason, Ohio      45050</option>'+
          '<option value="St. Therese, Garfield Hts.      Garfield Hts.,  OH      44125-2698">St. Therese, Garfield Hts.      Garfield Hts.,  OH      44125-2698</option>'+
          '<option value="St. Thomas Aquinas, IA      Ames, IA      50014">St. Thomas Aquinas, IA      Ames, IA      50014</option>'+
          '<option value="St. Thomas Aquinas, IO      Ames, IA      50014">St. Thomas Aquinas, IO      Ames, IA      50014</option>'+
          '<option value="St. Thomas More, Brookings      Brookings, SD      57006">St. Thomas More, Brookings      Brookings, SD      57006</option>'+
          '<option value="St. Thomas More, Brooklyn OH      Brooklyn, OH      44144">St. Thomas More, Brooklyn OH      Brooklyn, OH      44144</option>'+
          '<option value="St. Thomas the Apostle, Crystal Lake      Crystal Lake, IL      60014">St. Thomas the Apostle, Crystal Lake      Crystal Lake, IL      60014</option>'+
          '<option value="St. Timothy, Garfield Hts.      Garfield Hts., OH">St. Timothy, Garfield Hts.      Garfield Hts., OH</option>'+
          '<option value="St. Vincent de Paul, Akron      Akron, OH      44303">St. Vincent de Paul, Akron      Akron, OH      44303</option>'+
          '<option value="St. Vincent de Paul, Cleveland      Cleveland, Ohio      44111">St. Vincent de Paul, Cleveland      Cleveland, Ohio      44111</option>'+
          '<option value="St. Vincent de Paul, Elyria      Elyria, OH      44035">St. Vincent de Paul, Elyria      Elyria, OH      44035</option>'+
          '<option value="St. Vincent, Vienna      Vienna, Ohio      44473">St. Vincent, Vienna      Vienna, Ohio      44473</option>'+
          '<option value="St. Vitus, Cleveland      Cleveland, Ohio      44103">St. Vitus, Cleveland      Cleveland, Ohio      44103</option>'+
          '<option value="St. Walter, Roselle      Roselle, IL">St. Walter, Roselle      Roselle, IL</option>'+
          '<option value="St. Wenceslas, Maple Hts.      Maple Hts., OH      44137-1598">St. Wenceslas, Maple Hts.      Maple Hts., OH      44137-1598</option>'+
          '<option value="St. William, Euclid      Euclid, OH      44132-1495">St. William, Euclid      Euclid, OH      44132-1495</option>'+
          '<option value="Sts. Cyril &amp; Methodius, Lakewood      Lakewood, OH      44107-4997">Sts. Cyril &amp; Methodius, Lakewood      Lakewood, OH      44107-4997</option>'+
          '<option value="Sts. Peter and Paul, Garfield Hts.      Garfield Hts">Sts. Peter and Paul, Garfield Hts.      Garfield Hts</option>'+
          '<option value="Sts. Peter and Paul, Hamburg      Hamburg, NY      14075-5059">Sts. Peter and Paul, Hamburg      Hamburg, NY      14075-5059</option>'+
          '<option value="Sts. Phillips &amp; James Church, Cleveland      Cleveland, OH      44111">Sts. Phillips &amp; James Church, Cleveland      Cleveland, OH      44111</option>'+
          '<option value="Sts. Robert and William, Euclid      Euclid, Ohio      44132">Sts. Robert and William, Euclid      Euclid, Ohio      44132</option>'+
          '<option value="The Church of the Good Shepherd, Cumming, GA      Cumming, GA      30041">The Church of the Good Shepherd, Cumming, GA      Cumming, GA      30041</option>'+
          '<option value="Transfiguration, Lakewood      Lakewood, Ohio      44107">Transfiguration, Lakewood      Lakewood, Ohio      44107</option>'+
          '<option value="Tribunal Cleveland, Ohio      Cleveland Ohio      44114">Tribunal Cleveland, Ohio      Cleveland Ohio      44114</option>'+
          '<option value="Trinity English Luthern Church      Fort Wayne, IN">Trinity English Luthern Church      Fort Wayne, IN</option>'+
          '<option value="United Methodist Church Chagrin Falls      Chagrin Falls, Ohio">United Methodist Church Chagrin Falls      Chagrin Falls, Ohio</option>'+
          '<option value="USAG Chapel      Wiesbader">USAG Chapel      Wiesbader</option>'+
          '<option value="Valley Lutheran      Chagrin Falls, Oh">Valley Lutheran      Chagrin Falls, Oh</option>'+
          '<option value="Virger del Carmen      Villahermosa, Tabasco">Virger del Carmen      Villahermosa, Tabasco</option>'+
          '<option value="Vogelweh Chapel &quot;Military Orinariate&quot;      New York 22., New York">Vogelweh Chapel &quot;Military Orinariate&quot;      New York 22., New York</option>'+
          '<option value="Willoughby, United Methodist">Willoughby, United Methodist</option>'+
          '</select>';
        formTabIndex = formTabIndex + 1;
        var tr14 = document.createElement('tr');
        tr14.setAttribute('name', 'tr14'+memNum);
        tr14.setAttribute('id', 'tr14'+memNum);
        mainTableBody.appendChild(tr14);
        tr14.insertCell(0).innerHTML = '<td></td>';
        tr14.insertCell(1).innerHTML = '<td></td>';
        var td14 = document.createElement('td');
        td14.setAttribute('id', 'td14'+memNum);
        td14.setAttribute('colspan', '2');
        tr14.appendChild(td14);
        td14.innerHTML = '<span class="lbl">&nbsp;&nbsp;&nbsp;Confirm</span><input type="hidden" name="txaMem'+memNum+'Sac3Name" id="txaMem'+memNum+'Sac3Name" value="Confirm" />';
        var td15 = document.createElement('td');
        td15.setAttribute('id', 'td15'+memNum);
        td15.setAttribute('colspan', '1');
        tr14.appendChild(td15);
        td15.innerHTML = ' <select tabindex="205" name="cboMem'+memNum+'Sac3" id="cboMem'+memNum+'Sac3" class="pulldownstyle"><option value="" /><option value="Yes">Yes</option><option value="No">No</option></select>';
        var td16 = document.createElement('td');
        td16.setAttribute('id', 'td16'+memNum);
        td16.setAttribute('colspan', '1');
        tr14.appendChild(td16);
        td16.innerHTML = '<input tabindex="'+(formTabIndex+1)+'" style="width:100px" autocomplete="off" value="mm/dd/yyyy" title="enter the confirm date" name="dteMem'+memNum+'Sac3Date" id="dteMem'+memNum+'Sac3Date" maxlength="10" onkeydown="onKeyPressed(event, this);" onFocus="this.select()" class="textboxstyle dateInput" onchange="checkDate(this.id)" onkeyup="DoKeyUp(this)" />';
        calendar.set('dteMem'+memNum+'Sac3Date');
        formTabIndex = formTabIndex + 1;
        var td17 = document.createElement('td');
        td17.setAttribute('id', 'td17'+memNum);
        td17.setAttribute('colspan', '2');
        tr14.appendChild(td17);
        td17.innerHTML = 
          '<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Sac3Place" id="cboMem'+memNum+'Sac3Place" title="Select a place in the pull down list" style="width: 166px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Bethany Covenant Church, Lyndhurst      Lyndhurst, Oh.">Bethany Covenant Church, Lyndhurst      Lyndhurst, Oh.</option>'+
          '<option value="Blessed Sacrament, Valley Stream, NY      Valley Stream, NY      11580">Blessed Sacrament, Valley Stream, NY      Valley Stream, NY      11580</option>'+
          '<option value="Blessed Sacrament, Warren      Warren Ohio      44483">Blessed Sacrament, Warren      Warren Ohio      44483</option>'+
          '<option value="Blessed Trinity, Cleveland      Cleveland, Ohio 44135">Blessed Trinity, Cleveland      Cleveland, Ohio 44135</option>'+
          '<option value="Braceville Community Church, Newton Falls      Newton Falls, Ohio">Braceville Community Church, Newton Falls      Newton Falls, Ohio</option>'+
          '<option value="Burton Congregational Church      Burton, OH      44021">Burton Congregational Church      Burton, OH      44021</option>'+
          '<option value="Cathedral Basilica of St. Peter in Chains, Cincinnati      Lebanon, OH      45036">Cathedral Basilica of St. Peter in Chains, Cincinnati      Lebanon, OH      45036</option>'+
          '<option value="Cathedral of Christ the King, Lexington      Lexington, KY      40502-2322">Cathedral of Christ the King, Lexington      Lexington, KY      40502-2322</option>'+
          '<option value="Cathedral of St. John the Evangelist, Cleveland      Cleveland, Ohio      44114-2582">Cathedral of St. John the Evangelist, Cleveland      Cleveland, Ohio      44114-2582</option>'+
          '<option value="Christ the King, Akron      Akron Ohio      44310">Christ the King, Akron      Akron Ohio      44310</option>'+
          '<option value="Christ the King, Cleveland      East Cleveland, OH      44112-1636">Christ the King, Cleveland      East Cleveland, OH      44112-1636</option>'+
          '<option value="Christ The King, Las Vegas      Las Vegas, NV      89118">Christ The King, Las Vegas      Las Vegas, NV      89118</option>'+
          '<option value="Church of Annunciation, Cleveland      Cleveland, OH      44135">Church of Annunciation, Cleveland      Cleveland, OH      44135</option>'+
          '<option value="Church of Beloved Disciple, Grove City      Grove City, PA      16127">Church of Beloved Disciple, Grove City      Grove City, PA      16127</option>'+
          '<option value="Church of St. Anthony, Joliet      Joliet, IL      60432-4210">Church of St. Anthony, Joliet      Joliet, IL      60432-4210</option>'+
          '<option value="Church of St. Mary and St. Joseph, Newton Falls      Newton Falls, Ohio      44444">Church of St. Mary and St. Joseph, Newton Falls      Newton Falls, Ohio      44444</option>'+
          '<option value="Church of the Assumption, Broadview Hts.      Broadview Heights, Ohio      44147">Church of the Assumption, Broadview Hts.      Broadview Heights, Ohio      44147</option>'+
          '<option value="Church of the Blessed Sacrament, Warren      Warren Ohio      44483">Church of the Blessed Sacrament, Warren      Warren Ohio      44483</option>'+
          '<option value="Church of the Incarnation, Centerville      Centerville, Ohio      45459">Church of the Incarnation, Centerville      Centerville, Ohio      45459</option>'+
          '<option value="Church Of The Resurection, New Albany      New Albany, Ohio">Church Of The Resurection, New Albany      New Albany, Ohio</option>'+
          '<option value="Communion of Saints, Cleveland Hts.      Cleveland Heights, Ohio      44118">Communion of Saints, Cleveland Hts.      Cleveland Heights, Ohio      44118</option>'+
          '<option value="Curch of the Annunciation, Cleveland      Cleveland, Ohio      44135">Curch of the Annunciation, Cleveland      Cleveland, Ohio      44135</option>'+
          '<option value="Divine Word, Kirtland      Kirtland, OH      44094-9714">Divine Word, Kirtland      Kirtland, OH      44094-9714</option>'+
          '<option value="First Congregational Church of Claridon      Chardon, OH      44024">First Congregational Church of Claridon      Chardon, OH      44024</option>'+
          '<option value="First Presbyterian, East Cleveland      East cleveland ohio">First Presbyterian, East Cleveland      East cleveland ohio</option>'+
          '<option value="Germany">Germany</option>'+
          '<option value="Gesu, Universtiy Hts.      University Hts., OH      44118-3896">Gesu, Universtiy Hts.      University Hts., OH      44118-3896</option>'+
          '<option value="Holy Angels, Chagrin Falls      Chagrin Falls,  OH      44023-4879">Holy Angels, Chagrin Falls      Chagrin Falls,  OH      44023-4879</option>'+
          '<option value="Holy Cross, Euclid      Euclid, OH      44119-1066">Holy Cross, Euclid      Euclid, OH      44119-1066</option>'+
          '<option value="Holy Family Parish (Archives)      Cleveland, Ohio      44114">Holy Family Parish (Archives)      Cleveland, Ohio      44114</option>'+
          '<option value="Holy Family, Endwell      Endwell, NY      13760">Holy Family, Endwell      Endwell, NY      13760</option>'+
          '<option value="Holy Family, Parma      Parma, OH      44130">Holy Family, Parma      Parma, OH      44130</option>'+
          '<option value="Holy Family, Stow      Stow, OH      44224">Holy Family, Stow      Stow, OH      44224</option>'+
          '<option value="Holy Name, Cleveland      Cleveland, OH">Holy Name, Cleveland      Cleveland, OH</option>'+
          '<option value="Holy Redeemer, Cleveland      Cleveland, OH      44110-3104">Holy Redeemer, Cleveland      Cleveland, OH      44110-3104</option>'+
          '<option value="Holy Rosary, Cleveland      Cleveland, OH      44106-1996">Holy Rosary, Cleveland      Cleveland, OH      44106-1996</option>'+
          '<option value="Holy Trinity, Avon      Avon, Ohio      44011">Holy Trinity, Avon      Avon, Ohio      44011</option>'+
          '<option value="Holy Trinity, Bedford Hts.      Bedford Hts., OH      44146-2599">Holy Trinity, Bedford Hts.      Bedford Hts., OH      44146-2599</option>'+
          '<option value="Immaculate Conception Church Madison      Madison Ohio">Immaculate Conception Church Madison      Madison Ohio</option>'+
          '<option value="Immaculate Conception, Bellevue      Bellevue, OH      44811">Immaculate Conception, Bellevue      Bellevue, OH      44811</option>'+
          '<option value="Immaculate Conception, Cleveland      Cleveland, OH      44103-1179">Immaculate Conception, Cleveland      Cleveland, OH      44103-1179</option>'+
          '<option value="Immaculate Conception, Durham      Durham, NC      27701">Immaculate Conception, Durham      Durham, NC      27701</option>'+
          '<option value="Immaculate Conception, Willoughby      Willoughby, Ohio">Immaculate Conception, Willoughby      Willoughby, Ohio</option>'+
          '<option value="Immaculate Heart of Mary, Cuyahoga Falls      Cuyahoga Falls, Ohio      44223">Immaculate Heart of Mary, Cuyahoga Falls      Cuyahoga Falls, Ohio      44223</option>'+
          '<option value="King of Kings Evangelical Lutheran Church, Willoughby      Willoughby, Ohio      44094-7570">King of Kings Evangelical Lutheran Church, Willoughby      Willoughby, Ohio      44094-7570</option>'+
          '<option value="Lake Shore Christian Church, Cleveland      Cleveland, OH      44132">Lake Shore Christian Church, Cleveland      Cleveland, OH      44132</option>'+
          '<option value="Lord of Life Lutheran Church, Chagrin Falls      Chagrin Falls, Ohio      44023">Lord of Life Lutheran Church, Chagrin Falls      Chagrin Falls, Ohio      44023</option>'+
          '<option value="Mariapoch Shrine, Burton      Burton, OH      44021">Mariapoch Shrine, Burton      Burton, OH      44021</option>'+
          '<option value="Mary Queen of Peace, Cleveland      Cleveland, Ohio      44109">Mary Queen of Peace, Cleveland      Cleveland, Ohio      44109</option>'+
          '<option value="Most Holy Trinity Church, Chesterland      Chesterland">Most Holy Trinity Church, Chesterland      Chesterland</option>'+
          '<option value="Mother of Mercy, Washington NC      Washington, NC      27889">Mother of Mercy, Washington NC      Washington, NC      27889</option>'+
          '<option value="Mother of Sorrows, Peninsula      Peninsula, Ohio      44264">Mother of Sorrows, Peninsula      Peninsula, Ohio      44264</option>'+
          '<option value="Nativity of Our Lord Church, Orchard Park      Orchard Park, NY      14127">Nativity of Our Lord Church, Orchard Park      Orchard Park, NY      14127</option>'+
          '<option value="Nativity of the Blessed Virgin Mary, South Amherst      South Amherst, OH      44001">Nativity of the Blessed Virgin Mary, South Amherst      South Amherst, OH      44001</option>'+
          '<option value="Newton Falls United Methodist      Newton Falls, Ohio">Newton Falls United Methodist      Newton Falls, Ohio</option>'+
          '<option value="North American Martyrs Church, Monroville      Monroville, PA">North American Martyrs Church, Monroville      Monroville, PA</option>'+
          '<option value="Other">Other</option>'+
          '<option value="Our Lady Chapel/Gilmour, Gates Mills      Gates Mills,  Ohio      44040">Our Lady Chapel/Gilmour, Gates Mills      Gates Mills,  Ohio      44040</option>'+
          '<option value="Our Lady Of Good Council, Cleveland      Cleveland, OH      44109">Our Lady Of Good Council, Cleveland      Cleveland, OH      44109</option>'+
          '<option value="Our Lady Of Grace, Hickley      Hickley, OH      44233">Our Lady Of Grace, Hickley      Hickley, OH      44233</option>'+
          '<option value="Our Lady Of Guadalupe, Macedonia      Macedonia, OH      44056-1450">Our Lady Of Guadalupe, Macedonia      Macedonia, OH      44056-1450</option>'+
          '<option value="Our Lady Of Hope, Bedford      Bedford, Ohio      44146">Our Lady Of Hope, Bedford      Bedford, Ohio      44146</option>'+
          '<option value="Our Lady Of Loreto, Ft. Rucker      Ft. Rucker, AL">Our Lady Of Loreto, Ft. Rucker      Ft. Rucker, AL</option>'+
          '<option value="Our Lady Of Lourdes, Cleveland      Cleveland, OH      44127-1692">Our Lady Of Lourdes, Cleveland      Cleveland, OH      44127-1692</option>'+
          '<option value="Our Lady Of Lourdes, Genoa      Genoa, OH">Our Lady Of Lourdes, Genoa      Genoa, OH</option>'+
          '<option value="Our Lady Of Mount Carmel, Ashtabula      Ashtabula, Ohio      44004">Our Lady Of Mount Carmel, Ashtabula      Ashtabula, Ohio      44004</option>'+
          '<option value="Our Lady Of Mount Carmel, Cleveland      Cleveland      44102">Our Lady Of Mount Carmel, Cleveland      Cleveland      44102</option>'+
          '<option value="Our Lady Of Mt. Carmel, Wickliffe      Wickliffe, OH      44092-1896">Our Lady Of Mt. Carmel, Wickliffe      Wickliffe, OH      44092-1896</option>'+
          '<option value="Our Lady Of Peace, Cleveland      Cleveland, Ohio      44120">Our Lady Of Peace, Cleveland      Cleveland, Ohio      44120</option>'+
          '<option value="Our Lady Of Perpetual Help, Aurora      Aurora, OH      44202">Our Lady Of Perpetual Help, Aurora      Aurora, OH      44202</option>'+
          '<option value="Our Lady Of Perpetual Help, Cleveland      Cleveland Ohio      44119">Our Lady Of Perpetual Help, Cleveland      Cleveland Ohio      44119</option>'+
          '<option value="Our Lady Of Sorrows, Vestal      Vestal, NY">Our Lady Of Sorrows, Vestal      Vestal, NY</option>'+
          '<option value="Our Lady Of The Lake, Edinboro      Edinboro, PA">Our Lady Of The Lake, Edinboro      Edinboro, PA</option>'+
          '<option value="Our Lady of the Lakes, Euclid      Euclid, OH      44119">Our Lady of the Lakes, Euclid      Euclid, OH      44119</option>'+
          '<option value="Our Lady of the Lakes, Waterford      Waterford, MI      48329">Our Lady of the Lakes, Waterford      Waterford, MI      48329</option>'+
          '<option value="Our Lady\'s Immaculate Heart, Ankeny      Ankeny, IA">Our Lady\'s Immaculate Heart, Ankeny      Ankeny, IA</option>'+
          '<option value="Parroquia De Corpus Christi      Queretaro, Queretaro">Parroquia De Corpus Christi      Queretaro, Queretaro</option>'+
          '<option value="Peace Lutheran Church, Chardon      Chardon Ohio      44024">Peace Lutheran Church, Chardon      Chardon Ohio      44024</option>'+
          '<option value="Port Alfred Christian Centre      Port Alfred">Port Alfred Christian Centre      Port Alfred</option>'+
          '<option value="Redeemer Lutheran, Cuyahoga Falls      Cuyahoga Falls, OH      44221">Redeemer Lutheran, Cuyahoga Falls      Cuyahoga Falls, OH      44221</option>'+
          '<option value="Resurrection of Our Lord, Solon      Solon, OH      44139">Resurrection of Our Lord, Solon      Solon, OH      44139</option>'+
          '<option value="Resurrection Parish, Lexington      Lexington, Ohio      44904">Resurrection Parish, Lexington      Lexington, Ohio      44904</option>'+
          '<option value="Riverwood Community Chapel">Riverwood Community Chapel</option>'+
          '<option value="Sacred Heart of Jesus, S. Euclid      South Euclid, Ohio      44121-4085">Sacred Heart of Jesus, S. Euclid      South Euclid, Ohio      44121-4085</option>'+
          '<option value="Sacred Heart, Cullman      Cullman, Alabama">Sacred Heart, Cullman      Cullman, Alabama</option>'+
          '<option value="Sacred Heart, Malden      Malden, MA">Sacred Heart, Malden      Malden, MA</option>'+
          '<option value="Sacred Heart, Rock Creek      Rock Creek, OH      44084">Sacred Heart, Rock Creek      Rock Creek, OH      44084</option>'+
          '<option value="San Pedro Alcantara, Namiquipa, Chih.">San Pedro Alcantara, Namiquipa, Chih.</option>'+
          '<option value="St Anselm      Chesterland, OH">St Anselm      Chesterland, OH</option>'+
          '<option value="St Jude Thadeus      Trece Martires City">St Jude Thadeus      Trece Martires City</option>'+
          '<option value="St. Adelbert, Berea      Berea, OH      44017">St. Adelbert, Berea      Berea, OH      44017</option>'+
          '<option value="St. Agnes, Cleveland      Cleveland">St. Agnes, Cleveland      Cleveland</option>'+
          '<option value="St. Albert the Great, Kettering      Kettering, OH      45429">St. Albert the Great, Kettering      Kettering, OH      45429</option>'+
          '<option value="St. Alexander, Palos Hts.      Palos Heights, Illinois      60463">St. Alexander, Palos Hts.      Palos Heights, Illinois      60463</option>'+
          '<option value="St. Alphonsus, Davenport      Davenport, Iowa      52802">St. Alphonsus, Davenport      Davenport, Iowa      52802</option>'+
          '<option value="St. Ambrose, Brunswick      Brunswick, OH      44212">St. Ambrose, Brunswick      Brunswick, OH      44212</option>'+
          '<option value="St. Ambrose, Garrettsville      Garrettsville, OH      44231">St. Ambrose, Garrettsville      Garrettsville, OH      44231</option>'+
          '<option value="St. Ambrose, Hollywood      Hollywood, CA      90046">St. Ambrose, Hollywood      Hollywood, CA      90046</option>'+
          '<option value="St. Ambrose, Seymour      Seymour, Indiana      47274">St. Ambrose, Seymour      Seymour, Indiana      47274</option>'+
          '<option value="St. Andrew, Kingsville      Kingsville, Ohio      44048">St. Andrew, Kingsville      Kingsville, Ohio      44048</option>'+
          '<option value="St. Ann, Hiawatha      Hiawatha, KS">St. Ann, Hiawatha      Hiawatha, KS</option>'+
          '<option value="St. Ann, Marietta      Marietta,GA      30062">St. Ann, Marietta      Marietta,GA      30062</option>'+
          '<option value="St. Anselm, Chesterland      Chesterland, OH      44026-3199">St. Anselm, Chesterland      Chesterland, OH      44026-3199</option>'+
          '<option value="St. Anthony of Padua, Akron      Akron, OH      44310-3184">St. Anthony of Padua, Akron      Akron, OH      44310-3184</option>'+
          '<option value="St. Anthony of Padua, Fairport Harbor      Fairport Harbor, OH      44077-5696">St. Anthony of Padua, Fairport Harbor      Fairport Harbor, OH      44077-5696</option>'+
          '<option value="St. Anthony of Padua, Parma      Parma, OH      44134-4518">St. Anthony of Padua, Parma      Parma, OH      44134-4518</option>'+
          '<option value="St. Anthony of Padua, San Antonio      San Antonio, FL      33576">St. Anthony of Padua, San Antonio      San Antonio, FL      33576</option>'+
          '<option value="St. Augustine, Milwaukee      Milwaukee, WI      53207">St. Augustine, Milwaukee      Milwaukee, WI      53207</option>'+
          '<option value="St. Barnabas, Northfield      Northfield, OH      44067-2499">St. Barnabas, Northfield      Northfield, OH      44067-2499</option>'+
          '<option value="St. Bartholomew, Middleburg Hts.      Middleburg Heights, Ohio      44130">St. Bartholomew, Middleburg Hts.      Middleburg Heights, Ohio      44130</option>'+
          '<option value="St. Basil the Great, Brecksville      Brecksville, Ohio      44141">St. Basil the Great, Brecksville      Brecksville, Ohio      44141</option>'+
          '<option value="St. Bede the Venerable, Mentor      Mentor, OH      44060-1697">St. Bede the Venerable, Mentor      Mentor, OH      44060-1697</option>'+
          '<option value="St. Bernadette, Westlake      Westlake, OH      44145-4328">St. Bernadette, Westlake      Westlake, OH      44145-4328</option>'+
          '<option value="St. Bernard of Clairvaux, Cincinnati      Cincinnati, OH      45247">St. Bernard of Clairvaux, Cincinnati      Cincinnati, OH      45247</option>'+
          '<option value="St. Bernard, Akron      Akron, OH      44308">St. Bernard, Akron      Akron, OH      44308</option>'+
          '<option value="St. Boniface, Erie      Erie, PA      16509">St. Boniface, Erie      Erie, PA      16509</option>'+
          '<option value="St. Boniface, Lafayette      Lafayette, Indiana">St. Boniface, Lafayette      Lafayette, Indiana</option>'+
          '<option value="St. Brigid, San Antonio      San Antonio, TX      78240">St. Brigid, San Antonio      San Antonio, TX      78240</option>'+
          '<option value="St. Casimir, Cleveland      Cleveland, OH      44103">St. Casimir, Cleveland      Cleveland, OH      44103</option>'+
          '<option value="St. Catherine, Cleveland">St. Catherine, Cleveland</option>'+
          '<option value="St. Catherine, Crescent      Crescent, PA 15046">St. Catherine, Crescent      Crescent, PA 15046</option>'+
          '<option value="St. Cecelia,      Rochester, PA      15074">St. Cecelia,      Rochester, PA      15074</option>'+
          '<option value="St. Cecelia, Cleveland      Cleveland, OH">St. Cecelia, Cleveland      Cleveland, OH</option>'+
          '<option value="St. Cecelia, Rochester      Rochester, PA.">St. Cecelia, Rochester      Rochester, PA.</option>'+
          '<option value="St. Cecelia, Rochester PA">St. Cecelia, Rochester PA</option>'+
          '<option value="St. Cecilia">St. Cecilia</option>'+
          '<option value="St. Cecilia, Boston      Boston, Massachusetts      02115">St. Cecilia, Boston      Boston, Massachusetts      02115</option>'+
          '<option value="St. Charles Borromeo, Parma      Parma, OH">St. Charles Borromeo, Parma      Parma, OH</option>'+
          '<option value="St. Charles Borromeo, Youngstown      Youngstown, Ohio">St. Charles Borromeo, Youngstown      Youngstown, Ohio</option>'+
          '<option value="St. Christine, Euclid      Euclid, OH      44123-3317">St. Christine, Euclid      Euclid, OH      44123-3317</option>'+
          '<option value="St. Christopher by the River, Gates Mills      Gates Mills, OH">St. Christopher by the River, Gates Mills      Gates Mills, OH</option>'+
          '<option value="St. Christopher, Rocky River      Rocky River, OH">St. Christopher, Rocky River      Rocky River, OH</option>'+
          '<option value="St. Clare, Lyndhurst      Lyndhurst, OH      44124-2915">St. Clare, Lyndhurst      Lyndhurst, OH      44124-2915</option>'+
          '<option value="St. Clement, Calhoun      Calhoun, GA">St. Clement, Calhoun      Calhoun, GA</option>'+
          '<option value="St. Clement, Lakewood      Lakewood, OH      44107">St. Clement, Lakewood      Lakewood, OH      44107</option>'+
          '<option value="St. Colman, Cleveland      Cleveland, Ohio      44102">St. Colman, Cleveland      Cleveland, Ohio      44102</option>'+
          '<option value="St. Columba Cathedral, Youngstown      Youngstown Ohio">St. Columba Cathedral, Youngstown      Youngstown Ohio</option>'+
          '<option value="St. Columba, Ottowa      Ottawa, IL      61350">St. Columba, Ottowa      Ottawa, IL      61350</option>'+
          '<option value="St. Columban, Loveland      Loveland, Ohio">St. Columban, Loveland      Loveland, Ohio</option>'+
          '<option value="St. Columbkille, Parma      Parma, OH      44134-4898">St. Columbkille, Parma      Parma, OH      44134-4898</option>'+
          '<option value="St. Cosmos and Damien, Twinsburg      Twinsburg, OH      44087">St. Cosmos and Damien, Twinsburg      Twinsburg, OH      44087</option>'+
          '<option value="St. Dominic, Shaker Hts.      Shaker Heights, OH      44122-4967">St. Dominic, Shaker Hts.      Shaker Heights, OH      44122-4967</option>'+
          '<option value="St. Edward, Parkman      Parkman, OH      44080-0709">St. Edward, Parkman      Parkman, OH      44080-0709</option>'+
          '<option value="St. Elizabeth Ann Seton, Warren      Warren, Ohio      44484-5217">St. Elizabeth Ann Seton, Warren      Warren, Ohio      44484-5217</option>'+
          '<option value="St. Emeric, Cleveland      Cleveland/Ohio">St. Emeric, Cleveland      Cleveland/Ohio</option>'+
          '<option value="St. Eugene, Akron      Arron Ohio      44221">St. Eugene, Akron      Arron Ohio      44221</option>'+
          '<option value="St. FCO De Asis      Chih">St. FCO De Asis      Chih</option>'+
          '<option value="St. Felicitas, Euclid      Euclid, OH      44143-1299">St. Felicitas, Euclid      Euclid, OH      44143-1299</option>'+
          '<option value="St. Felipe de Jesus      Atotonlico el Alto, Jalisco">St. Felipe de Jesus      Atotonlico el Alto, Jalisco</option>'+
          '<option value="St. Francis De Sales, Lebenon      Lebenon, Ohio      45036-1352">St. Francis De Sales, Lebenon      Lebenon, Ohio      45036-1352</option>'+
          '<option value="St. Francis De Sales, Parma      Parma, OH      44134-2904">St. Francis De Sales, Parma      Parma, OH      44134-2904</option>'+
          '<option value="St. Francis Of Assisi, Ann Arbor      Ann Arbor, MI      48104">St. Francis Of Assisi, Ann Arbor      Ann Arbor, MI      48104</option>'+
          '<option value="St. Francis Of Assisi, Gates Mills      Gates Mills, OH      44040-9635">St. Francis Of Assisi, Gates Mills      Gates Mills, OH      44040-9635</option>'+
          '<option value="St. Francis Xavier, Ft. Myers      Ft. Myers, FL      33901">St. Francis Xavier, Ft. Myers      Ft. Myers, FL      33901</option>'+
          '<option value="St. Francis Xavier, Medina      Medina, OH      44256">St. Francis Xavier, Medina      Medina, OH      44256</option>'+
          '<option value="St. Gabriel, Concord      Concord, Ohio      44060-6294">St. Gabriel, Concord      Concord, Ohio      44060-6294</option>'+
          '<option value="St. Gregory, Euclid      South Euclid, OH      44121-4085">St. Gregory, Euclid      South Euclid, OH      44121-4085</option>'+
          '<option value="St. Hedwig, Detroit      Detroit, MI">St. Hedwig, Detroit      Detroit, MI</option>'+
          '<option value="St. Helen Church, Newbury      Newbury, OH      44065">St. Helen Church, Newbury      Newbury, OH      44065</option>'+
          '<option value="St. Helena, Cleveland      Cleveland, OH      44102">St. Helena, Cleveland      Cleveland, OH      44102</option>'+
          '<option value="St. Henry, Cleveland      Cleveland, OH      44128-1796">St. Henry, Cleveland      Cleveland, OH      44128-1796</option>'+
          '<option value="St. Hyacinth, Toledo      Toledo, Ohio      43607">St. Hyacinth, Toledo      Toledo, Ohio      43607</option>'+
          '<option value="St. Ignatius of Antioch, Cleveland      Cleveland, Ohio      44111-5470">St. Ignatius of Antioch, Cleveland      Cleveland, Ohio      44111-5470</option>'+
          '<option value="St. Ignatius of Loyola, Rogers City      Rogers City, MI      49779">St. Ignatius of Loyola, Rogers City      Rogers City, MI      49779</option>'+
          '<option value="St. Ignatius, San Francisco      San Francisco, CA      94118">St. Ignatius, San Francisco      San Francisco, CA      94118</option>'+
          '<option value="St. James De Chantal, Bethleham      Bethleham, PA">St. James De Chantal, Bethleham      Bethleham, PA</option>'+
          '<option value="St. James the Apostle, Carmel      Carmel, NY">St. James the Apostle, Carmel      Carmel, NY</option>'+
          '<option value="St. James, Lakewood      Lakewood, OH      44107">St. James, Lakewood      Lakewood, OH      44107</option>'+
          '<option value="St. James, Mukwonago      Mukwonago WI      53149">St. James, Mukwonago      Mukwonago WI      53149</option>'+
          '<option value="St. Jane de Chatel, Easton      Easton, PA      18045">St. Jane de Chatel, Easton      Easton, PA      18045</option>'+
          '<option value="St. Jerome, Cleveland      Cleveland, OH      44110-1298">St. Jerome, Cleveland      Cleveland, OH      44110-1298</option>'+
          '<option value="St. Joan Of Arc, Chagrin Falls      Chagrin Falls, OH      44022-2999">St. Joan Of Arc, Chagrin Falls      Chagrin Falls, OH      44022-2999</option>'+
          '<option value="St. Joan of Arc, Evanston      Evanston, IL">St. Joan of Arc, Evanston      Evanston, IL</option>'+
          '<option value="St. Joan Of Arc, Streetsboro      Streetsboro, OH      44241">St. Joan Of Arc, Streetsboro      Streetsboro, OH      44241</option>'+
          '<option value="St. John Bosco, Parma      Parma, OH      44130-2997">St. John Bosco, Parma      Parma, OH      44130-2997</option>'+
          '<option value="St. John Gualbert, Johnstown      Johnstown, PA">St. John Gualbert, Johnstown      Johnstown, PA</option>'+
          '<option value="St. John Lutheran      Garfield hts, OH      44125">St. John Lutheran      Garfield hts, OH      44125</option>'+
          '<option value="St. John Lutheran Church, Roanoke      Roanoke VA      24018">St. John Lutheran Church, Roanoke      Roanoke VA      24018</option>'+
          '<option value="St. John Neiman, Irvine      Irvine, CA">St. John Neiman, Irvine      Irvine, CA</option>'+
          '<option value="St. John Nepomucene, Cleveland      Cleveland, OH      44105-3357">St. John Nepomucene, Cleveland      Cleveland, OH      44105-3357</option>'+
          '<option value="St. John of the Cross, Euclid      Euclid, Ohio      44143">St. John of the Cross, Euclid      Euclid, Ohio      44143</option>'+
          '<option value="St. John Rochester, Fairporn      Fairporn, NY">St. John Rochester, Fairporn      Fairporn, NY</option>'+
          '<option value="St. John the Baptist, Somonauk      Somonauk, IL">St. John the Baptist, Somonauk      Somonauk, IL</option>'+
          '<option value="St. John Vianney, Flint      Flint, MI      48504">St. John Vianney, Flint      Flint, MI      48504</option>'+
          '<option value="St. John Vianney, Mentor      Mentor, Ohio      44060-3997">St. John Vianney, Mentor      Mentor, Ohio      44060-3997</option>'+
          '<option value="St. Joseph Cathedral, Columbus      Columbus, Ohio      43215">St. Joseph Cathedral, Columbus      Columbus, Ohio      43215</option>'+
          '<option value="St. Joseph Church, Richardson      Richardson, TX      75081">St. Joseph Church, Richardson      Richardson, TX      75081</option>'+
          '<option value="St. Joseph, Amherst      Amherst, Ohio      44001">St. Joseph, Amherst      Amherst, Ohio      44001</option>'+
          '<option value="St. Joseph, Cold Spring      Cold Spring, KY      41076-1895">St. Joseph, Cold Spring      Cold Spring, KY      41076-1895</option>'+
          '<option value="St. Joseph, Cuyahoga Falls      Cuyahoga Falls, Ohio      44221">St. Joseph, Cuyahoga Falls      Cuyahoga Falls, Ohio      44221</option>'+
          '<option value="St. Joseph, Dover      Dover Ohio      44622">St. Joseph, Dover      Dover Ohio      44622</option>'+
          '<option value="St. Joseph, Lucinda      Lucinda, Pennsylvania      16235">St. Joseph, Lucinda      Lucinda, Pennsylvania      16235</option>'+
          '<option value="St. Joseph, Mantua      Mantua, OH      44255">St. Joseph, Mantua      Mantua, OH      44255</option>'+
          '<option value="St. Joseph, Maumee      Maumee, OH      43537">St. Joseph, Maumee      Maumee, OH      43537</option>'+
          '<option value="St. Joseph, Port Huron      Port Huron, MI      48060">St. Joseph, Port Huron      Port Huron, MI      48060</option>'+
          '<option value="St. Joseph, South Bend      South Bend, IN      46617">St. Joseph, South Bend      South Bend, IN      46617</option>'+
          '<option value="St. Joseph, Sylvania      Sylvania Ohio      43560">St. Joseph, Sylvania      Sylvania Ohio      43560</option>'+
          '<option value="St. Joseph, Toledo      Toledo, Ohio      43697">St. Joseph, Toledo      Toledo, Ohio      43697</option>'+
          '<option value="St. Jude, Warrensville Hts.      Warrensville Hts., OH      44128-5986">St. Jude, Warrensville Hts.      Warrensville Hts., OH      44128-5986</option>'+
          '<option value="St. Justin Martyr, Eastlake      Eastlake, OH      44095-5095">St. Justin Martyr, Eastlake      Eastlake, OH      44095-5095</option>'+
          '<option value="St. Ladislas, Westlake      Westlake, OH      44145-2999">St. Ladislas, Westlake      Westlake, OH      44145-2999</option>'+
          '<option value="St. Lawrence, Cleveland      Cleveland, Ohio      44105-1521">St. Lawrence, Cleveland      Cleveland, Ohio      44105-1521</option>'+
          '<option value="St. Leo The Great, Cleveland      Cleveland, OH      44109-5799">St. Leo The Great, Cleveland      Cleveland, OH      44109-5799</option>'+
          '<option value="St. Louis, Louisville">St. Louis, Louisville</option>'+
          '<option value="St. Louis, Waco      Waco, TX      76708">St. Louis, Waco      Waco, TX      76708</option>'+
          '<option value="St. Lucy, Middlefield      Middlefield, OH      44062">St. Lucy, Middlefield      Middlefield, OH      44062</option>'+
          '<option value="St. Luke, Lakewood      Lakewood OH      44107">St. Luke, Lakewood      Lakewood OH      44107</option>'+
          '<option value="St. Margaret Mary, S. Euclid      South Euclid, Ohio      44121">St. Margaret Mary, S. Euclid      South Euclid, Ohio      44121</option>'+
          '<option value="St. Mark the Evangelist, Plano      Plano, Texas      75075">St. Mark the Evangelist, Plano      Plano, Texas      75075</option>'+
          '<option value="St. Mark, Cleveland      Cleveland, OH      44111-1084">St. Mark, Cleveland      Cleveland, OH      44111-1084</option>'+
          '<option value="St. Martha, Akron      Akron Ohio">St. Martha, Akron      Akron Ohio</option>'+
          '<option value="St. Martin of Tours, Maple Hts.      Maple Hts., OH      44137-4788">St. Martin of Tours, Maple Hts.      Maple Hts., OH      44137-4788</option>'+
          '<option value="St. Martin Of Tours, Santa Clara      Santa Clara, CA">St. Martin Of Tours, Santa Clara      Santa Clara, CA</option>'+
          '<option value="St. Martin of Tours, Valley City      Valley City, OH      44280">St. Martin of Tours, Valley City      Valley City, OH      44280</option>'+
          '<option value="St. Martin, St. Martin MN      St. Martin, MN      56376">St. Martin, St. Martin MN      St. Martin, MN      56376</option>'+
          '<option value="St. Mary Magdalene, Willowick      Willowick, Ohio      44095-3573">St. Mary Magdalene, Willowick      Willowick, Ohio      44095-3573</option>'+
          '<option value="St. Mary Magdalyn, Columbus      Columbus, OH      43204">St. Mary Magdalyn, Columbus      Columbus, OH      43204</option>'+
          '<option value="St. Mary of Czestochowa, New Kensington      New Kensington, PA      15068-5696">St. Mary of Czestochowa, New Kensington      New Kensington, PA      15068-5696</option>'+
          '<option value="St. Mary of Lourdes, Mayville      Mayville, NY      14757">St. Mary of Lourdes, Mayville      Mayville, NY      14757</option>'+
          '<option value="St. Mary of the Assumption, Cleveland      Cleveland, Ohio      44110">St. Mary of the Assumption, Cleveland      Cleveland, Ohio      44110</option>'+
          '<option value="St. Mary of the Assumption, Mentor      Mentor, Ohio      44060-5853">St. Mary of the Assumption, Mentor      Mentor, Ohio      44060-5853</option>'+
          '<option value="St. Mary of the Falls, Olmsted Falls      Olmsted Falls, OH">St. Mary of the Falls, Olmsted Falls      Olmsted Falls, OH</option>'+
          '<option value="St. Mary of tthe Assumption, Herman      Herman, PA      16039">St. Mary of tthe Assumption, Herman      Herman, PA      16039</option>'+
          '<option value="St. Mary, Bedford      Bedford, Ohio      44146">St. Mary, Bedford      Bedford, Ohio      44146</option>'+
          '<option value="St. Mary, Chardon      Chardon Ohio      44024">St. Mary, Chardon      Chardon Ohio      44024</option>'+
          '<option value="St. Mary, Cincinnati      Cincinnati, Ohio      45208">St. Mary, Cincinnati      Cincinnati, Ohio      45208</option>'+
          '<option value="St. Mary, Cleveland      Cleveland, OH      44110-2497">St. Mary, Cleveland      Cleveland, OH      44110-2497</option>'+
          '<option value="St. Mary, Davenport      Davenport, Iowa      52802">St. Mary, Davenport      Davenport, Iowa      52802</option>'+
          '<option value="St. Mary, Greenville      Greenville, South Carolina">St. Mary, Greenville      Greenville, South Carolina</option>'+
          '<option value="St. Mary, Hudson      Hudson, Ohio      44236">St. Mary, Hudson      Hudson, Ohio      44236</option>'+
          '<option value="St. Mary, Massillon      Massillon, OH      44646">St. Mary, Massillon      Massillon, OH      44646</option>'+
          '<option value="St. Mary, Mayville      Mayville, NY      14757">St. Mary, Mayville      Mayville, NY      14757</option>'+
          '<option value="St. Mary, Mentor      Mentor, OH      44060">St. Mary, Mentor      Mentor, OH      44060</option>'+
          '<option value="St. Mary, Montrose      Montrose, Colorado      81401">St. Mary, Montrose      Montrose, Colorado      81401</option>'+
          '<option value="St. Mary, Orwell      Orwell, Ohio      44076">St. Mary, Orwell      Orwell, Ohio      44076</option>'+
          '<option value="St. Mary, Ottawa      Ottawa, IL      61350">St. Mary, Ottawa      Ottawa, IL      61350</option>'+
          '<option value="St. Mary, Painesville      Painesville Ohio      44077">St. Mary, Painesville      Painesville Ohio      44077</option>'+
          '<option value="St. Mary, Shrewsbury      Shrewsbury, MA      01545">St. Mary, Shrewsbury      Shrewsbury, MA      01545</option>'+
          '<option value="St. Mary, St. Clairsville OH      St. Clairsville, Ohio      43950">St. Mary, St. Clairsville OH      St. Clairsville, Ohio      43950</option>'+
          '<option value="St. Mary, Swormville      Swormville, NY      14051">St. Mary, Swormville      Swormville, NY      14051</option>'+
          '<option value="St. Matthew, Glendale Hts.      Glendale Hts., IL      60139">St. Matthew, Glendale Hts.      Glendale Hts., IL      60139</option>'+
          '<option value="St. Mel, Cleveland      Cleveland Ohio      44111">St. Mel, Cleveland      Cleveland Ohio      44111</option>'+
          '<option value="St. Michael, Belvue      Belvue, Ohio">St. Michael, Belvue      Belvue, Ohio</option>'+
          '<option value="St. Michael, Independence      Cleveland, OH      44131">St. Michael, Independence      Cleveland, OH      44131</option>'+
          '<option value="St. Monica, Duluth      Duluth, GA      30097">St. Monica, Duluth      Duluth, GA      30097</option>'+
          '<option value="St. Monica, Garfield Hts.      Garfield Hts., OH      44125-5197">St. Monica, Garfield Hts.      Garfield Hts., OH      44125-5197</option>'+
          '<option value="St. Nicholas Byzantine, Cleveland      Cleveland, Ohio      44114">St. Nicholas Byzantine, Cleveland      Cleveland, Ohio      44114</option>'+
          '<option value="St. Noel, Willoughby Hills      Willoughby Hills, OH      44094-9193">St. Noel, Willoughby Hills      Willoughby Hills, OH      44094-9193</option>'+
          '<option value="St. Paschal Baylon, Highland Hts.      Highland Hts., OH      44143-3092">St. Paschal Baylon, Highland Hts.      Highland Hts., OH      44143-3092</option>'+
          '<option value="St. Patrick      Kent, OH">St. Patrick      Kent, OH</option>'+
          '<option value="St. Patrick, Ann Arbor      Ann Arbor, MI      48105">St. Patrick, Ann Arbor      Ann Arbor, MI      48105</option>'+
          '<option value="St. Patrick, Cleveland      Cleveland, OH      44113">St. Patrick, Cleveland      Cleveland, OH      44113</option>'+
          '<option value="St. Patrick, Cleveland      Cleveland, OH      44135">St. Patrick, Cleveland      Cleveland, OH      44135</option>'+
          '<option value="St. Patrick, Leetonia      Leetonia, OH">St. Patrick, Leetonia      Leetonia, OH</option>'+
          '<option value="St. Patrick, Ottawa      Ottawa, IL      61350">St. Patrick, Ottawa      Ottawa, IL      61350</option>'+
          '<option value="St. Patrick, Thompson      Thompson, OH      44086">St. Patrick, Thompson      Thompson, OH      44086</option>'+
          '<option value="St. Patrick, Wisconsin      Onalaska, WI">St. Patrick, Wisconsin      Onalaska, WI</option>'+
          '<option value="St. Patrick, Youngstown      Kinsman, Ohio      44428">St. Patrick, Youngstown      Kinsman, Ohio      44428</option>'+
          '<option value="St. Paul Croatian, Cleveland      Cleveland, Ohio      44103">St. Paul Croatian, Cleveland      Cleveland, Ohio      44103</option>'+
          '<option value="St. Paul the Apostle Church, Davenport, IA      Davenport, IA">St. Paul the Apostle Church, Davenport, IA      Davenport, IA</option>'+
          '<option value="St. Paul, Euclid      Euclid, OH      44117-1192">St. Paul, Euclid      Euclid, OH      44117-1192</option>'+
          '<option value="St. Paul, Euclid      Euclid, Ohio      44143">St. Paul, Euclid      Euclid, Ohio      44143</option>'+
          '<option value="St. Peter and Paul, Garfield Hts.      Garfield Heights, OH">St. Peter and Paul, Garfield Hts.      Garfield Heights, OH</option>'+
          '<option value="St. Peter Cathedral      Erie, PA">St. Peter Cathedral      Erie, PA</option>'+
          '<option value="St. Peter Parish, Skokie      Skokie, IL      60077">St. Peter Parish, Skokie      Skokie, IL      60077</option>'+
          '<option value="St. Peter the Apostle, Boerne      Boerne, TX      78006">St. Peter the Apostle, Boerne      Boerne, TX      78006</option>'+
          '<option value="St. Peter the Apostle, Brook Park      Brook Park, OH      44142-3503">St. Peter the Apostle, Brook Park      Brook Park, OH      44142-3503</option>'+
          '<option value="St. Peter, Cleveland      Cleveland, Ohio">St. Peter, Cleveland      Cleveland, Ohio</option>'+
          '<option value="St. Peter, Spring Grove      Spring Grove, IL 60081">St. Peter, Spring Grove      Spring Grove, IL 60081</option>'+
          '<option value="St. Philomena, E. Cleveland      East Cleveland, Ohio      44112">St. Philomena, E. Cleveland      East Cleveland, Ohio      44112</option>'+
          '<option value="St. Pius X, Bedford      Bedford, OH      44146-2296">St. Pius X, Bedford      Bedford, OH      44146-2296</option>'+
          '<option value="St. Pius X, Warren      Warren, Ohio      44485">St. Pius X, Warren      Warren, Ohio      44485</option>'+
          '<option value="St. Raphael, Bay Village      Bay Village, OH      44140-2366">St. Raphael, Bay Village      Bay Village, OH      44140-2366</option>'+
          '<option value="St. Richard, North Olmsted      North Olmsted, OH      44070-3260">St. Richard, North Olmsted      North Olmsted, OH      44070-3260</option>'+
          '<option value="St. Rita, Solon      Solon, OH      44139-4098">St. Rita, Solon      Solon, OH      44139-4098</option>'+
          '<option value="St. Robert Bellarmine, Euclid      Euclid, OH      44123-1200">St. Robert Bellarmine, Euclid      Euclid, OH      44123-1200</option>'+
          '<option value="St. Robert of Newminster, Ada      Ada, MI">St. Robert of Newminster, Ada      Ada, MI</option>'+
          '<option value="St. Roch, Indianapolis      Indianapolis IN      46227">St. Roch, Indianapolis      Indianapolis IN      46227</option>'+
          '<option value="St. Rose of Lima, Cleveland      Cleveland, OH      44102-2399">St. Rose of Lima, Cleveland      Cleveland, OH      44102-2399</option>'+
          '<option value="St. Rose, Girard      Girard,OH">St. Rose, Girard      Girard,OH</option>'+
          '<option value="St. Sebastian, Akron      Akron, OH      44320">St. Sebastian, Akron      Akron, OH      44320</option>'+
          '<option value="St. Sebastian, Ft. Lauderdale      Ft. Lauderdale, FL.      33316-3299">St. Sebastian, Ft. Lauderdale      Ft. Lauderdale, FL.      33316-3299</option>'+
          '<option value="St. Stanislaus, Cleveland      Cleveland, OH      44105-1293">St. Stanislaus, Cleveland      Cleveland, OH      44105-1293</option>'+
          '<option value="St. Stephen, Cleveland      Cleveland      44102">St. Stephen, Cleveland      Cleveland      44102</option>'+
          '<option value="St. Stephen, New Boston      New Boston, MI">St. Stephen, New Boston      New Boston, MI</option>'+
          '<option value="St. Stephen, Riverview      Riverview, FL      33569">St. Stephen, Riverview      Riverview, FL      33569</option>'+
          '<option value="St. Stephen, West Salem      West Salem, Ohio      44287">St. Stephen, West Salem      West Salem, Ohio      44287</option>'+
          '<option value="St. Sussana, Mason      Mason, Ohio      45050">St. Sussana, Mason      Mason, Ohio      45050</option>'+
          '<option value="St. Therese, Garfield Hts.      Garfield Hts.,  OH      44125-2698">St. Therese, Garfield Hts.      Garfield Hts.,  OH      44125-2698</option>'+
          '<option value="St. Thomas Aquinas, IA      Ames, IA      50014">St. Thomas Aquinas, IA      Ames, IA      50014</option>'+
          '<option value="St. Thomas Aquinas, IO      Ames, IA      50014">St. Thomas Aquinas, IO      Ames, IA      50014</option>'+
          '<option value="St. Thomas More, Brookings      Brookings, SD      57006">St. Thomas More, Brookings      Brookings, SD      57006</option>'+
          '<option value="St. Thomas More, Brooklyn OH      Brooklyn, OH      44144">St. Thomas More, Brooklyn OH      Brooklyn, OH      44144</option>'+
          '<option value="St. Thomas the Apostle, Crystal Lake      Crystal Lake, IL      60014">St. Thomas the Apostle, Crystal Lake      Crystal Lake, IL      60014</option>'+
          '<option value="St. Timothy, Garfield Hts.      Garfield Hts., OH">St. Timothy, Garfield Hts.      Garfield Hts., OH</option>'+
          '<option value="St. Vincent de Paul, Akron      Akron, OH      44303">St. Vincent de Paul, Akron      Akron, OH      44303</option>'+
          '<option value="St. Vincent de Paul, Cleveland      Cleveland, Ohio      44111">St. Vincent de Paul, Cleveland      Cleveland, Ohio      44111</option>'+
          '<option value="St. Vincent de Paul, Elyria      Elyria, OH      44035">St. Vincent de Paul, Elyria      Elyria, OH      44035</option>'+
          '<option value="St. Vincent, Vienna      Vienna, Ohio      44473">St. Vincent, Vienna      Vienna, Ohio      44473</option>'+
          '<option value="St. Vitus, Cleveland      Cleveland, Ohio      44103">St. Vitus, Cleveland      Cleveland, Ohio      44103</option>'+
          '<option value="St. Walter, Roselle      Roselle, IL">St. Walter, Roselle      Roselle, IL</option>'+
          '<option value="St. Wenceslas, Maple Hts.      Maple Hts., OH      44137-1598">St. Wenceslas, Maple Hts.      Maple Hts., OH      44137-1598</option>'+
          '<option value="St. William, Euclid      Euclid, OH      44132-1495">St. William, Euclid      Euclid, OH      44132-1495</option>'+
          '<option value="Sts. Cyril &amp; Methodius, Lakewood      Lakewood, OH      44107-4997">Sts. Cyril &amp; Methodius, Lakewood      Lakewood, OH      44107-4997</option>'+
          '<option value="Sts. Peter and Paul, Garfield Hts.      Garfield Hts">Sts. Peter and Paul, Garfield Hts.      Garfield Hts</option>'+
          '<option value="Sts. Peter and Paul, Hamburg      Hamburg, NY      14075-5059">Sts. Peter and Paul, Hamburg      Hamburg, NY      14075-5059</option>'+
          '<option value="Sts. Phillips &amp; James Church, Cleveland      Cleveland, OH      44111">Sts. Phillips &amp; James Church, Cleveland      Cleveland, OH      44111</option>'+
          '<option value="Sts. Robert and William, Euclid      Euclid, Ohio      44132">Sts. Robert and William, Euclid      Euclid, Ohio      44132</option>'+
          '<option value="The Church of the Good Shepherd, Cumming, GA      Cumming, GA      30041">The Church of the Good Shepherd, Cumming, GA      Cumming, GA      30041</option>'+
          '<option value="Transfiguration, Lakewood      Lakewood, Ohio      44107">Transfiguration, Lakewood      Lakewood, Ohio      44107</option>'+
          '<option value="Tribunal Cleveland, Ohio      Cleveland Ohio      44114">Tribunal Cleveland, Ohio      Cleveland Ohio      44114</option>'+
          '<option value="Trinity English Luthern Church      Fort Wayne, IN">Trinity English Luthern Church      Fort Wayne, IN</option>'+
          '<option value="United Methodist Church Chagrin Falls      Chagrin Falls, Ohio">United Methodist Church Chagrin Falls      Chagrin Falls, Ohio</option>'+
          '<option value="USAG Chapel      Wiesbader">USAG Chapel      Wiesbader</option>'+
          '<option value="Valley Lutheran      Chagrin Falls, Oh">Valley Lutheran      Chagrin Falls, Oh</option>'+
          '<option value="Virger del Carmen      Villahermosa, Tabasco">Virger del Carmen      Villahermosa, Tabasco</option>'+
          '<option value="Vogelweh Chapel &quot;Military Orinariate&quot;      New York 22., New York">Vogelweh Chapel &quot;Military Orinariate&quot;      New York 22., New York</option>'+
          '<option value="Willoughby, United Methodist">Willoughby, United Methodist</option>'+
          '</select>';
        formTabIndex = formTabIndex + 1;
        var tr15 = document.createElement('tr');
        tr15.setAttribute('name', 'tr15'+memNum);
        tr15.setAttribute('id', 'tr15'+memNum);
        mainTableBody.appendChild(tr15);
        tr15.insertCell(0).innerHTML = '<td></td>';
        tr15.insertCell(1).innerHTML = '<td></td>';
        var td15 = document.createElement('td');
        td15.setAttribute('id', 'td15'+memNum);
        td15.setAttribute('colspan', '2');
        tr15.appendChild(td15);
        td15.innerHTML = '<span class="lbl">&nbsp;&nbsp;&nbsp;Marriage</span><input type="hidden" name="txaMem'+memNum+'Sac4Name" id="txaMem'+memNum+'Sac4Name" value="Marriage" />';
        var td16 = document.createElement('td');
        td16.setAttribute('id', 'td16'+memNum);
        td16.setAttribute('colspan', '1');
        tr15.appendChild(td16);
        td16.innerHTML = ' <select tabindex="208" name="cboMem'+memNum+'Sac4" id="cboMem'+memNum+'Sac4" class="pulldownstyle"><option value="" /><option value="Yes">Yes</option><option value="No">No</option></select>';
        var td17 = document.createElement('td');
        td17.setAttribute('id', 'td17'+memNum);
        td17.setAttribute('colspan', '1');
        tr15.appendChild(td17);
        td17.innerHTML = '<input tabindex="'+(formTabIndex+1)+'" style="width:100px" autocomplete="off" value="mm/dd/yyyy" title="enter the marriage date" name="dteMem'+memNum+'Sac4Date" id="dteMem'+memNum+'Sac4Date" maxlength="10" onkeydown="onKeyPressed(event, this);" onFocus="this.select()" class="textboxstyle dateInput" onchange="checkDate(this.id)" onkeyup="DoKeyUp(this)" />';
        calendar.set('dteMem'+memNum+'Sac4Date');
        formTabIndex = formTabIndex + 1;
        var td18 = document.createElement('td');
        td18.setAttribute('id', 'td18'+memNum);
        td18.setAttribute('colspan', '2');
        tr15.appendChild(td18);
        td18.innerHTML = 
          '<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Sac4Place" id="cboMem'+memNum+'Sac4Place" title="Select a place in the pull down list" style="width: 166px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Bethany Covenant Church, Lyndhurst      Lyndhurst, Oh.">Bethany Covenant Church, Lyndhurst      Lyndhurst, Oh.</option>'+
          '<option value="Blessed Sacrament, Valley Stream, NY      Valley Stream, NY      11580">Blessed Sacrament, Valley Stream, NY      Valley Stream, NY      11580</option>'+
          '<option value="Blessed Sacrament, Warren      Warren Ohio      44483">Blessed Sacrament, Warren      Warren Ohio      44483</option>'+
          '<option value="Blessed Trinity, Cleveland      Cleveland, Ohio 44135">Blessed Trinity, Cleveland      Cleveland, Ohio 44135</option>'+
          '<option value="Braceville Community Church, Newton Falls      Newton Falls, Ohio">Braceville Community Church, Newton Falls      Newton Falls, Ohio</option>'+
          '<option value="Burton Congregational Church      Burton, OH      44021">Burton Congregational Church      Burton, OH      44021</option>'+
          '<option value="Cathedral Basilica of St. Peter in Chains, Cincinnati      Lebanon, OH      45036">Cathedral Basilica of St. Peter in Chains, Cincinnati      Lebanon, OH      45036</option>'+
          '<option value="Cathedral of Christ the King, Lexington      Lexington, KY      40502-2322">Cathedral of Christ the King, Lexington      Lexington, KY      40502-2322</option>'+
          '<option value="Cathedral of St. John the Evangelist, Cleveland      Cleveland, Ohio      44114-2582">Cathedral of St. John the Evangelist, Cleveland      Cleveland, Ohio      44114-2582</option>'+
          '<option value="Christ the King, Akron      Akron Ohio      44310">Christ the King, Akron      Akron Ohio      44310</option>'+
          '<option value="Christ the King, Cleveland      East Cleveland, OH      44112-1636">Christ the King, Cleveland      East Cleveland, OH      44112-1636</option>'+
          '<option value="Christ The King, Las Vegas      Las Vegas, NV      89118">Christ The King, Las Vegas      Las Vegas, NV      89118</option>'+
          '<option value="Church of Annunciation, Cleveland      Cleveland, OH      44135">Church of Annunciation, Cleveland      Cleveland, OH      44135</option>'+
          '<option value="Church of Beloved Disciple, Grove City      Grove City, PA      16127">Church of Beloved Disciple, Grove City      Grove City, PA      16127</option>'+
          '<option value="Church of St. Anthony, Joliet      Joliet, IL      60432-4210">Church of St. Anthony, Joliet      Joliet, IL      60432-4210</option>'+
          '<option value="Church of St. Mary and St. Joseph, Newton Falls      Newton Falls, Ohio      44444">Church of St. Mary and St. Joseph, Newton Falls      Newton Falls, Ohio      44444</option>'+
          '<option value="Church of the Assumption, Broadview Hts.      Broadview Heights, Ohio      44147">Church of the Assumption, Broadview Hts.      Broadview Heights, Ohio      44147</option>'+
          '<option value="Church of the Blessed Sacrament, Warren      Warren Ohio      44483">Church of the Blessed Sacrament, Warren      Warren Ohio      44483</option>'+
          '<option value="Church of the Incarnation, Centerville      Centerville, Ohio      45459">Church of the Incarnation, Centerville      Centerville, Ohio      45459</option>'+
          '<option value="Church Of The Resurection, New Albany      New Albany, Ohio">Church Of The Resurection, New Albany      New Albany, Ohio</option>'+
          '<option value="Communion of Saints, Cleveland Hts.      Cleveland Heights, Ohio      44118">Communion of Saints, Cleveland Hts.      Cleveland Heights, Ohio      44118</option>'+
          '<option value="Curch of the Annunciation, Cleveland      Cleveland, Ohio      44135">Curch of the Annunciation, Cleveland      Cleveland, Ohio      44135</option>'+
          '<option value="Divine Word, Kirtland      Kirtland, OH      44094-9714">Divine Word, Kirtland      Kirtland, OH      44094-9714</option>'+
          '<option value="First Congregational Church of Claridon      Chardon, OH      44024">First Congregational Church of Claridon      Chardon, OH      44024</option>'+
          '<option value="First Presbyterian, East Cleveland      East cleveland ohio">First Presbyterian, East Cleveland      East cleveland ohio</option>'+
          '<option value="Germany">Germany</option>'+
          '<option value="Gesu, Universtiy Hts.      University Hts., OH      44118-3896">Gesu, Universtiy Hts.      University Hts., OH      44118-3896</option>'+
          '<option value="Holy Angels, Chagrin Falls      Chagrin Falls,  OH      44023-4879">Holy Angels, Chagrin Falls      Chagrin Falls,  OH      44023-4879</option>'+
          '<option value="Holy Cross, Euclid      Euclid, OH      44119-1066">Holy Cross, Euclid      Euclid, OH      44119-1066</option>'+
          '<option value="Holy Family Parish (Archives)      Cleveland, Ohio      44114">Holy Family Parish (Archives)      Cleveland, Ohio      44114</option>'+
          '<option value="Holy Family, Endwell      Endwell, NY      13760">Holy Family, Endwell      Endwell, NY      13760</option>'+
          '<option value="Holy Family, Parma      Parma, OH      44130">Holy Family, Parma      Parma, OH      44130</option>'+
          '<option value="Holy Family, Stow      Stow, OH      44224">Holy Family, Stow      Stow, OH      44224</option>'+
          '<option value="Holy Name, Cleveland      Cleveland, OH">Holy Name, Cleveland      Cleveland, OH</option>'+
          '<option value="Holy Redeemer, Cleveland      Cleveland, OH      44110-3104">Holy Redeemer, Cleveland      Cleveland, OH      44110-3104</option>'+
          '<option value="Holy Rosary, Cleveland      Cleveland, OH      44106-1996">Holy Rosary, Cleveland      Cleveland, OH      44106-1996</option>'+
          '<option value="Holy Trinity, Avon      Avon, Ohio      44011">Holy Trinity, Avon      Avon, Ohio      44011</option>'+
          '<option value="Holy Trinity, Bedford Hts.      Bedford Hts., OH      44146-2599">Holy Trinity, Bedford Hts.      Bedford Hts., OH      44146-2599</option>'+
          '<option value="Immaculate Conception Church Madison      Madison Ohio">Immaculate Conception Church Madison      Madison Ohio</option>'+
          '<option value="Immaculate Conception, Bellevue      Bellevue, OH      44811">Immaculate Conception, Bellevue      Bellevue, OH      44811</option>'+
          '<option value="Immaculate Conception, Cleveland      Cleveland, OH      44103-1179">Immaculate Conception, Cleveland      Cleveland, OH      44103-1179</option>'+
          '<option value="Immaculate Conception, Durham      Durham, NC      27701">Immaculate Conception, Durham      Durham, NC      27701</option>'+
          '<option value="Immaculate Conception, Willoughby      Willoughby, Ohio">Immaculate Conception, Willoughby      Willoughby, Ohio</option>'+
          '<option value="Immaculate Heart of Mary, Cuyahoga Falls      Cuyahoga Falls, Ohio      44223">Immaculate Heart of Mary, Cuyahoga Falls      Cuyahoga Falls, Ohio      44223</option>'+
          '<option value="King of Kings Evangelical Lutheran Church, Willoughby      Willoughby, Ohio      44094-7570">King of Kings Evangelical Lutheran Church, Willoughby      Willoughby, Ohio      44094-7570</option>'+
          '<option value="Lake Shore Christian Church, Cleveland      Cleveland, OH      44132">Lake Shore Christian Church, Cleveland      Cleveland, OH      44132</option>'+
          '<option value="Lord of Life Lutheran Church, Chagrin Falls      Chagrin Falls, Ohio      44023">Lord of Life Lutheran Church, Chagrin Falls      Chagrin Falls, Ohio      44023</option>'+
          '<option value="Mariapoch Shrine, Burton      Burton, OH      44021">Mariapoch Shrine, Burton      Burton, OH      44021</option>'+
          '<option value="Mary Queen of Peace, Cleveland      Cleveland, Ohio      44109">Mary Queen of Peace, Cleveland      Cleveland, Ohio      44109</option>'+
          '<option value="Most Holy Trinity Church, Chesterland      Chesterland">Most Holy Trinity Church, Chesterland      Chesterland</option>'+
          '<option value="Mother of Mercy, Washington NC      Washington, NC      27889">Mother of Mercy, Washington NC      Washington, NC      27889</option>'+
          '<option value="Mother of Sorrows, Peninsula      Peninsula, Ohio      44264">Mother of Sorrows, Peninsula      Peninsula, Ohio      44264</option>'+
          '<option value="Nativity of Our Lord Church, Orchard Park      Orchard Park, NY      14127">Nativity of Our Lord Church, Orchard Park      Orchard Park, NY      14127</option>'+
          '<option value="Nativity of the Blessed Virgin Mary, South Amherst      South Amherst, OH      44001">Nativity of the Blessed Virgin Mary, South Amherst      South Amherst, OH      44001</option>'+
          '<option value="Newton Falls United Methodist      Newton Falls, Ohio">Newton Falls United Methodist      Newton Falls, Ohio</option>'+
          '<option value="North American Martyrs Church, Monroville      Monroville, PA">North American Martyrs Church, Monroville      Monroville, PA</option>'+
          '<option value="Other">Other</option>'+
          '<option value="Our Lady Chapel/Gilmour, Gates Mills      Gates Mills,  Ohio      44040">Our Lady Chapel/Gilmour, Gates Mills      Gates Mills,  Ohio      44040</option>'+
          '<option value="Our Lady Of Good Council, Cleveland      Cleveland, OH      44109">Our Lady Of Good Council, Cleveland      Cleveland, OH      44109</option>'+
          '<option value="Our Lady Of Grace, Hickley      Hickley, OH      44233">Our Lady Of Grace, Hickley      Hickley, OH      44233</option>'+
          '<option value="Our Lady Of Guadalupe, Macedonia      Macedonia, OH      44056-1450">Our Lady Of Guadalupe, Macedonia      Macedonia, OH      44056-1450</option>'+
          '<option value="Our Lady Of Hope, Bedford      Bedford, Ohio      44146">Our Lady Of Hope, Bedford      Bedford, Ohio      44146</option>'+
          '<option value="Our Lady Of Loreto, Ft. Rucker      Ft. Rucker, AL">Our Lady Of Loreto, Ft. Rucker      Ft. Rucker, AL</option>'+
          '<option value="Our Lady Of Lourdes, Cleveland      Cleveland, OH      44127-1692">Our Lady Of Lourdes, Cleveland      Cleveland, OH      44127-1692</option>'+
          '<option value="Our Lady Of Lourdes, Genoa      Genoa, OH">Our Lady Of Lourdes, Genoa      Genoa, OH</option>'+
          '<option value="Our Lady Of Mount Carmel, Ashtabula      Ashtabula, Ohio      44004">Our Lady Of Mount Carmel, Ashtabula      Ashtabula, Ohio      44004</option>'+
          '<option value="Our Lady Of Mount Carmel, Cleveland      Cleveland      44102">Our Lady Of Mount Carmel, Cleveland      Cleveland      44102</option>'+
          '<option value="Our Lady Of Mt. Carmel, Wickliffe      Wickliffe, OH      44092-1896">Our Lady Of Mt. Carmel, Wickliffe      Wickliffe, OH      44092-1896</option>'+
          '<option value="Our Lady Of Peace, Cleveland      Cleveland, Ohio      44120">Our Lady Of Peace, Cleveland      Cleveland, Ohio      44120</option>'+
          '<option value="Our Lady Of Perpetual Help, Aurora      Aurora, OH      44202">Our Lady Of Perpetual Help, Aurora      Aurora, OH      44202</option>'+
          '<option value="Our Lady Of Perpetual Help, Cleveland      Cleveland Ohio      44119">Our Lady Of Perpetual Help, Cleveland      Cleveland Ohio      44119</option>'+
          '<option value="Our Lady Of Sorrows, Vestal      Vestal, NY">Our Lady Of Sorrows, Vestal      Vestal, NY</option>'+
          '<option value="Our Lady Of The Lake, Edinboro      Edinboro, PA">Our Lady Of The Lake, Edinboro      Edinboro, PA</option>'+
          '<option value="Our Lady of the Lakes, Euclid      Euclid, OH      44119">Our Lady of the Lakes, Euclid      Euclid, OH      44119</option>'+
          '<option value="Our Lady of the Lakes, Waterford      Waterford, MI      48329">Our Lady of the Lakes, Waterford      Waterford, MI      48329</option>'+
          '<option value="Our Lady\'s Immaculate Heart, Ankeny      Ankeny, IA">Our Lady\'s Immaculate Heart, Ankeny      Ankeny, IA</option>'+
          '<option value="Parroquia De Corpus Christi      Queretaro, Queretaro">Parroquia De Corpus Christi      Queretaro, Queretaro</option>'+
          '<option value="Peace Lutheran Church, Chardon      Chardon Ohio      44024">Peace Lutheran Church, Chardon      Chardon Ohio      44024</option>'+
          '<option value="Port Alfred Christian Centre      Port Alfred">Port Alfred Christian Centre      Port Alfred</option>'+
          '<option value="Redeemer Lutheran, Cuyahoga Falls      Cuyahoga Falls, OH      44221">Redeemer Lutheran, Cuyahoga Falls      Cuyahoga Falls, OH      44221</option>'+
          '<option value="Resurrection of Our Lord, Solon      Solon, OH      44139">Resurrection of Our Lord, Solon      Solon, OH      44139</option>'+
          '<option value="Resurrection Parish, Lexington      Lexington, Ohio      44904">Resurrection Parish, Lexington      Lexington, Ohio      44904</option>'+
          '<option value="Riverwood Community Chapel">Riverwood Community Chapel</option>'+
          '<option value="Sacred Heart of Jesus, S. Euclid      South Euclid, Ohio      44121-4085">Sacred Heart of Jesus, S. Euclid      South Euclid, Ohio      44121-4085</option>'+
          '<option value="Sacred Heart, Cullman      Cullman, Alabama">Sacred Heart, Cullman      Cullman, Alabama</option>'+
          '<option value="Sacred Heart, Malden      Malden, MA">Sacred Heart, Malden      Malden, MA</option>'+
          '<option value="Sacred Heart, Rock Creek      Rock Creek, OH      44084">Sacred Heart, Rock Creek      Rock Creek, OH      44084</option>'+
          '<option value="San Pedro Alcantara, Namiquipa, Chih.">San Pedro Alcantara, Namiquipa, Chih.</option>'+
          '<option value="St Anselm      Chesterland, OH">St Anselm      Chesterland, OH</option>'+
          '<option value="St Jude Thadeus      Trece Martires City">St Jude Thadeus      Trece Martires City</option>'+
          '<option value="St. Adelbert, Berea      Berea, OH      44017">St. Adelbert, Berea      Berea, OH      44017</option>'+
          '<option value="St. Agnes, Cleveland      Cleveland">St. Agnes, Cleveland      Cleveland</option>'+
          '<option value="St. Albert the Great, Kettering      Kettering, OH      45429">St. Albert the Great, Kettering      Kettering, OH      45429</option>'+
          '<option value="St. Alexander, Palos Hts.      Palos Heights, Illinois      60463">St. Alexander, Palos Hts.      Palos Heights, Illinois      60463</option>'+
          '<option value="St. Alphonsus, Davenport      Davenport, Iowa      52802">St. Alphonsus, Davenport      Davenport, Iowa      52802</option>'+
          '<option value="St. Ambrose, Brunswick      Brunswick, OH      44212">St. Ambrose, Brunswick      Brunswick, OH      44212</option>'+
          '<option value="St. Ambrose, Garrettsville      Garrettsville, OH      44231">St. Ambrose, Garrettsville      Garrettsville, OH      44231</option>'+
          '<option value="St. Ambrose, Hollywood      Hollywood, CA      90046">St. Ambrose, Hollywood      Hollywood, CA      90046</option>'+
          '<option value="St. Ambrose, Seymour      Seymour, Indiana      47274">St. Ambrose, Seymour      Seymour, Indiana      47274</option>'+
          '<option value="St. Andrew, Kingsville      Kingsville, Ohio      44048">St. Andrew, Kingsville      Kingsville, Ohio      44048</option>'+
          '<option value="St. Ann, Hiawatha      Hiawatha, KS">St. Ann, Hiawatha      Hiawatha, KS</option>'+
          '<option value="St. Ann, Marietta      Marietta,GA      30062">St. Ann, Marietta      Marietta,GA      30062</option>'+
          '<option value="St. Anselm, Chesterland      Chesterland, OH      44026-3199">St. Anselm, Chesterland      Chesterland, OH      44026-3199</option>'+
          '<option value="St. Anthony of Padua, Akron      Akron, OH      44310-3184">St. Anthony of Padua, Akron      Akron, OH      44310-3184</option>'+
          '<option value="St. Anthony of Padua, Fairport Harbor      Fairport Harbor, OH      44077-5696">St. Anthony of Padua, Fairport Harbor      Fairport Harbor, OH      44077-5696</option>'+
          '<option value="St. Anthony of Padua, Parma      Parma, OH      44134-4518">St. Anthony of Padua, Parma      Parma, OH      44134-4518</option>'+
          '<option value="St. Anthony of Padua, San Antonio      San Antonio, FL      33576">St. Anthony of Padua, San Antonio      San Antonio, FL      33576</option>'+
          '<option value="St. Augustine, Milwaukee      Milwaukee, WI      53207">St. Augustine, Milwaukee      Milwaukee, WI      53207</option>'+
          '<option value="St. Barnabas, Northfield      Northfield, OH      44067-2499">St. Barnabas, Northfield      Northfield, OH      44067-2499</option>'+
          '<option value="St. Bartholomew, Middleburg Hts.      Middleburg Heights, Ohio      44130">St. Bartholomew, Middleburg Hts.      Middleburg Heights, Ohio      44130</option>'+
          '<option value="St. Basil the Great, Brecksville      Brecksville, Ohio      44141">St. Basil the Great, Brecksville      Brecksville, Ohio      44141</option>'+
          '<option value="St. Bede the Venerable, Mentor      Mentor, OH      44060-1697">St. Bede the Venerable, Mentor      Mentor, OH      44060-1697</option>'+
          '<option value="St. Bernadette, Westlake      Westlake, OH      44145-4328">St. Bernadette, Westlake      Westlake, OH      44145-4328</option>'+
          '<option value="St. Bernard of Clairvaux, Cincinnati      Cincinnati, OH      45247">St. Bernard of Clairvaux, Cincinnati      Cincinnati, OH      45247</option>'+
          '<option value="St. Bernard, Akron      Akron, OH      44308">St. Bernard, Akron      Akron, OH      44308</option>'+
          '<option value="St. Boniface, Erie      Erie, PA      16509">St. Boniface, Erie      Erie, PA      16509</option>'+
          '<option value="St. Boniface, Lafayette      Lafayette, Indiana">St. Boniface, Lafayette      Lafayette, Indiana</option>'+
          '<option value="St. Brigid, San Antonio      San Antonio, TX      78240">St. Brigid, San Antonio      San Antonio, TX      78240</option>'+
          '<option value="St. Casimir, Cleveland      Cleveland, OH      44103">St. Casimir, Cleveland      Cleveland, OH      44103</option>'+
          '<option value="St. Catherine, Cleveland">St. Catherine, Cleveland</option>'+
          '<option value="St. Catherine, Crescent      Crescent, PA 15046">St. Catherine, Crescent      Crescent, PA 15046</option>'+
          '<option value="St. Cecelia,      Rochester, PA      15074">St. Cecelia,      Rochester, PA      15074</option>'+
          '<option value="St. Cecelia, Cleveland      Cleveland, OH">St. Cecelia, Cleveland      Cleveland, OH</option>'+
          '<option value="St. Cecelia, Rochester      Rochester, PA.">St. Cecelia, Rochester      Rochester, PA.</option>'+
          '<option value="St. Cecelia, Rochester PA">St. Cecelia, Rochester PA</option>'+
          '<option value="St. Cecilia">St. Cecilia</option>'+
          '<option value="St. Cecilia, Boston      Boston, Massachusetts      02115">St. Cecilia, Boston      Boston, Massachusetts      02115</option>'+
          '<option value="St. Charles Borromeo, Parma      Parma, OH">St. Charles Borromeo, Parma      Parma, OH</option>'+
          '<option value="St. Charles Borromeo, Youngstown      Youngstown, Ohio">St. Charles Borromeo, Youngstown      Youngstown, Ohio</option>'+
          '<option value="St. Christine, Euclid      Euclid, OH      44123-3317">St. Christine, Euclid      Euclid, OH      44123-3317</option>'+
          '<option value="St. Christopher by the River, Gates Mills      Gates Mills, OH">St. Christopher by the River, Gates Mills      Gates Mills, OH</option>'+
          '<option value="St. Christopher, Rocky River      Rocky River, OH">St. Christopher, Rocky River      Rocky River, OH</option>'+
          '<option value="St. Clare, Lyndhurst      Lyndhurst, OH      44124-2915">St. Clare, Lyndhurst      Lyndhurst, OH      44124-2915</option>'+
          '<option value="St. Clement, Calhoun      Calhoun, GA">St. Clement, Calhoun      Calhoun, GA</option>'+
          '<option value="St. Clement, Lakewood      Lakewood, OH      44107">St. Clement, Lakewood      Lakewood, OH      44107</option>'+
          '<option value="St. Colman, Cleveland      Cleveland, Ohio      44102">St. Colman, Cleveland      Cleveland, Ohio      44102</option>'+
          '<option value="St. Columba Cathedral, Youngstown      Youngstown Ohio">St. Columba Cathedral, Youngstown      Youngstown Ohio</option>'+
          '<option value="St. Columba, Ottowa      Ottawa, IL      61350">St. Columba, Ottowa      Ottawa, IL      61350</option>'+
          '<option value="St. Columban, Loveland      Loveland, Ohio">St. Columban, Loveland      Loveland, Ohio</option>'+
          '<option value="St. Columbkille, Parma      Parma, OH      44134-4898">St. Columbkille, Parma      Parma, OH      44134-4898</option>'+
          '<option value="St. Cosmos and Damien, Twinsburg      Twinsburg, OH      44087">St. Cosmos and Damien, Twinsburg      Twinsburg, OH      44087</option>'+
          '<option value="St. Dominic, Shaker Hts.      Shaker Heights, OH      44122-4967">St. Dominic, Shaker Hts.      Shaker Heights, OH      44122-4967</option>'+
          '<option value="St. Edward, Parkman      Parkman, OH      44080-0709">St. Edward, Parkman      Parkman, OH      44080-0709</option>'+
          '<option value="St. Elizabeth Ann Seton, Warren      Warren, Ohio      44484-5217">St. Elizabeth Ann Seton, Warren      Warren, Ohio      44484-5217</option>'+
          '<option value="St. Emeric, Cleveland      Cleveland/Ohio">St. Emeric, Cleveland      Cleveland/Ohio</option>'+
          '<option value="St. Eugene, Akron      Arron Ohio      44221">St. Eugene, Akron      Arron Ohio      44221</option>'+
          '<option value="St. FCO De Asis      Chih">St. FCO De Asis      Chih</option>'+
          '<option value="St. Felicitas, Euclid      Euclid, OH      44143-1299">St. Felicitas, Euclid      Euclid, OH      44143-1299</option>'+
          '<option value="St. Felipe de Jesus      Atotonlico el Alto, Jalisco">St. Felipe de Jesus      Atotonlico el Alto, Jalisco</option>'+
          '<option value="St. Francis De Sales, Lebenon      Lebenon, Ohio      45036-1352">St. Francis De Sales, Lebenon      Lebenon, Ohio      45036-1352</option>'+
          '<option value="St. Francis De Sales, Parma      Parma, OH      44134-2904">St. Francis De Sales, Parma      Parma, OH      44134-2904</option>'+
          '<option value="St. Francis Of Assisi, Ann Arbor      Ann Arbor, MI      48104">St. Francis Of Assisi, Ann Arbor      Ann Arbor, MI      48104</option>'+
          '<option value="St. Francis Of Assisi, Gates Mills      Gates Mills, OH      44040-9635">St. Francis Of Assisi, Gates Mills      Gates Mills, OH      44040-9635</option>'+
          '<option value="St. Francis Xavier, Ft. Myers      Ft. Myers, FL      33901">St. Francis Xavier, Ft. Myers      Ft. Myers, FL      33901</option>'+
          '<option value="St. Francis Xavier, Medina      Medina, OH      44256">St. Francis Xavier, Medina      Medina, OH      44256</option>'+
          '<option value="St. Gabriel, Concord      Concord, Ohio      44060-6294">St. Gabriel, Concord      Concord, Ohio      44060-6294</option>'+
          '<option value="St. Gregory, Euclid      South Euclid, OH      44121-4085">St. Gregory, Euclid      South Euclid, OH      44121-4085</option>'+
          '<option value="St. Hedwig, Detroit      Detroit, MI">St. Hedwig, Detroit      Detroit, MI</option>'+
          '<option value="St. Helen Church, Newbury      Newbury, OH      44065">St. Helen Church, Newbury      Newbury, OH      44065</option>'+
          '<option value="St. Helena, Cleveland      Cleveland, OH      44102">St. Helena, Cleveland      Cleveland, OH      44102</option>'+
          '<option value="St. Henry, Cleveland      Cleveland, OH      44128-1796">St. Henry, Cleveland      Cleveland, OH      44128-1796</option>'+
          '<option value="St. Hyacinth, Toledo      Toledo, Ohio      43607">St. Hyacinth, Toledo      Toledo, Ohio      43607</option>'+
          '<option value="St. Ignatius of Antioch, Cleveland      Cleveland, Ohio      44111-5470">St. Ignatius of Antioch, Cleveland      Cleveland, Ohio      44111-5470</option>'+
          '<option value="St. Ignatius of Loyola, Rogers City      Rogers City, MI      49779">St. Ignatius of Loyola, Rogers City      Rogers City, MI      49779</option>'+
          '<option value="St. Ignatius, San Francisco      San Francisco, CA      94118">St. Ignatius, San Francisco      San Francisco, CA      94118</option>'+
          '<option value="St. James De Chantal, Bethleham      Bethleham, PA">St. James De Chantal, Bethleham      Bethleham, PA</option>'+
          '<option value="St. James the Apostle, Carmel      Carmel, NY">St. James the Apostle, Carmel      Carmel, NY</option>'+
          '<option value="St. James, Lakewood      Lakewood, OH      44107">St. James, Lakewood      Lakewood, OH      44107</option>'+
          '<option value="St. James, Mukwonago      Mukwonago WI      53149">St. James, Mukwonago      Mukwonago WI      53149</option>'+
          '<option value="St. Jane de Chatel, Easton      Easton, PA      18045">St. Jane de Chatel, Easton      Easton, PA      18045</option>'+
          '<option value="St. Jerome, Cleveland      Cleveland, OH      44110-1298">St. Jerome, Cleveland      Cleveland, OH      44110-1298</option>'+
          '<option value="St. Joan Of Arc, Chagrin Falls      Chagrin Falls, OH      44022-2999">St. Joan Of Arc, Chagrin Falls      Chagrin Falls, OH      44022-2999</option>'+
          '<option value="St. Joan of Arc, Evanston      Evanston, IL">St. Joan of Arc, Evanston      Evanston, IL</option>'+
          '<option value="St. Joan Of Arc, Streetsboro      Streetsboro, OH      44241">St. Joan Of Arc, Streetsboro      Streetsboro, OH      44241</option>'+
          '<option value="St. John Bosco, Parma      Parma, OH      44130-2997">St. John Bosco, Parma      Parma, OH      44130-2997</option>'+
          '<option value="St. John Gualbert, Johnstown      Johnstown, PA">St. John Gualbert, Johnstown      Johnstown, PA</option>'+
          '<option value="St. John Lutheran      Garfield hts, OH      44125">St. John Lutheran      Garfield hts, OH      44125</option>'+
          '<option value="St. John Lutheran Church, Roanoke      Roanoke VA      24018">St. John Lutheran Church, Roanoke      Roanoke VA      24018</option>'+
          '<option value="St. John Neiman, Irvine      Irvine, CA">St. John Neiman, Irvine      Irvine, CA</option>'+
          '<option value="St. John Nepomucene, Cleveland      Cleveland, OH      44105-3357">St. John Nepomucene, Cleveland      Cleveland, OH      44105-3357</option>'+
          '<option value="St. John of the Cross, Euclid      Euclid, Ohio      44143">St. John of the Cross, Euclid      Euclid, Ohio      44143</option>'+
          '<option value="St. John Rochester, Fairporn      Fairporn, NY">St. John Rochester, Fairporn      Fairporn, NY</option>'+
          '<option value="St. John the Baptist, Somonauk      Somonauk, IL">St. John the Baptist, Somonauk      Somonauk, IL</option>'+
          '<option value="St. John Vianney, Flint      Flint, MI      48504">St. John Vianney, Flint      Flint, MI      48504</option>'+
          '<option value="St. John Vianney, Mentor      Mentor, Ohio      44060-3997">St. John Vianney, Mentor      Mentor, Ohio      44060-3997</option>'+
          '<option value="St. Joseph Cathedral, Columbus      Columbus, Ohio      43215">St. Joseph Cathedral, Columbus      Columbus, Ohio      43215</option>'+
          '<option value="St. Joseph Church, Richardson      Richardson, TX      75081">St. Joseph Church, Richardson      Richardson, TX      75081</option>'+
          '<option value="St. Joseph, Amherst      Amherst, Ohio      44001">St. Joseph, Amherst      Amherst, Ohio      44001</option>'+
          '<option value="St. Joseph, Cold Spring      Cold Spring, KY      41076-1895">St. Joseph, Cold Spring      Cold Spring, KY      41076-1895</option>'+
          '<option value="St. Joseph, Cuyahoga Falls      Cuyahoga Falls, Ohio      44221">St. Joseph, Cuyahoga Falls      Cuyahoga Falls, Ohio      44221</option>'+
          '<option value="St. Joseph, Dover      Dover Ohio      44622">St. Joseph, Dover      Dover Ohio      44622</option>'+
          '<option value="St. Joseph, Lucinda      Lucinda, Pennsylvania      16235">St. Joseph, Lucinda      Lucinda, Pennsylvania      16235</option>'+
          '<option value="St. Joseph, Mantua      Mantua, OH      44255">St. Joseph, Mantua      Mantua, OH      44255</option>'+
          '<option value="St. Joseph, Maumee      Maumee, OH      43537">St. Joseph, Maumee      Maumee, OH      43537</option>'+
          '<option value="St. Joseph, Port Huron      Port Huron, MI      48060">St. Joseph, Port Huron      Port Huron, MI      48060</option>'+
          '<option value="St. Joseph, South Bend      South Bend, IN      46617">St. Joseph, South Bend      South Bend, IN      46617</option>'+
          '<option value="St. Joseph, Sylvania      Sylvania Ohio      43560">St. Joseph, Sylvania      Sylvania Ohio      43560</option>'+
          '<option value="St. Joseph, Toledo      Toledo, Ohio      43697">St. Joseph, Toledo      Toledo, Ohio      43697</option>'+
          '<option value="St. Jude, Warrensville Hts.      Warrensville Hts., OH      44128-5986">St. Jude, Warrensville Hts.      Warrensville Hts., OH      44128-5986</option>'+
          '<option value="St. Justin Martyr, Eastlake      Eastlake, OH      44095-5095">St. Justin Martyr, Eastlake      Eastlake, OH      44095-5095</option>'+
          '<option value="St. Ladislas, Westlake      Westlake, OH      44145-2999">St. Ladislas, Westlake      Westlake, OH      44145-2999</option>'+
          '<option value="St. Lawrence, Cleveland      Cleveland, Ohio      44105-1521">St. Lawrence, Cleveland      Cleveland, Ohio      44105-1521</option>'+
          '<option value="St. Leo The Great, Cleveland      Cleveland, OH      44109-5799">St. Leo The Great, Cleveland      Cleveland, OH      44109-5799</option>'+
          '<option value="St. Louis, Louisville">St. Louis, Louisville</option>'+
          '<option value="St. Louis, Waco      Waco, TX      76708">St. Louis, Waco      Waco, TX      76708</option>'+
          '<option value="St. Lucy, Middlefield      Middlefield, OH      44062">St. Lucy, Middlefield      Middlefield, OH      44062</option>'+
          '<option value="St. Luke, Lakewood      Lakewood OH      44107">St. Luke, Lakewood      Lakewood OH      44107</option>'+
          '<option value="St. Margaret Mary, S. Euclid      South Euclid, Ohio      44121">St. Margaret Mary, S. Euclid      South Euclid, Ohio      44121</option>'+
          '<option value="St. Mark the Evangelist, Plano      Plano, Texas      75075">St. Mark the Evangelist, Plano      Plano, Texas      75075</option>'+
          '<option value="St. Mark, Cleveland      Cleveland, OH      44111-1084">St. Mark, Cleveland      Cleveland, OH      44111-1084</option>'+
          '<option value="St. Martha, Akron      Akron Ohio">St. Martha, Akron      Akron Ohio</option>'+
          '<option value="St. Martin of Tours, Maple Hts.      Maple Hts., OH      44137-4788">St. Martin of Tours, Maple Hts.      Maple Hts., OH      44137-4788</option>'+
          '<option value="St. Martin Of Tours, Santa Clara      Santa Clara, CA">St. Martin Of Tours, Santa Clara      Santa Clara, CA</option>'+
          '<option value="St. Martin of Tours, Valley City      Valley City, OH      44280">St. Martin of Tours, Valley City      Valley City, OH      44280</option>'+
          '<option value="St. Martin, St. Martin MN      St. Martin, MN      56376">St. Martin, St. Martin MN      St. Martin, MN      56376</option>'+
          '<option value="St. Mary Magdalene, Willowick      Willowick, Ohio      44095-3573">St. Mary Magdalene, Willowick      Willowick, Ohio      44095-3573</option>'+
          '<option value="St. Mary Magdalyn, Columbus      Columbus, OH      43204">St. Mary Magdalyn, Columbus      Columbus, OH      43204</option>'+
          '<option value="St. Mary of Czestochowa, New Kensington      New Kensington, PA      15068-5696">St. Mary of Czestochowa, New Kensington      New Kensington, PA      15068-5696</option>'+
          '<option value="St. Mary of Lourdes, Mayville      Mayville, NY      14757">St. Mary of Lourdes, Mayville      Mayville, NY      14757</option>'+
          '<option value="St. Mary of the Assumption, Cleveland      Cleveland, Ohio      44110">St. Mary of the Assumption, Cleveland      Cleveland, Ohio      44110</option>'+
          '<option value="St. Mary of the Assumption, Mentor      Mentor, Ohio      44060-5853">St. Mary of the Assumption, Mentor      Mentor, Ohio      44060-5853</option>'+
          '<option value="St. Mary of the Falls, Olmsted Falls      Olmsted Falls, OH">St. Mary of the Falls, Olmsted Falls      Olmsted Falls, OH</option>'+
          '<option value="St. Mary of tthe Assumption, Herman      Herman, PA      16039">St. Mary of tthe Assumption, Herman      Herman, PA      16039</option>'+
          '<option value="St. Mary, Bedford      Bedford, Ohio      44146">St. Mary, Bedford      Bedford, Ohio      44146</option>'+
          '<option value="St. Mary, Chardon      Chardon Ohio      44024">St. Mary, Chardon      Chardon Ohio      44024</option>'+
          '<option value="St. Mary, Cincinnati      Cincinnati, Ohio      45208">St. Mary, Cincinnati      Cincinnati, Ohio      45208</option>'+
          '<option value="St. Mary, Cleveland      Cleveland, OH      44110-2497">St. Mary, Cleveland      Cleveland, OH      44110-2497</option>'+
          '<option value="St. Mary, Davenport      Davenport, Iowa      52802">St. Mary, Davenport      Davenport, Iowa      52802</option>'+
          '<option value="St. Mary, Greenville      Greenville, South Carolina">St. Mary, Greenville      Greenville, South Carolina</option>'+
          '<option value="St. Mary, Hudson      Hudson, Ohio      44236">St. Mary, Hudson      Hudson, Ohio      44236</option>'+
          '<option value="St. Mary, Massillon      Massillon, OH      44646">St. Mary, Massillon      Massillon, OH      44646</option>'+
          '<option value="St. Mary, Mayville      Mayville, NY      14757">St. Mary, Mayville      Mayville, NY      14757</option>'+
          '<option value="St. Mary, Mentor      Mentor, OH      44060">St. Mary, Mentor      Mentor, OH      44060</option>'+
          '<option value="St. Mary, Montrose      Montrose, Colorado      81401">St. Mary, Montrose      Montrose, Colorado      81401</option>'+
          '<option value="St. Mary, Orwell      Orwell, Ohio      44076">St. Mary, Orwell      Orwell, Ohio      44076</option>'+
          '<option value="St. Mary, Ottawa      Ottawa, IL      61350">St. Mary, Ottawa      Ottawa, IL      61350</option>'+
          '<option value="St. Mary, Painesville      Painesville Ohio      44077">St. Mary, Painesville      Painesville Ohio      44077</option>'+
          '<option value="St. Mary, Shrewsbury      Shrewsbury, MA      01545">St. Mary, Shrewsbury      Shrewsbury, MA      01545</option>'+
          '<option value="St. Mary, St. Clairsville OH      St. Clairsville, Ohio      43950">St. Mary, St. Clairsville OH      St. Clairsville, Ohio      43950</option>'+
          '<option value="St. Mary, Swormville      Swormville, NY      14051">St. Mary, Swormville      Swormville, NY      14051</option>'+
          '<option value="St. Matthew, Glendale Hts.      Glendale Hts., IL      60139">St. Matthew, Glendale Hts.      Glendale Hts., IL      60139</option>'+
          '<option value="St. Mel, Cleveland      Cleveland Ohio      44111">St. Mel, Cleveland      Cleveland Ohio      44111</option>'+
          '<option value="St. Michael, Belvue      Belvue, Ohio">St. Michael, Belvue      Belvue, Ohio</option>'+
          '<option value="St. Michael, Independence      Cleveland, OH      44131">St. Michael, Independence      Cleveland, OH      44131</option>'+
          '<option value="St. Monica, Duluth      Duluth, GA      30097">St. Monica, Duluth      Duluth, GA      30097</option>'+
          '<option value="St. Monica, Garfield Hts.      Garfield Hts., OH      44125-5197">St. Monica, Garfield Hts.      Garfield Hts., OH      44125-5197</option>'+
          '<option value="St. Nicholas Byzantine, Cleveland      Cleveland, Ohio      44114">St. Nicholas Byzantine, Cleveland      Cleveland, Ohio      44114</option>'+
          '<option value="St. Noel, Willoughby Hills      Willoughby Hills, OH      44094-9193">St. Noel, Willoughby Hills      Willoughby Hills, OH      44094-9193</option>'+
          '<option value="St. Paschal Baylon, Highland Hts.      Highland Hts., OH      44143-3092">St. Paschal Baylon, Highland Hts.      Highland Hts., OH      44143-3092</option>'+
          '<option value="St. Patrick      Kent, OH">St. Patrick      Kent, OH</option>'+
          '<option value="St. Patrick, Ann Arbor      Ann Arbor, MI      48105">St. Patrick, Ann Arbor      Ann Arbor, MI      48105</option>'+
          '<option value="St. Patrick, Cleveland      Cleveland, OH      44113">St. Patrick, Cleveland      Cleveland, OH      44113</option>'+
          '<option value="St. Patrick, Cleveland      Cleveland, OH      44135">St. Patrick, Cleveland      Cleveland, OH      44135</option>'+
          '<option value="St. Patrick, Leetonia      Leetonia, OH">St. Patrick, Leetonia      Leetonia, OH</option>'+
          '<option value="St. Patrick, Ottawa      Ottawa, IL      61350">St. Patrick, Ottawa      Ottawa, IL      61350</option>'+
          '<option value="St. Patrick, Thompson      Thompson, OH      44086">St. Patrick, Thompson      Thompson, OH      44086</option>'+
          '<option value="St. Patrick, Wisconsin      Onalaska, WI">St. Patrick, Wisconsin      Onalaska, WI</option>'+
          '<option value="St. Patrick, Youngstown      Kinsman, Ohio      44428">St. Patrick, Youngstown      Kinsman, Ohio      44428</option>'+
          '<option value="St. Paul Croatian, Cleveland      Cleveland, Ohio      44103">St. Paul Croatian, Cleveland      Cleveland, Ohio      44103</option>'+
          '<option value="St. Paul the Apostle Church, Davenport, IA      Davenport, IA">St. Paul the Apostle Church, Davenport, IA      Davenport, IA</option>'+
          '<option value="St. Paul, Euclid      Euclid, OH      44117-1192">St. Paul, Euclid      Euclid, OH      44117-1192</option>'+
          '<option value="St. Paul, Euclid      Euclid, Ohio      44143">St. Paul, Euclid      Euclid, Ohio      44143</option>'+
          '<option value="St. Peter and Paul, Garfield Hts.      Garfield Heights, OH">St. Peter and Paul, Garfield Hts.      Garfield Heights, OH</option>'+
          '<option value="St. Peter Cathedral      Erie, PA">St. Peter Cathedral      Erie, PA</option>'+
          '<option value="St. Peter Parish, Skokie      Skokie, IL      60077">St. Peter Parish, Skokie      Skokie, IL      60077</option>'+
          '<option value="St. Peter the Apostle, Boerne      Boerne, TX      78006">St. Peter the Apostle, Boerne      Boerne, TX      78006</option>'+
          '<option value="St. Peter the Apostle, Brook Park      Brook Park, OH      44142-3503">St. Peter the Apostle, Brook Park      Brook Park, OH      44142-3503</option>'+
          '<option value="St. Peter, Cleveland      Cleveland, Ohio">St. Peter, Cleveland      Cleveland, Ohio</option>'+
          '<option value="St. Peter, Spring Grove      Spring Grove, IL 60081">St. Peter, Spring Grove      Spring Grove, IL 60081</option>'+
          '<option value="St. Philomena, E. Cleveland      East Cleveland, Ohio      44112">St. Philomena, E. Cleveland      East Cleveland, Ohio      44112</option>'+
          '<option value="St. Pius X, Bedford      Bedford, OH      44146-2296">St. Pius X, Bedford      Bedford, OH      44146-2296</option>'+
          '<option value="St. Pius X, Warren      Warren, Ohio      44485">St. Pius X, Warren      Warren, Ohio      44485</option>'+
          '<option value="St. Raphael, Bay Village      Bay Village, OH      44140-2366">St. Raphael, Bay Village      Bay Village, OH      44140-2366</option>'+
          '<option value="St. Richard, North Olmsted      North Olmsted, OH      44070-3260">St. Richard, North Olmsted      North Olmsted, OH      44070-3260</option>'+
          '<option value="St. Rita, Solon      Solon, OH      44139-4098">St. Rita, Solon      Solon, OH      44139-4098</option>'+
          '<option value="St. Robert Bellarmine, Euclid      Euclid, OH      44123-1200">St. Robert Bellarmine, Euclid      Euclid, OH      44123-1200</option>'+
          '<option value="St. Robert of Newminster, Ada      Ada, MI">St. Robert of Newminster, Ada      Ada, MI</option>'+
          '<option value="St. Roch, Indianapolis      Indianapolis IN      46227">St. Roch, Indianapolis      Indianapolis IN      46227</option>'+
          '<option value="St. Rose of Lima, Cleveland      Cleveland, OH      44102-2399">St. Rose of Lima, Cleveland      Cleveland, OH      44102-2399</option>'+
          '<option value="St. Rose, Girard      Girard,OH">St. Rose, Girard      Girard,OH</option>'+
          '<option value="St. Sebastian, Akron      Akron, OH      44320">St. Sebastian, Akron      Akron, OH      44320</option>'+
          '<option value="St. Sebastian, Ft. Lauderdale      Ft. Lauderdale, FL.      33316-3299">St. Sebastian, Ft. Lauderdale      Ft. Lauderdale, FL.      33316-3299</option>'+
          '<option value="St. Stanislaus, Cleveland      Cleveland, OH      44105-1293">St. Stanislaus, Cleveland      Cleveland, OH      44105-1293</option>'+
          '<option value="St. Stephen, Cleveland      Cleveland      44102">St. Stephen, Cleveland      Cleveland      44102</option>'+
          '<option value="St. Stephen, New Boston      New Boston, MI">St. Stephen, New Boston      New Boston, MI</option>'+
          '<option value="St. Stephen, Riverview      Riverview, FL      33569">St. Stephen, Riverview      Riverview, FL      33569</option>'+
          '<option value="St. Stephen, West Salem      West Salem, Ohio      44287">St. Stephen, West Salem      West Salem, Ohio      44287</option>'+
          '<option value="St. Sussana, Mason      Mason, Ohio      45050">St. Sussana, Mason      Mason, Ohio      45050</option>'+
          '<option value="St. Therese, Garfield Hts.      Garfield Hts.,  OH      44125-2698">St. Therese, Garfield Hts.      Garfield Hts.,  OH      44125-2698</option>'+
          '<option value="St. Thomas Aquinas, IA      Ames, IA      50014">St. Thomas Aquinas, IA      Ames, IA      50014</option>'+
          '<option value="St. Thomas Aquinas, IO      Ames, IA      50014">St. Thomas Aquinas, IO      Ames, IA      50014</option>'+
          '<option value="St. Thomas More, Brookings      Brookings, SD      57006">St. Thomas More, Brookings      Brookings, SD      57006</option>'+
          '<option value="St. Thomas More, Brooklyn OH      Brooklyn, OH      44144">St. Thomas More, Brooklyn OH      Brooklyn, OH      44144</option>'+
          '<option value="St. Thomas the Apostle, Crystal Lake      Crystal Lake, IL      60014">St. Thomas the Apostle, Crystal Lake      Crystal Lake, IL      60014</option>'+
          '<option value="St. Timothy, Garfield Hts.      Garfield Hts., OH">St. Timothy, Garfield Hts.      Garfield Hts., OH</option>'+
          '<option value="St. Vincent de Paul, Akron      Akron, OH      44303">St. Vincent de Paul, Akron      Akron, OH      44303</option>'+
          '<option value="St. Vincent de Paul, Cleveland      Cleveland, Ohio      44111">St. Vincent de Paul, Cleveland      Cleveland, Ohio      44111</option>'+
          '<option value="St. Vincent de Paul, Elyria      Elyria, OH      44035">St. Vincent de Paul, Elyria      Elyria, OH      44035</option>'+
          '<option value="St. Vincent, Vienna      Vienna, Ohio      44473">St. Vincent, Vienna      Vienna, Ohio      44473</option>'+
          '<option value="St. Vitus, Cleveland      Cleveland, Ohio      44103">St. Vitus, Cleveland      Cleveland, Ohio      44103</option>'+
          '<option value="St. Walter, Roselle      Roselle, IL">St. Walter, Roselle      Roselle, IL</option>'+
          '<option value="St. Wenceslas, Maple Hts.      Maple Hts., OH      44137-1598">St. Wenceslas, Maple Hts.      Maple Hts., OH      44137-1598</option>'+
          '<option value="St. William, Euclid      Euclid, OH      44132-1495">St. William, Euclid      Euclid, OH      44132-1495</option>'+
          '<option value="Sts. Cyril &amp; Methodius, Lakewood      Lakewood, OH      44107-4997">Sts. Cyril &amp; Methodius, Lakewood      Lakewood, OH      44107-4997</option>'+
          '<option value="Sts. Peter and Paul, Garfield Hts.      Garfield Hts">Sts. Peter and Paul, Garfield Hts.      Garfield Hts</option>'+
          '<option value="Sts. Peter and Paul, Hamburg      Hamburg, NY      14075-5059">Sts. Peter and Paul, Hamburg      Hamburg, NY      14075-5059</option>'+
          '<option value="Sts. Phillips &amp; James Church, Cleveland      Cleveland, OH      44111">Sts. Phillips &amp; James Church, Cleveland      Cleveland, OH      44111</option>'+
          '<option value="Sts. Robert and William, Euclid      Euclid, Ohio      44132">Sts. Robert and William, Euclid      Euclid, Ohio      44132</option>'+
          '<option value="The Church of the Good Shepherd, Cumming, GA      Cumming, GA      30041">The Church of the Good Shepherd, Cumming, GA      Cumming, GA      30041</option>'+
          '<option value="Transfiguration, Lakewood      Lakewood, Ohio      44107">Transfiguration, Lakewood      Lakewood, Ohio      44107</option>'+
          '<option value="Tribunal Cleveland, Ohio      Cleveland Ohio      44114">Tribunal Cleveland, Ohio      Cleveland Ohio      44114</option>'+
          '<option value="Trinity English Luthern Church      Fort Wayne, IN">Trinity English Luthern Church      Fort Wayne, IN</option>'+
          '<option value="United Methodist Church Chagrin Falls      Chagrin Falls, Ohio">United Methodist Church Chagrin Falls      Chagrin Falls, Ohio</option>'+
          '<option value="USAG Chapel      Wiesbader">USAG Chapel      Wiesbader</option>'+
          '<option value="Valley Lutheran      Chagrin Falls, Oh">Valley Lutheran      Chagrin Falls, Oh</option>'+
          '<option value="Virger del Carmen      Villahermosa, Tabasco">Virger del Carmen      Villahermosa, Tabasco</option>'+
          '<option value="Vogelweh Chapel &quot;Military Orinariate&quot;      New York 22., New York">Vogelweh Chapel &quot;Military Orinariate&quot;      New York 22., New York</option>'+
          '<option value="Willoughby, United Methodist">Willoughby, United Methodist</option>'+
          '</select>';
        formTabIndex = formTabIndex + 1;
        var tr16 = document.createElement('tr');
        tr16.setAttribute('name', 'tr16'+memNum);
        tr16.setAttribute('id', 'tr16'+memNum);
        mainTableBody.appendChild(tr16);
        tr16.insertCell(0).innerHTML = '<td></td>';
        tr16.insertCell(1).innerHTML = '<td></td>';
        var td16 = document.createElement('td');
        td16.setAttribute('id', 'td16'+memNum);
        td16.setAttribute('colspan', '2');
        tr16.appendChild(td16);
        td16.innerHTML = '<span class="lbl">&nbsp;&nbsp;&nbsp;Nullity</span><input type="hidden" name="txaMem'+memNum+'Sac5Name" id="txaMem'+memNum+'Sac5Name" value="Nullity" />';
        var td17 = document.createElement('td');
        td17.setAttribute('id', 'td17'+memNum);
        td17.setAttribute('colspan', '1');
        tr16.appendChild(td17);
        td17.innerHTML = ' <select tabindex="211" name="cboMem'+memNum+'Sac5" id="cboMem'+memNum+'Sac5" class="pulldownstyle"><option value="" /><option value="Yes">Yes</option><option value="No">No</option></select>';
        var td18 = document.createElement('td');
        td18.setAttribute('id', 'td18'+memNum);
        td18.setAttribute('colspan', '1');
        tr16.appendChild(td18);
        td18.innerHTML = '<input tabindex="'+(formTabIndex+1)+'" style="width:100px" autocomplete="off" value="mm/dd/yyyy" title="enter the nullity date" name="dteMem'+memNum+'Sac5Date" id="dteMem'+memNum+'Sac5Date" maxlength="10" onkeydown="onKeyPressed(event, this);" onFocus="this.select()" class="textboxstyle dateInput" onchange="checkDate(this.id)" onkeyup="DoKeyUp(this)" />';
        calendar.set('dteMem'+memNum+'Sac5Date');
        formTabIndex = formTabIndex + 1;
        var td19 = document.createElement('td');
        td19.setAttribute('id', 'td19'+memNum);
        td19.setAttribute('colspan', '2');
        tr16.appendChild(td19);
        td19.innerHTML = 
          '<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Sac5Place" id="cboMem'+memNum+'Sac5Place" title="Select a place in the pull down list" style="width: 166px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Bethany Covenant Church, Lyndhurst      Lyndhurst, Oh.">Bethany Covenant Church, Lyndhurst      Lyndhurst, Oh.</option>'+
          '<option value="Blessed Sacrament, Valley Stream, NY      Valley Stream, NY      11580">Blessed Sacrament, Valley Stream, NY      Valley Stream, NY      11580</option>'+
          '<option value="Blessed Sacrament, Warren      Warren Ohio      44483">Blessed Sacrament, Warren      Warren Ohio      44483</option>'+
          '<option value="Blessed Trinity, Cleveland      Cleveland, Ohio 44135">Blessed Trinity, Cleveland      Cleveland, Ohio 44135</option>'+
          '<option value="Braceville Community Church, Newton Falls      Newton Falls, Ohio">Braceville Community Church, Newton Falls      Newton Falls, Ohio</option>'+
          '<option value="Burton Congregational Church      Burton, OH      44021">Burton Congregational Church      Burton, OH      44021</option>'+
          '<option value="Cathedral Basilica of St. Peter in Chains, Cincinnati      Lebanon, OH      45036">Cathedral Basilica of St. Peter in Chains, Cincinnati      Lebanon, OH      45036</option>'+
          '<option value="Cathedral of Christ the King, Lexington      Lexington, KY      40502-2322">Cathedral of Christ the King, Lexington      Lexington, KY      40502-2322</option>'+
          '<option value="Cathedral of St. John the Evangelist, Cleveland      Cleveland, Ohio      44114-2582">Cathedral of St. John the Evangelist, Cleveland      Cleveland, Ohio      44114-2582</option>'+
          '<option value="Christ the King, Akron      Akron Ohio      44310">Christ the King, Akron      Akron Ohio      44310</option>'+
          '<option value="Christ the King, Cleveland      East Cleveland, OH      44112-1636">Christ the King, Cleveland      East Cleveland, OH      44112-1636</option>'+
          '<option value="Christ The King, Las Vegas      Las Vegas, NV      89118">Christ The King, Las Vegas      Las Vegas, NV      89118</option>'+
          '<option value="Church of Annunciation, Cleveland      Cleveland, OH      44135">Church of Annunciation, Cleveland      Cleveland, OH      44135</option>'+
          '<option value="Church of Beloved Disciple, Grove City      Grove City, PA      16127">Church of Beloved Disciple, Grove City      Grove City, PA      16127</option>'+
          '<option value="Church of St. Anthony, Joliet      Joliet, IL      60432-4210">Church of St. Anthony, Joliet      Joliet, IL      60432-4210</option>'+
          '<option value="Church of St. Mary and St. Joseph, Newton Falls      Newton Falls, Ohio      44444">Church of St. Mary and St. Joseph, Newton Falls      Newton Falls, Ohio      44444</option>'+
          '<option value="Church of the Assumption, Broadview Hts.      Broadview Heights, Ohio      44147">Church of the Assumption, Broadview Hts.      Broadview Heights, Ohio      44147</option>'+
          '<option value="Church of the Blessed Sacrament, Warren      Warren Ohio      44483">Church of the Blessed Sacrament, Warren      Warren Ohio      44483</option>'+
          '<option value="Church of the Incarnation, Centerville      Centerville, Ohio      45459">Church of the Incarnation, Centerville      Centerville, Ohio      45459</option>'+
          '<option value="Church Of The Resurection, New Albany      New Albany, Ohio">Church Of The Resurection, New Albany      New Albany, Ohio</option>'+
          '<option value="Communion of Saints, Cleveland Hts.      Cleveland Heights, Ohio      44118">Communion of Saints, Cleveland Hts.      Cleveland Heights, Ohio      44118</option>'+
          '<option value="Curch of the Annunciation, Cleveland      Cleveland, Ohio      44135">Curch of the Annunciation, Cleveland      Cleveland, Ohio      44135</option>'+
          '<option value="Divine Word, Kirtland      Kirtland, OH      44094-9714">Divine Word, Kirtland      Kirtland, OH      44094-9714</option>'+
          '<option value="First Congregational Church of Claridon      Chardon, OH      44024">First Congregational Church of Claridon      Chardon, OH      44024</option>'+
          '<option value="First Presbyterian, East Cleveland      East cleveland ohio">First Presbyterian, East Cleveland      East cleveland ohio</option>'+
          '<option value="Germany">Germany</option>'+
          '<option value="Gesu, Universtiy Hts.      University Hts., OH      44118-3896">Gesu, Universtiy Hts.      University Hts., OH      44118-3896</option>'+
          '<option value="Holy Angels, Chagrin Falls      Chagrin Falls,  OH      44023-4879">Holy Angels, Chagrin Falls      Chagrin Falls,  OH      44023-4879</option>'+
          '<option value="Holy Cross, Euclid      Euclid, OH      44119-1066">Holy Cross, Euclid      Euclid, OH      44119-1066</option>'+
          '<option value="Holy Family Parish (Archives)      Cleveland, Ohio      44114">Holy Family Parish (Archives)      Cleveland, Ohio      44114</option>'+
          '<option value="Holy Family, Endwell      Endwell, NY      13760">Holy Family, Endwell      Endwell, NY      13760</option>'+
          '<option value="Holy Family, Parma      Parma, OH      44130">Holy Family, Parma      Parma, OH      44130</option>'+
          '<option value="Holy Family, Stow      Stow, OH      44224">Holy Family, Stow      Stow, OH      44224</option>'+
          '<option value="Holy Name, Cleveland      Cleveland, OH">Holy Name, Cleveland      Cleveland, OH</option>'+
          '<option value="Holy Redeemer, Cleveland      Cleveland, OH      44110-3104">Holy Redeemer, Cleveland      Cleveland, OH      44110-3104</option>'+
          '<option value="Holy Rosary, Cleveland      Cleveland, OH      44106-1996">Holy Rosary, Cleveland      Cleveland, OH      44106-1996</option>'+
          '<option value="Holy Trinity, Avon      Avon, Ohio      44011">Holy Trinity, Avon      Avon, Ohio      44011</option>'+
          '<option value="Holy Trinity, Bedford Hts.      Bedford Hts., OH      44146-2599">Holy Trinity, Bedford Hts.      Bedford Hts., OH      44146-2599</option>'+
          '<option value="Immaculate Conception Church Madison      Madison Ohio">Immaculate Conception Church Madison      Madison Ohio</option>'+
          '<option value="Immaculate Conception, Bellevue      Bellevue, OH      44811">Immaculate Conception, Bellevue      Bellevue, OH      44811</option>'+
          '<option value="Immaculate Conception, Cleveland      Cleveland, OH      44103-1179">Immaculate Conception, Cleveland      Cleveland, OH      44103-1179</option>'+
          '<option value="Immaculate Conception, Durham      Durham, NC      27701">Immaculate Conception, Durham      Durham, NC      27701</option>'+
          '<option value="Immaculate Conception, Willoughby      Willoughby, Ohio">Immaculate Conception, Willoughby      Willoughby, Ohio</option>'+
          '<option value="Immaculate Heart of Mary, Cuyahoga Falls      Cuyahoga Falls, Ohio      44223">Immaculate Heart of Mary, Cuyahoga Falls      Cuyahoga Falls, Ohio      44223</option>'+
          '<option value="King of Kings Evangelical Lutheran Church, Willoughby      Willoughby, Ohio      44094-7570">King of Kings Evangelical Lutheran Church, Willoughby      Willoughby, Ohio      44094-7570</option>'+
          '<option value="Lake Shore Christian Church, Cleveland      Cleveland, OH      44132">Lake Shore Christian Church, Cleveland      Cleveland, OH      44132</option>'+
          '<option value="Lord of Life Lutheran Church, Chagrin Falls      Chagrin Falls, Ohio      44023">Lord of Life Lutheran Church, Chagrin Falls      Chagrin Falls, Ohio      44023</option>'+
          '<option value="Mariapoch Shrine, Burton      Burton, OH      44021">Mariapoch Shrine, Burton      Burton, OH      44021</option>'+
          '<option value="Mary Queen of Peace, Cleveland      Cleveland, Ohio      44109">Mary Queen of Peace, Cleveland      Cleveland, Ohio      44109</option>'+
          '<option value="Most Holy Trinity Church, Chesterland      Chesterland">Most Holy Trinity Church, Chesterland      Chesterland</option>'+
          '<option value="Mother of Mercy, Washington NC      Washington, NC      27889">Mother of Mercy, Washington NC      Washington, NC      27889</option>'+
          '<option value="Mother of Sorrows, Peninsula      Peninsula, Ohio      44264">Mother of Sorrows, Peninsula      Peninsula, Ohio      44264</option>'+
          '<option value="Nativity of Our Lord Church, Orchard Park      Orchard Park, NY      14127">Nativity of Our Lord Church, Orchard Park      Orchard Park, NY      14127</option>'+
          '<option value="Nativity of the Blessed Virgin Mary, South Amherst      South Amherst, OH      44001">Nativity of the Blessed Virgin Mary, South Amherst      South Amherst, OH      44001</option>'+
          '<option value="Newton Falls United Methodist      Newton Falls, Ohio">Newton Falls United Methodist      Newton Falls, Ohio</option>'+
          '<option value="North American Martyrs Church, Monroville      Monroville, PA">North American Martyrs Church, Monroville      Monroville, PA</option>'+
          '<option value="Other">Other</option>'+
          '<option value="Our Lady Chapel/Gilmour, Gates Mills      Gates Mills,  Ohio      44040">Our Lady Chapel/Gilmour, Gates Mills      Gates Mills,  Ohio      44040</option>'+
          '<option value="Our Lady Of Good Council, Cleveland      Cleveland, OH      44109">Our Lady Of Good Council, Cleveland      Cleveland, OH      44109</option>'+
          '<option value="Our Lady Of Grace, Hickley      Hickley, OH      44233">Our Lady Of Grace, Hickley      Hickley, OH      44233</option>'+
          '<option value="Our Lady Of Guadalupe, Macedonia      Macedonia, OH      44056-1450">Our Lady Of Guadalupe, Macedonia      Macedonia, OH      44056-1450</option>'+
          '<option value="Our Lady Of Hope, Bedford      Bedford, Ohio      44146">Our Lady Of Hope, Bedford      Bedford, Ohio      44146</option>'+
          '<option value="Our Lady Of Loreto, Ft. Rucker      Ft. Rucker, AL">Our Lady Of Loreto, Ft. Rucker      Ft. Rucker, AL</option>'+
          '<option value="Our Lady Of Lourdes, Cleveland      Cleveland, OH      44127-1692">Our Lady Of Lourdes, Cleveland      Cleveland, OH      44127-1692</option>'+
          '<option value="Our Lady Of Lourdes, Genoa      Genoa, OH">Our Lady Of Lourdes, Genoa      Genoa, OH</option>'+
          '<option value="Our Lady Of Mount Carmel, Ashtabula      Ashtabula, Ohio      44004">Our Lady Of Mount Carmel, Ashtabula      Ashtabula, Ohio      44004</option>'+
          '<option value="Our Lady Of Mount Carmel, Cleveland      Cleveland      44102">Our Lady Of Mount Carmel, Cleveland      Cleveland      44102</option>'+
          '<option value="Our Lady Of Mt. Carmel, Wickliffe      Wickliffe, OH      44092-1896">Our Lady Of Mt. Carmel, Wickliffe      Wickliffe, OH      44092-1896</option>'+
          '<option value="Our Lady Of Peace, Cleveland      Cleveland, Ohio      44120">Our Lady Of Peace, Cleveland      Cleveland, Ohio      44120</option>'+
          '<option value="Our Lady Of Perpetual Help, Aurora      Aurora, OH      44202">Our Lady Of Perpetual Help, Aurora      Aurora, OH      44202</option>'+
          '<option value="Our Lady Of Perpetual Help, Cleveland      Cleveland Ohio      44119">Our Lady Of Perpetual Help, Cleveland      Cleveland Ohio      44119</option>'+
          '<option value="Our Lady Of Sorrows, Vestal      Vestal, NY">Our Lady Of Sorrows, Vestal      Vestal, NY</option>'+
          '<option value="Our Lady Of The Lake, Edinboro      Edinboro, PA">Our Lady Of The Lake, Edinboro      Edinboro, PA</option>'+
          '<option value="Our Lady of the Lakes, Euclid      Euclid, OH      44119">Our Lady of the Lakes, Euclid      Euclid, OH      44119</option>'+
          '<option value="Our Lady of the Lakes, Waterford      Waterford, MI      48329">Our Lady of the Lakes, Waterford      Waterford, MI      48329</option>'+
          '<option value="Our Lady\'s Immaculate Heart, Ankeny      Ankeny, IA">Our Lady\'s Immaculate Heart, Ankeny      Ankeny, IA</option>'+
          '<option value="Parroquia De Corpus Christi      Queretaro, Queretaro">Parroquia De Corpus Christi      Queretaro, Queretaro</option>'+
          '<option value="Peace Lutheran Church, Chardon      Chardon Ohio      44024">Peace Lutheran Church, Chardon      Chardon Ohio      44024</option>'+
          '<option value="Port Alfred Christian Centre      Port Alfred">Port Alfred Christian Centre      Port Alfred</option>'+
          '<option value="Redeemer Lutheran, Cuyahoga Falls      Cuyahoga Falls, OH      44221">Redeemer Lutheran, Cuyahoga Falls      Cuyahoga Falls, OH      44221</option>'+
          '<option value="Resurrection of Our Lord, Solon      Solon, OH      44139">Resurrection of Our Lord, Solon      Solon, OH      44139</option>'+
          '<option value="Resurrection Parish, Lexington      Lexington, Ohio      44904">Resurrection Parish, Lexington      Lexington, Ohio      44904</option>'+
          '<option value="Riverwood Community Chapel">Riverwood Community Chapel</option>'+
          '<option value="Sacred Heart of Jesus, S. Euclid      South Euclid, Ohio      44121-4085">Sacred Heart of Jesus, S. Euclid      South Euclid, Ohio      44121-4085</option>'+
          '<option value="Sacred Heart, Cullman      Cullman, Alabama">Sacred Heart, Cullman      Cullman, Alabama</option>'+
          '<option value="Sacred Heart, Malden      Malden, MA">Sacred Heart, Malden      Malden, MA</option>'+
          '<option value="Sacred Heart, Rock Creek      Rock Creek, OH      44084">Sacred Heart, Rock Creek      Rock Creek, OH      44084</option>'+
          '<option value="San Pedro Alcantara, Namiquipa, Chih.">San Pedro Alcantara, Namiquipa, Chih.</option>'+
          '<option value="St Anselm      Chesterland, OH">St Anselm      Chesterland, OH</option>'+
          '<option value="St Jude Thadeus      Trece Martires City">St Jude Thadeus      Trece Martires City</option>'+
          '<option value="St. Adelbert, Berea      Berea, OH      44017">St. Adelbert, Berea      Berea, OH      44017</option>'+
          '<option value="St. Agnes, Cleveland      Cleveland">St. Agnes, Cleveland      Cleveland</option>'+
          '<option value="St. Albert the Great, Kettering      Kettering, OH      45429">St. Albert the Great, Kettering      Kettering, OH      45429</option>'+
          '<option value="St. Alexander, Palos Hts.      Palos Heights, Illinois      60463">St. Alexander, Palos Hts.      Palos Heights, Illinois      60463</option>'+
          '<option value="St. Alphonsus, Davenport      Davenport, Iowa      52802">St. Alphonsus, Davenport      Davenport, Iowa      52802</option>'+
          '<option value="St. Ambrose, Brunswick      Brunswick, OH      44212">St. Ambrose, Brunswick      Brunswick, OH      44212</option>'+
          '<option value="St. Ambrose, Garrettsville      Garrettsville, OH      44231">St. Ambrose, Garrettsville      Garrettsville, OH      44231</option>'+
          '<option value="St. Ambrose, Hollywood      Hollywood, CA      90046">St. Ambrose, Hollywood      Hollywood, CA      90046</option>'+
          '<option value="St. Ambrose, Seymour      Seymour, Indiana      47274">St. Ambrose, Seymour      Seymour, Indiana      47274</option>'+
          '<option value="St. Andrew, Kingsville      Kingsville, Ohio      44048">St. Andrew, Kingsville      Kingsville, Ohio      44048</option>'+
          '<option value="St. Ann, Hiawatha      Hiawatha, KS">St. Ann, Hiawatha      Hiawatha, KS</option>'+
          '<option value="St. Ann, Marietta      Marietta,GA      30062">St. Ann, Marietta      Marietta,GA      30062</option>'+
          '<option value="St. Anselm, Chesterland      Chesterland, OH      44026-3199">St. Anselm, Chesterland      Chesterland, OH      44026-3199</option>'+
          '<option value="St. Anthony of Padua, Akron      Akron, OH      44310-3184">St. Anthony of Padua, Akron      Akron, OH      44310-3184</option>'+
          '<option value="St. Anthony of Padua, Fairport Harbor      Fairport Harbor, OH      44077-5696">St. Anthony of Padua, Fairport Harbor      Fairport Harbor, OH      44077-5696</option>'+
          '<option value="St. Anthony of Padua, Parma      Parma, OH      44134-4518">St. Anthony of Padua, Parma      Parma, OH      44134-4518</option>'+
          '<option value="St. Anthony of Padua, San Antonio      San Antonio, FL      33576">St. Anthony of Padua, San Antonio      San Antonio, FL      33576</option>'+
          '<option value="St. Augustine, Milwaukee      Milwaukee, WI      53207">St. Augustine, Milwaukee      Milwaukee, WI      53207</option>'+
          '<option value="St. Barnabas, Northfield      Northfield, OH      44067-2499">St. Barnabas, Northfield      Northfield, OH      44067-2499</option>'+
          '<option value="St. Bartholomew, Middleburg Hts.      Middleburg Heights, Ohio      44130">St. Bartholomew, Middleburg Hts.      Middleburg Heights, Ohio      44130</option>'+
          '<option value="St. Basil the Great, Brecksville      Brecksville, Ohio      44141">St. Basil the Great, Brecksville      Brecksville, Ohio      44141</option>'+
          '<option value="St. Bede the Venerable, Mentor      Mentor, OH      44060-1697">St. Bede the Venerable, Mentor      Mentor, OH      44060-1697</option>'+
          '<option value="St. Bernadette, Westlake      Westlake, OH      44145-4328">St. Bernadette, Westlake      Westlake, OH      44145-4328</option>'+
          '<option value="St. Bernard of Clairvaux, Cincinnati      Cincinnati, OH      45247">St. Bernard of Clairvaux, Cincinnati      Cincinnati, OH      45247</option>'+
          '<option value="St. Bernard, Akron      Akron, OH      44308">St. Bernard, Akron      Akron, OH      44308</option>'+
          '<option value="St. Boniface, Erie      Erie, PA      16509">St. Boniface, Erie      Erie, PA      16509</option>'+
          '<option value="St. Boniface, Lafayette      Lafayette, Indiana">St. Boniface, Lafayette      Lafayette, Indiana</option>'+
          '<option value="St. Brigid, San Antonio      San Antonio, TX      78240">St. Brigid, San Antonio      San Antonio, TX      78240</option>'+
          '<option value="St. Casimir, Cleveland      Cleveland, OH      44103">St. Casimir, Cleveland      Cleveland, OH      44103</option>'+
          '<option value="St. Catherine, Cleveland">St. Catherine, Cleveland</option>'+
          '<option value="St. Catherine, Crescent      Crescent, PA 15046">St. Catherine, Crescent      Crescent, PA 15046</option>'+
          '<option value="St. Cecelia,      Rochester, PA      15074">St. Cecelia,      Rochester, PA      15074</option>'+
          '<option value="St. Cecelia, Cleveland      Cleveland, OH">St. Cecelia, Cleveland      Cleveland, OH</option>'+
          '<option value="St. Cecelia, Rochester      Rochester, PA.">St. Cecelia, Rochester      Rochester, PA.</option>'+
          '<option value="St. Cecelia, Rochester PA">St. Cecelia, Rochester PA</option>'+
          '<option value="St. Cecilia">St. Cecilia</option>'+
          '<option value="St. Cecilia, Boston      Boston, Massachusetts      02115">St. Cecilia, Boston      Boston, Massachusetts      02115</option>'+
          '<option value="St. Charles Borromeo, Parma      Parma, OH">St. Charles Borromeo, Parma      Parma, OH</option>'+
          '<option value="St. Charles Borromeo, Youngstown      Youngstown, Ohio">St. Charles Borromeo, Youngstown      Youngstown, Ohio</option>'+
          '<option value="St. Christine, Euclid      Euclid, OH      44123-3317">St. Christine, Euclid      Euclid, OH      44123-3317</option>'+
          '<option value="St. Christopher by the River, Gates Mills      Gates Mills, OH">St. Christopher by the River, Gates Mills      Gates Mills, OH</option>'+
          '<option value="St. Christopher, Rocky River      Rocky River, OH">St. Christopher, Rocky River      Rocky River, OH</option>'+
          '<option value="St. Clare, Lyndhurst      Lyndhurst, OH      44124-2915">St. Clare, Lyndhurst      Lyndhurst, OH      44124-2915</option>'+
          '<option value="St. Clement, Calhoun      Calhoun, GA">St. Clement, Calhoun      Calhoun, GA</option>'+
          '<option value="St. Clement, Lakewood      Lakewood, OH      44107">St. Clement, Lakewood      Lakewood, OH      44107</option>'+
          '<option value="St. Colman, Cleveland      Cleveland, Ohio      44102">St. Colman, Cleveland      Cleveland, Ohio      44102</option>'+
          '<option value="St. Columba Cathedral, Youngstown      Youngstown Ohio">St. Columba Cathedral, Youngstown      Youngstown Ohio</option>'+
          '<option value="St. Columba, Ottowa      Ottawa, IL      61350">St. Columba, Ottowa      Ottawa, IL      61350</option>'+
          '<option value="St. Columban, Loveland      Loveland, Ohio">St. Columban, Loveland      Loveland, Ohio</option>'+
          '<option value="St. Columbkille, Parma      Parma, OH      44134-4898">St. Columbkille, Parma      Parma, OH      44134-4898</option>'+
          '<option value="St. Cosmos and Damien, Twinsburg      Twinsburg, OH      44087">St. Cosmos and Damien, Twinsburg      Twinsburg, OH      44087</option>'+
          '<option value="St. Dominic, Shaker Hts.      Shaker Heights, OH      44122-4967">St. Dominic, Shaker Hts.      Shaker Heights, OH      44122-4967</option>'+
          '<option value="St. Edward, Parkman      Parkman, OH      44080-0709">St. Edward, Parkman      Parkman, OH      44080-0709</option>'+
          '<option value="St. Elizabeth Ann Seton, Warren      Warren, Ohio      44484-5217">St. Elizabeth Ann Seton, Warren      Warren, Ohio      44484-5217</option>'+
          '<option value="St. Emeric, Cleveland      Cleveland/Ohio">St. Emeric, Cleveland      Cleveland/Ohio</option>'+
          '<option value="St. Eugene, Akron      Arron Ohio      44221">St. Eugene, Akron      Arron Ohio      44221</option>'+
          '<option value="St. FCO De Asis      Chih">St. FCO De Asis      Chih</option>'+
          '<option value="St. Felicitas, Euclid      Euclid, OH      44143-1299">St. Felicitas, Euclid      Euclid, OH      44143-1299</option>'+
          '<option value="St. Felipe de Jesus      Atotonlico el Alto, Jalisco">St. Felipe de Jesus      Atotonlico el Alto, Jalisco</option>'+
          '<option value="St. Francis De Sales, Lebenon      Lebenon, Ohio      45036-1352">St. Francis De Sales, Lebenon      Lebenon, Ohio      45036-1352</option>'+
          '<option value="St. Francis De Sales, Parma      Parma, OH      44134-2904">St. Francis De Sales, Parma      Parma, OH      44134-2904</option>'+
          '<option value="St. Francis Of Assisi, Ann Arbor      Ann Arbor, MI      48104">St. Francis Of Assisi, Ann Arbor      Ann Arbor, MI      48104</option>'+
          '<option value="St. Francis Of Assisi, Gates Mills      Gates Mills, OH      44040-9635">St. Francis Of Assisi, Gates Mills      Gates Mills, OH      44040-9635</option>'+
          '<option value="St. Francis Xavier, Ft. Myers      Ft. Myers, FL      33901">St. Francis Xavier, Ft. Myers      Ft. Myers, FL      33901</option>'+
          '<option value="St. Francis Xavier, Medina      Medina, OH      44256">St. Francis Xavier, Medina      Medina, OH      44256</option>'+
          '<option value="St. Gabriel, Concord      Concord, Ohio      44060-6294">St. Gabriel, Concord      Concord, Ohio      44060-6294</option>'+
          '<option value="St. Gregory, Euclid      South Euclid, OH      44121-4085">St. Gregory, Euclid      South Euclid, OH      44121-4085</option>'+
          '<option value="St. Hedwig, Detroit      Detroit, MI">St. Hedwig, Detroit      Detroit, MI</option>'+
          '<option value="St. Helen Church, Newbury      Newbury, OH      44065">St. Helen Church, Newbury      Newbury, OH      44065</option>'+
          '<option value="St. Helena, Cleveland      Cleveland, OH      44102">St. Helena, Cleveland      Cleveland, OH      44102</option>'+
          '<option value="St. Henry, Cleveland      Cleveland, OH      44128-1796">St. Henry, Cleveland      Cleveland, OH      44128-1796</option>'+
          '<option value="St. Hyacinth, Toledo      Toledo, Ohio      43607">St. Hyacinth, Toledo      Toledo, Ohio      43607</option>'+
          '<option value="St. Ignatius of Antioch, Cleveland      Cleveland, Ohio      44111-5470">St. Ignatius of Antioch, Cleveland      Cleveland, Ohio      44111-5470</option>'+
          '<option value="St. Ignatius of Loyola, Rogers City      Rogers City, MI      49779">St. Ignatius of Loyola, Rogers City      Rogers City, MI      49779</option>'+
          '<option value="St. Ignatius, San Francisco      San Francisco, CA      94118">St. Ignatius, San Francisco      San Francisco, CA      94118</option>'+
          '<option value="St. James De Chantal, Bethleham      Bethleham, PA">St. James De Chantal, Bethleham      Bethleham, PA</option>'+
          '<option value="St. James the Apostle, Carmel      Carmel, NY">St. James the Apostle, Carmel      Carmel, NY</option>'+
          '<option value="St. James, Lakewood      Lakewood, OH      44107">St. James, Lakewood      Lakewood, OH      44107</option>'+
          '<option value="St. James, Mukwonago      Mukwonago WI      53149">St. James, Mukwonago      Mukwonago WI      53149</option>'+
          '<option value="St. Jane de Chatel, Easton      Easton, PA      18045">St. Jane de Chatel, Easton      Easton, PA      18045</option>'+
          '<option value="St. Jerome, Cleveland      Cleveland, OH      44110-1298">St. Jerome, Cleveland      Cleveland, OH      44110-1298</option>'+
          '<option value="St. Joan Of Arc, Chagrin Falls      Chagrin Falls, OH      44022-2999">St. Joan Of Arc, Chagrin Falls      Chagrin Falls, OH      44022-2999</option>'+
          '<option value="St. Joan of Arc, Evanston      Evanston, IL">St. Joan of Arc, Evanston      Evanston, IL</option>'+
          '<option value="St. Joan Of Arc, Streetsboro      Streetsboro, OH      44241">St. Joan Of Arc, Streetsboro      Streetsboro, OH      44241</option>'+
          '<option value="St. John Bosco, Parma      Parma, OH      44130-2997">St. John Bosco, Parma      Parma, OH      44130-2997</option>'+
          '<option value="St. John Gualbert, Johnstown      Johnstown, PA">St. John Gualbert, Johnstown      Johnstown, PA</option>'+
          '<option value="St. John Lutheran      Garfield hts, OH      44125">St. John Lutheran      Garfield hts, OH      44125</option>'+
          '<option value="St. John Lutheran Church, Roanoke      Roanoke VA      24018">St. John Lutheran Church, Roanoke      Roanoke VA      24018</option>'+
          '<option value="St. John Neiman, Irvine      Irvine, CA">St. John Neiman, Irvine      Irvine, CA</option>'+
          '<option value="St. John Nepomucene, Cleveland      Cleveland, OH      44105-3357">St. John Nepomucene, Cleveland      Cleveland, OH      44105-3357</option>'+
          '<option value="St. John of the Cross, Euclid      Euclid, Ohio      44143">St. John of the Cross, Euclid      Euclid, Ohio      44143</option>'+
          '<option value="St. John Rochester, Fairporn      Fairporn, NY">St. John Rochester, Fairporn      Fairporn, NY</option>'+
          '<option value="St. John the Baptist, Somonauk      Somonauk, IL">St. John the Baptist, Somonauk      Somonauk, IL</option>'+
          '<option value="St. John Vianney, Flint      Flint, MI      48504">St. John Vianney, Flint      Flint, MI      48504</option>'+
          '<option value="St. John Vianney, Mentor      Mentor, Ohio      44060-3997">St. John Vianney, Mentor      Mentor, Ohio      44060-3997</option>'+
          '<option value="St. Joseph Cathedral, Columbus      Columbus, Ohio      43215">St. Joseph Cathedral, Columbus      Columbus, Ohio      43215</option>'+
          '<option value="St. Joseph Church, Richardson      Richardson, TX      75081">St. Joseph Church, Richardson      Richardson, TX      75081</option>'+
          '<option value="St. Joseph, Amherst      Amherst, Ohio      44001">St. Joseph, Amherst      Amherst, Ohio      44001</option>'+
          '<option value="St. Joseph, Cold Spring      Cold Spring, KY      41076-1895">St. Joseph, Cold Spring      Cold Spring, KY      41076-1895</option>'+
          '<option value="St. Joseph, Cuyahoga Falls      Cuyahoga Falls, Ohio      44221">St. Joseph, Cuyahoga Falls      Cuyahoga Falls, Ohio      44221</option>'+
          '<option value="St. Joseph, Dover      Dover Ohio      44622">St. Joseph, Dover      Dover Ohio      44622</option>'+
          '<option value="St. Joseph, Lucinda      Lucinda, Pennsylvania      16235">St. Joseph, Lucinda      Lucinda, Pennsylvania      16235</option>'+
          '<option value="St. Joseph, Mantua      Mantua, OH      44255">St. Joseph, Mantua      Mantua, OH      44255</option>'+
          '<option value="St. Joseph, Maumee      Maumee, OH      43537">St. Joseph, Maumee      Maumee, OH      43537</option>'+
          '<option value="St. Joseph, Port Huron      Port Huron, MI      48060">St. Joseph, Port Huron      Port Huron, MI      48060</option>'+
          '<option value="St. Joseph, South Bend      South Bend, IN      46617">St. Joseph, South Bend      South Bend, IN      46617</option>'+
          '<option value="St. Joseph, Sylvania      Sylvania Ohio      43560">St. Joseph, Sylvania      Sylvania Ohio      43560</option>'+
          '<option value="St. Joseph, Toledo      Toledo, Ohio      43697">St. Joseph, Toledo      Toledo, Ohio      43697</option>'+
          '<option value="St. Jude, Warrensville Hts.      Warrensville Hts., OH      44128-5986">St. Jude, Warrensville Hts.      Warrensville Hts., OH      44128-5986</option>'+
          '<option value="St. Justin Martyr, Eastlake      Eastlake, OH      44095-5095">St. Justin Martyr, Eastlake      Eastlake, OH      44095-5095</option>'+
          '<option value="St. Ladislas, Westlake      Westlake, OH      44145-2999">St. Ladislas, Westlake      Westlake, OH      44145-2999</option>'+
          '<option value="St. Lawrence, Cleveland      Cleveland, Ohio      44105-1521">St. Lawrence, Cleveland      Cleveland, Ohio      44105-1521</option>'+
          '<option value="St. Leo The Great, Cleveland      Cleveland, OH      44109-5799">St. Leo The Great, Cleveland      Cleveland, OH      44109-5799</option>'+
          '<option value="St. Louis, Louisville">St. Louis, Louisville</option>'+
          '<option value="St. Louis, Waco      Waco, TX      76708">St. Louis, Waco      Waco, TX      76708</option>'+
          '<option value="St. Lucy, Middlefield      Middlefield, OH      44062">St. Lucy, Middlefield      Middlefield, OH      44062</option>'+
          '<option value="St. Luke, Lakewood      Lakewood OH      44107">St. Luke, Lakewood      Lakewood OH      44107</option>'+
          '<option value="St. Margaret Mary, S. Euclid      South Euclid, Ohio      44121">St. Margaret Mary, S. Euclid      South Euclid, Ohio      44121</option>'+
          '<option value="St. Mark the Evangelist, Plano      Plano, Texas      75075">St. Mark the Evangelist, Plano      Plano, Texas      75075</option>'+
          '<option value="St. Mark, Cleveland      Cleveland, OH      44111-1084">St. Mark, Cleveland      Cleveland, OH      44111-1084</option>'+
          '<option value="St. Martha, Akron      Akron Ohio">St. Martha, Akron      Akron Ohio</option>'+
          '<option value="St. Martin of Tours, Maple Hts.      Maple Hts., OH      44137-4788">St. Martin of Tours, Maple Hts.      Maple Hts., OH      44137-4788</option>'+
          '<option value="St. Martin Of Tours, Santa Clara      Santa Clara, CA">St. Martin Of Tours, Santa Clara      Santa Clara, CA</option>'+
          '<option value="St. Martin of Tours, Valley City      Valley City, OH      44280">St. Martin of Tours, Valley City      Valley City, OH      44280</option>'+
          '<option value="St. Martin, St. Martin MN      St. Martin, MN      56376">St. Martin, St. Martin MN      St. Martin, MN      56376</option>'+
          '<option value="St. Mary Magdalene, Willowick      Willowick, Ohio      44095-3573">St. Mary Magdalene, Willowick      Willowick, Ohio      44095-3573</option>'+
          '<option value="St. Mary Magdalyn, Columbus      Columbus, OH      43204">St. Mary Magdalyn, Columbus      Columbus, OH      43204</option>'+
          '<option value="St. Mary of Czestochowa, New Kensington      New Kensington, PA      15068-5696">St. Mary of Czestochowa, New Kensington      New Kensington, PA      15068-5696</option>'+
          '<option value="St. Mary of Lourdes, Mayville      Mayville, NY      14757">St. Mary of Lourdes, Mayville      Mayville, NY      14757</option>'+
          '<option value="St. Mary of the Assumption, Cleveland      Cleveland, Ohio      44110">St. Mary of the Assumption, Cleveland      Cleveland, Ohio      44110</option>'+
          '<option value="St. Mary of the Assumption, Mentor      Mentor, Ohio      44060-5853">St. Mary of the Assumption, Mentor      Mentor, Ohio      44060-5853</option>'+
          '<option value="St. Mary of the Falls, Olmsted Falls      Olmsted Falls, OH">St. Mary of the Falls, Olmsted Falls      Olmsted Falls, OH</option>'+
          '<option value="St. Mary of tthe Assumption, Herman      Herman, PA      16039">St. Mary of tthe Assumption, Herman      Herman, PA      16039</option>'+
          '<option value="St. Mary, Bedford      Bedford, Ohio      44146">St. Mary, Bedford      Bedford, Ohio      44146</option>'+
          '<option value="St. Mary, Chardon      Chardon Ohio      44024">St. Mary, Chardon      Chardon Ohio      44024</option>'+
          '<option value="St. Mary, Cincinnati      Cincinnati, Ohio      45208">St. Mary, Cincinnati      Cincinnati, Ohio      45208</option>'+
          '<option value="St. Mary, Cleveland      Cleveland, OH      44110-2497">St. Mary, Cleveland      Cleveland, OH      44110-2497</option>'+
          '<option value="St. Mary, Davenport      Davenport, Iowa      52802">St. Mary, Davenport      Davenport, Iowa      52802</option>'+
          '<option value="St. Mary, Greenville      Greenville, South Carolina">St. Mary, Greenville      Greenville, South Carolina</option>'+
          '<option value="St. Mary, Hudson      Hudson, Ohio      44236">St. Mary, Hudson      Hudson, Ohio      44236</option>'+
          '<option value="St. Mary, Massillon      Massillon, OH      44646">St. Mary, Massillon      Massillon, OH      44646</option>'+
          '<option value="St. Mary, Mayville      Mayville, NY      14757">St. Mary, Mayville      Mayville, NY      14757</option>'+
          '<option value="St. Mary, Mentor      Mentor, OH      44060">St. Mary, Mentor      Mentor, OH      44060</option>'+
          '<option value="St. Mary, Montrose      Montrose, Colorado      81401">St. Mary, Montrose      Montrose, Colorado      81401</option>'+
          '<option value="St. Mary, Orwell      Orwell, Ohio      44076">St. Mary, Orwell      Orwell, Ohio      44076</option>'+
          '<option value="St. Mary, Ottawa      Ottawa, IL      61350">St. Mary, Ottawa      Ottawa, IL      61350</option>'+
          '<option value="St. Mary, Painesville      Painesville Ohio      44077">St. Mary, Painesville      Painesville Ohio      44077</option>'+
          '<option value="St. Mary, Shrewsbury      Shrewsbury, MA      01545">St. Mary, Shrewsbury      Shrewsbury, MA      01545</option>'+
          '<option value="St. Mary, St. Clairsville OH      St. Clairsville, Ohio      43950">St. Mary, St. Clairsville OH      St. Clairsville, Ohio      43950</option>'+
          '<option value="St. Mary, Swormville      Swormville, NY      14051">St. Mary, Swormville      Swormville, NY      14051</option>'+
          '<option value="St. Matthew, Glendale Hts.      Glendale Hts., IL      60139">St. Matthew, Glendale Hts.      Glendale Hts., IL      60139</option>'+
          '<option value="St. Mel, Cleveland      Cleveland Ohio      44111">St. Mel, Cleveland      Cleveland Ohio      44111</option>'+
          '<option value="St. Michael, Belvue      Belvue, Ohio">St. Michael, Belvue      Belvue, Ohio</option>'+
          '<option value="St. Michael, Independence      Cleveland, OH      44131">St. Michael, Independence      Cleveland, OH      44131</option>'+
          '<option value="St. Monica, Duluth      Duluth, GA      30097">St. Monica, Duluth      Duluth, GA      30097</option>'+
          '<option value="St. Monica, Garfield Hts.      Garfield Hts., OH      44125-5197">St. Monica, Garfield Hts.      Garfield Hts., OH      44125-5197</option>'+
          '<option value="St. Nicholas Byzantine, Cleveland      Cleveland, Ohio      44114">St. Nicholas Byzantine, Cleveland      Cleveland, Ohio      44114</option>'+
          '<option value="St. Noel, Willoughby Hills      Willoughby Hills, OH      44094-9193">St. Noel, Willoughby Hills      Willoughby Hills, OH      44094-9193</option>'+
          '<option value="St. Paschal Baylon, Highland Hts.      Highland Hts., OH      44143-3092">St. Paschal Baylon, Highland Hts.      Highland Hts., OH      44143-3092</option>'+
          '<option value="St. Patrick      Kent, OH">St. Patrick      Kent, OH</option>'+
          '<option value="St. Patrick, Ann Arbor      Ann Arbor, MI      48105">St. Patrick, Ann Arbor      Ann Arbor, MI      48105</option>'+
          '<option value="St. Patrick, Cleveland      Cleveland, OH      44113">St. Patrick, Cleveland      Cleveland, OH      44113</option>'+
          '<option value="St. Patrick, Cleveland      Cleveland, OH      44135">St. Patrick, Cleveland      Cleveland, OH      44135</option>'+
          '<option value="St. Patrick, Leetonia      Leetonia, OH">St. Patrick, Leetonia      Leetonia, OH</option>'+
          '<option value="St. Patrick, Ottawa      Ottawa, IL      61350">St. Patrick, Ottawa      Ottawa, IL      61350</option>'+
          '<option value="St. Patrick, Thompson      Thompson, OH      44086">St. Patrick, Thompson      Thompson, OH      44086</option>'+
          '<option value="St. Patrick, Wisconsin      Onalaska, WI">St. Patrick, Wisconsin      Onalaska, WI</option>'+
          '<option value="St. Patrick, Youngstown      Kinsman, Ohio      44428">St. Patrick, Youngstown      Kinsman, Ohio      44428</option>'+
          '<option value="St. Paul Croatian, Cleveland      Cleveland, Ohio      44103">St. Paul Croatian, Cleveland      Cleveland, Ohio      44103</option>'+
          '<option value="St. Paul the Apostle Church, Davenport, IA      Davenport, IA">St. Paul the Apostle Church, Davenport, IA      Davenport, IA</option>'+
          '<option value="St. Paul, Euclid      Euclid, OH      44117-1192">St. Paul, Euclid      Euclid, OH      44117-1192</option>'+
          '<option value="St. Paul, Euclid      Euclid, Ohio      44143">St. Paul, Euclid      Euclid, Ohio      44143</option>'+
          '<option value="St. Peter and Paul, Garfield Hts.      Garfield Heights, OH">St. Peter and Paul, Garfield Hts.      Garfield Heights, OH</option>'+
          '<option value="St. Peter Cathedral      Erie, PA">St. Peter Cathedral      Erie, PA</option>'+
          '<option value="St. Peter Parish, Skokie      Skokie, IL      60077">St. Peter Parish, Skokie      Skokie, IL      60077</option>'+
          '<option value="St. Peter the Apostle, Boerne      Boerne, TX      78006">St. Peter the Apostle, Boerne      Boerne, TX      78006</option>'+
          '<option value="St. Peter the Apostle, Brook Park      Brook Park, OH      44142-3503">St. Peter the Apostle, Brook Park      Brook Park, OH      44142-3503</option>'+
          '<option value="St. Peter, Cleveland      Cleveland, Ohio">St. Peter, Cleveland      Cleveland, Ohio</option>'+
          '<option value="St. Peter, Spring Grove      Spring Grove, IL 60081">St. Peter, Spring Grove      Spring Grove, IL 60081</option>'+
          '<option value="St. Philomena, E. Cleveland      East Cleveland, Ohio      44112">St. Philomena, E. Cleveland      East Cleveland, Ohio      44112</option>'+
          '<option value="St. Pius X, Bedford      Bedford, OH      44146-2296">St. Pius X, Bedford      Bedford, OH      44146-2296</option>'+
          '<option value="St. Pius X, Warren      Warren, Ohio      44485">St. Pius X, Warren      Warren, Ohio      44485</option>'+
          '<option value="St. Raphael, Bay Village      Bay Village, OH      44140-2366">St. Raphael, Bay Village      Bay Village, OH      44140-2366</option>'+
          '<option value="St. Richard, North Olmsted      North Olmsted, OH      44070-3260">St. Richard, North Olmsted      North Olmsted, OH      44070-3260</option>'+
          '<option value="St. Rita, Solon      Solon, OH      44139-4098">St. Rita, Solon      Solon, OH      44139-4098</option>'+
          '<option value="St. Robert Bellarmine, Euclid      Euclid, OH      44123-1200">St. Robert Bellarmine, Euclid      Euclid, OH      44123-1200</option>'+
          '<option value="St. Robert of Newminster, Ada      Ada, MI">St. Robert of Newminster, Ada      Ada, MI</option>'+
          '<option value="St. Roch, Indianapolis      Indianapolis IN      46227">St. Roch, Indianapolis      Indianapolis IN      46227</option>'+
          '<option value="St. Rose of Lima, Cleveland      Cleveland, OH      44102-2399">St. Rose of Lima, Cleveland      Cleveland, OH      44102-2399</option>'+
          '<option value="St. Rose, Girard      Girard,OH">St. Rose, Girard      Girard,OH</option>'+
          '<option value="St. Sebastian, Akron      Akron, OH      44320">St. Sebastian, Akron      Akron, OH      44320</option>'+
          '<option value="St. Sebastian, Ft. Lauderdale      Ft. Lauderdale, FL.      33316-3299">St. Sebastian, Ft. Lauderdale      Ft. Lauderdale, FL.      33316-3299</option>'+
          '<option value="St. Stanislaus, Cleveland      Cleveland, OH      44105-1293">St. Stanislaus, Cleveland      Cleveland, OH      44105-1293</option>'+
          '<option value="St. Stephen, Cleveland      Cleveland      44102">St. Stephen, Cleveland      Cleveland      44102</option>'+
          '<option value="St. Stephen, New Boston      New Boston, MI">St. Stephen, New Boston      New Boston, MI</option>'+
          '<option value="St. Stephen, Riverview      Riverview, FL      33569">St. Stephen, Riverview      Riverview, FL      33569</option>'+
          '<option value="St. Stephen, West Salem      West Salem, Ohio      44287">St. Stephen, West Salem      West Salem, Ohio      44287</option>'+
          '<option value="St. Sussana, Mason      Mason, Ohio      45050">St. Sussana, Mason      Mason, Ohio      45050</option>'+
          '<option value="St. Therese, Garfield Hts.      Garfield Hts.,  OH      44125-2698">St. Therese, Garfield Hts.      Garfield Hts.,  OH      44125-2698</option>'+
          '<option value="St. Thomas Aquinas, IA      Ames, IA      50014">St. Thomas Aquinas, IA      Ames, IA      50014</option>'+
          '<option value="St. Thomas Aquinas, IO      Ames, IA      50014">St. Thomas Aquinas, IO      Ames, IA      50014</option>'+
          '<option value="St. Thomas More, Brookings      Brookings, SD      57006">St. Thomas More, Brookings      Brookings, SD      57006</option>'+
          '<option value="St. Thomas More, Brooklyn OH      Brooklyn, OH      44144">St. Thomas More, Brooklyn OH      Brooklyn, OH      44144</option>'+
          '<option value="St. Thomas the Apostle, Crystal Lake      Crystal Lake, IL      60014">St. Thomas the Apostle, Crystal Lake      Crystal Lake, IL      60014</option>'+
          '<option value="St. Timothy, Garfield Hts.      Garfield Hts., OH">St. Timothy, Garfield Hts.      Garfield Hts., OH</option>'+
          '<option value="St. Vincent de Paul, Akron      Akron, OH      44303">St. Vincent de Paul, Akron      Akron, OH      44303</option>'+
          '<option value="St. Vincent de Paul, Cleveland      Cleveland, Ohio      44111">St. Vincent de Paul, Cleveland      Cleveland, Ohio      44111</option>'+
          '<option value="St. Vincent de Paul, Elyria      Elyria, OH      44035">St. Vincent de Paul, Elyria      Elyria, OH      44035</option>'+
          '<option value="St. Vincent, Vienna      Vienna, Ohio      44473">St. Vincent, Vienna      Vienna, Ohio      44473</option>'+
          '<option value="St. Vitus, Cleveland      Cleveland, Ohio      44103">St. Vitus, Cleveland      Cleveland, Ohio      44103</option>'+
          '<option value="St. Walter, Roselle      Roselle, IL">St. Walter, Roselle      Roselle, IL</option>'+
          '<option value="St. Wenceslas, Maple Hts.      Maple Hts., OH      44137-1598">St. Wenceslas, Maple Hts.      Maple Hts., OH      44137-1598</option>'+
          '<option value="St. William, Euclid      Euclid, OH      44132-1495">St. William, Euclid      Euclid, OH      44132-1495</option>'+
          '<option value="Sts. Cyril &amp; Methodius, Lakewood      Lakewood, OH      44107-4997">Sts. Cyril &amp; Methodius, Lakewood      Lakewood, OH      44107-4997</option>'+
          '<option value="Sts. Peter and Paul, Garfield Hts.      Garfield Hts">Sts. Peter and Paul, Garfield Hts.      Garfield Hts</option>'+
          '<option value="Sts. Peter and Paul, Hamburg      Hamburg, NY      14075-5059">Sts. Peter and Paul, Hamburg      Hamburg, NY      14075-5059</option>'+
          '<option value="Sts. Phillips &amp; James Church, Cleveland      Cleveland, OH      44111">Sts. Phillips &amp; James Church, Cleveland      Cleveland, OH      44111</option>'+
          '<option value="Sts. Robert and William, Euclid      Euclid, Ohio      44132">Sts. Robert and William, Euclid      Euclid, Ohio      44132</option>'+
          '<option value="The Church of the Good Shepherd, Cumming, GA      Cumming, GA      30041">The Church of the Good Shepherd, Cumming, GA      Cumming, GA      30041</option>'+
          '<option value="Transfiguration, Lakewood      Lakewood, Ohio      44107">Transfiguration, Lakewood      Lakewood, Ohio      44107</option>'+
          '<option value="Tribunal Cleveland, Ohio      Cleveland Ohio      44114">Tribunal Cleveland, Ohio      Cleveland Ohio      44114</option>'+
          '<option value="Trinity English Luthern Church      Fort Wayne, IN">Trinity English Luthern Church      Fort Wayne, IN</option>'+
          '<option value="United Methodist Church Chagrin Falls      Chagrin Falls, Ohio">United Methodist Church Chagrin Falls      Chagrin Falls, Ohio</option>'+
          '<option value="USAG Chapel      Wiesbader">USAG Chapel      Wiesbader</option>'+
          '<option value="Valley Lutheran      Chagrin Falls, Oh">Valley Lutheran      Chagrin Falls, Oh</option>'+
          '<option value="Virger del Carmen      Villahermosa, Tabasco">Virger del Carmen      Villahermosa, Tabasco</option>'+
          '<option value="Vogelweh Chapel &quot;Military Orinariate&quot;      New York 22., New York">Vogelweh Chapel &quot;Military Orinariate&quot;      New York 22., New York</option>'+
          '<option value="Willoughby, United Methodist">Willoughby, United Methodist</option>'+
          '</select>';
        var tr17 = document.createElement('tr');
        tr17.setAttribute('name', 'tr17'+memNum);
        tr17.setAttribute('id', 'tr17'+memNum);
        mainTableBody.appendChild(tr17);
        tr17.insertCell(0).innerHTML = '<td></td>';
        tr17.insertCell(1).innerHTML = '<td><span class="titlelbl">Ministries</span></td>';
        var td17 = document.createElement('td');
        td17.setAttribute('id', 'td17'+memNum);
        td17.setAttribute('colspan', '2');
        tr17.appendChild(td17);
        td17.innerHTML = '<span class="lbl">&nbsp;&nbsp;<u>Name</u></span>';
        var td18 = document.createElement('td');
        td18.setAttribute('id', 'td18'+memNum);
        td18.setAttribute('colspan', '2');
        tr17.appendChild(td18);
        td18.innerHTML = '<span class="lbl"><u>Interested in Joining</u></span>';
        formTabIndex = formTabIndex + 1;
        var tr18 = document.createElement('tr');
        tr18.setAttribute('name', 'tr18'+memNum);
        tr18.setAttribute('id', 'tr18'+memNum);
        mainTableBody.appendChild(tr18);
        tr18.insertCell(0).innerHTML = '<td></td>';
        tr18.insertCell(1).innerHTML = '<td></td>';
        var td18 = document.createElement('td');
        td18.setAttribute('id', 'td18'+memNum);
        td18.setAttribute('colspan', '2');
        tr18.appendChild(td18);
        td18.innerHTML = 
          '&nbsp;&nbsp;&nbsp;<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Min1" id="cboMem'+memNum+'Min1" title="select a ministry pull down list 1 in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Alzheimer\'s & Dementia Support">Alzheimer\'s & Dementia Support</option>'+
          '<option value="American Herritage Girls">American Herritage Girls</option>'+
          '<option value="Aquinas Academy">Aquinas Academy</option>'+
          '<option value="Avila Hour">Avila Hour</option>'+
          '<option value="Book Group">Book Group</option>'+
          '<option value="Booster\'s Club">Booster\'s Club</option>'+
          '<option value="Brothers of the Cross">Brothers of the Cross</option>'+
          '<option value="Children Litrugy of Word">Children Litrugy of Word</option>'+
          '<option value="Choir">Choir</option>'+
          '<option value="Coffee & Doughnuts">Coffee & Doughnuts</option>'+
          '<option value="Confirmation">Confirmation</option>'+
          '<option value="Confirmation Core">Confirmation Core</option>'+
          '<option value="Couples Ministry">Couples Ministry</option>'+
          '<option value="Cross Training">Cross Training</option>'+
          '<option value="Dance Ministry">Dance Ministry</option>'+
          '<option value="Daytime Bible Study">Daytime Bible Study</option>'+
          '<option value="Devotion to St. Joseph">Devotion to St. Joseph</option>'+
          '<option value="Divine Mercy Cenacle">Divine Mercy Cenacle</option>'+
          '<option value="EDGE Core Leaders">EDGE Core Leaders</option>'+
          '<option value="Finance Council">Finance Council</option>'+
          '<option value="First Communion">First Communion</option>'+
          '<option value="Fish Fry">Fish Fry</option>'+
          '<option value="Grieving with Great Hope">Grieving with Great Hope</option>'+
          '<option value="H.E.L.P.">H.E.L.P.</option>'+
          '<option value="Heart of Jesus Ministry">Heart of Jesus Ministry</option>'+
          '<option value="Knights Of Columbus">Knights Of Columbus</option>'+
          '<option value="Ladies Guild">Ladies Guild</option>'+
          '<option value="Legion Of Mary">Legion Of Mary</option>'+
          '<option value="Life Teen Band">Life Teen Band</option>'+
          '<option value="Life Teen Core">Life Teen Core</option>'+
          '<option value="Life Teen Youth">Life Teen Youth</option>'+
          '<option value="Little Flowers Girls Club">Little Flowers Girls Club</option>'+
          '<option value="Men\'s Bible Study">Men\'s Bible Study</option>'+
          '<option value="Mom\'s Morning">Mom\'s Morning</option>'+
          '<option value="Parent Advisory Council">Parent Advisory Council</option>'+
          '<option value="Parish Council">Parish Council</option>'+
          '<option value="Parish Picnic">Parish Picnic</option>'+
          '<option value="Planning Committee">Planning Committee</option>'+
          '<option value="Prayer Shawl Ministry">Prayer Shawl Ministry</option>'+
          '<option value="Prison Ministry">Prison Ministry</option>'+
          '<option value="PSR Catechist">PSR Catechist</option>'+
          '<option value="PSR Substitute Teacher">PSR Substitute Teacher</option>'+
          '<option value="RCIA">RCIA</option>'+
          '<option value="Red Hats">Red Hats</option>'+
          '<option value="ROSS Group">ROSS Group</option>'+
          '<option value="St Helen School">St Helen School</option>'+
          '<option value="St. Vincent de Paul">St. Vincent de Paul</option>'+
          '<option value="Staff Member">Staff Member</option>'+
          '<option value="Stewardship Committe">Stewardship Committe</option>'+
          '<option value="Testify!">Testify!</option>'+
          '<option value="Those Guys!">Those Guys!</option>'+
          '<option value="Usher\'s Club">Usher\'s Club</option>'+
          '<option value="VBS Volunteer">VBS Volunteer</option>'+
          '<option value="Women\'s Bible Study">Women\'s Bible Study</option>'+
          '<option value="Young Adult Ministry">Young Adult Ministry</option>'+
          '</select>';
        var td19 = document.createElement('td');
        td19.setAttribute('id', 'td19'+memNum);
        td19.setAttribute('colspan', '2');
        tr18.appendChild(td19);
        td19.innerHTML = 
          '<select tabindex="'+(formTabIndex+1)+'" name="cboMem'+memNum+'Min1Type" id="cboMem'+memNum+'Min1Type" title="Select an interest in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Actively Involved">Actively Involved</option>'+
          '<option value="Interested">Interested</option>'+
          '</select>';
        formTabIndex = formTabIndex + 1;
        formTabIndex = formTabIndex + 1;
        var tr19 = document.createElement('tr');
        tr19.setAttribute('name', 'tr19'+memNum);
        tr19.setAttribute('id', 'tr19'+memNum);
        mainTableBody.appendChild(tr19);
        tr19.insertCell(0).innerHTML = '<td></td>';
        tr19.insertCell(1).innerHTML = '<td></td>';
        var td19 = document.createElement('td');
        td19.setAttribute('id', 'td19'+memNum);
        td19.setAttribute('colspan', '2');
        tr19.appendChild(td19);
        td19.innerHTML = 
          '&nbsp;&nbsp;&nbsp;<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Min2" id="cboMem'+memNum+'Min2" title="select a ministry pull down list 2 in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Alzheimer\'s & Dementia Support">Alzheimer\'s & Dementia Support</option>'+
          '<option value="American Herritage Girls">American Herritage Girls</option>'+
          '<option value="Aquinas Academy">Aquinas Academy</option>'+
          '<option value="Avila Hour">Avila Hour</option>'+
          '<option value="Book Group">Book Group</option>'+
          '<option value="Booster\'s Club">Booster\'s Club</option>'+
          '<option value="Brothers of the Cross">Brothers of the Cross</option>'+
          '<option value="Children Litrugy of Word">Children Litrugy of Word</option>'+
          '<option value="Choir">Choir</option>'+
          '<option value="Coffee & Doughnuts">Coffee & Doughnuts</option>'+
          '<option value="Confirmation">Confirmation</option>'+
          '<option value="Confirmation Core">Confirmation Core</option>'+
          '<option value="Couples Ministry">Couples Ministry</option>'+
          '<option value="Cross Training">Cross Training</option>'+
          '<option value="Dance Ministry">Dance Ministry</option>'+
          '<option value="Daytime Bible Study">Daytime Bible Study</option>'+
          '<option value="Devotion to St. Joseph">Devotion to St. Joseph</option>'+
          '<option value="Divine Mercy Cenacle">Divine Mercy Cenacle</option>'+
          '<option value="EDGE Core Leaders">EDGE Core Leaders</option>'+
          '<option value="Finance Council">Finance Council</option>'+
          '<option value="First Communion">First Communion</option>'+
          '<option value="Fish Fry">Fish Fry</option>'+
          '<option value="Grieving with Great Hope">Grieving with Great Hope</option>'+
          '<option value="H.E.L.P.">H.E.L.P.</option>'+
          '<option value="Heart of Jesus Ministry">Heart of Jesus Ministry</option>'+
          '<option value="Knights Of Columbus">Knights Of Columbus</option>'+
          '<option value="Ladies Guild">Ladies Guild</option>'+
          '<option value="Legion Of Mary">Legion Of Mary</option>'+
          '<option value="Life Teen Band">Life Teen Band</option>'+
          '<option value="Life Teen Core">Life Teen Core</option>'+
          '<option value="Life Teen Youth">Life Teen Youth</option>'+
          '<option value="Little Flowers Girls Club">Little Flowers Girls Club</option>'+
          '<option value="Men\'s Bible Study">Men\'s Bible Study</option>'+
          '<option value="Mom\'s Morning">Mom\'s Morning</option>'+
          '<option value="Parent Advisory Council">Parent Advisory Council</option>'+
          '<option value="Parish Council">Parish Council</option>'+
          '<option value="Parish Picnic">Parish Picnic</option>'+
          '<option value="Planning Committee">Planning Committee</option>'+
          '<option value="Prayer Shawl Ministry">Prayer Shawl Ministry</option>'+
          '<option value="Prison Ministry">Prison Ministry</option>'+
          '<option value="PSR Catechist">PSR Catechist</option>'+
          '<option value="PSR Substitute Teacher">PSR Substitute Teacher</option>'+
          '<option value="RCIA">RCIA</option>'+
          '<option value="Red Hats">Red Hats</option>'+
          '<option value="ROSS Group">ROSS Group</option>'+
          '<option value="St Helen School">St Helen School</option>'+
          '<option value="St. Vincent de Paul">St. Vincent de Paul</option>'+
          '<option value="Staff Member">Staff Member</option>'+
          '<option value="Stewardship Committe">Stewardship Committe</option>'+
          '<option value="Testify!">Testify!</option>'+
          '<option value="Those Guys!">Those Guys!</option>'+
          '<option value="Usher\'s Club">Usher\'s Club</option>'+
          '<option value="VBS Volunteer">VBS Volunteer</option>'+
          '<option value="Women\'s Bible Study">Women\'s Bible Study</option>'+
          '<option value="Young Adult Ministry">Young Adult Ministry</option>'+
          '</select>';
        var td20 = document.createElement('td');
        td20.setAttribute('id', 'td20'+memNum);
        td20.setAttribute('colspan', '2');
        tr19.appendChild(td20);
        td20.innerHTML = 
          '<select tabindex="'+(formTabIndex+1)+'" name="cboMem'+memNum+'Min2Type" id="cboMem'+memNum+'Min2Type" title="Select an interest in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Actively Involved">Actively Involved</option>'+
          '<option value="Interested">Interested</option>'+
          '</select>';
        formTabIndex = formTabIndex + 1;
        formTabIndex = formTabIndex + 1;
        var tr20 = document.createElement('tr');
        tr20.setAttribute('name', 'tr20'+memNum);
        tr20.setAttribute('id', 'tr20'+memNum);
        mainTableBody.appendChild(tr20);
        tr20.insertCell(0).innerHTML = '<td></td>';
        tr20.insertCell(1).innerHTML = '<td></td>';
        var td20 = document.createElement('td');
        td20.setAttribute('id', 'td20'+memNum);
        td20.setAttribute('colspan', '2');
        tr20.appendChild(td20);
        td20.innerHTML = 
          '&nbsp;&nbsp;&nbsp;<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Min3" id="cboMem'+memNum+'Min3" title="select a ministry pull down list 3 in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Alzheimer\'s & Dementia Support">Alzheimer\'s & Dementia Support</option>'+
          '<option value="American Herritage Girls">American Herritage Girls</option>'+
          '<option value="Aquinas Academy">Aquinas Academy</option>'+
          '<option value="Avila Hour">Avila Hour</option>'+
          '<option value="Book Group">Book Group</option>'+
          '<option value="Booster\'s Club">Booster\'s Club</option>'+
          '<option value="Brothers of the Cross">Brothers of the Cross</option>'+
          '<option value="Children Litrugy of Word">Children Litrugy of Word</option>'+
          '<option value="Choir">Choir</option>'+
          '<option value="Coffee & Doughnuts">Coffee & Doughnuts</option>'+
          '<option value="Confirmation">Confirmation</option>'+
          '<option value="Confirmation Core">Confirmation Core</option>'+
          '<option value="Couples Ministry">Couples Ministry</option>'+
          '<option value="Cross Training">Cross Training</option>'+
          '<option value="Dance Ministry">Dance Ministry</option>'+
          '<option value="Daytime Bible Study">Daytime Bible Study</option>'+
          '<option value="Devotion to St. Joseph">Devotion to St. Joseph</option>'+
          '<option value="Divine Mercy Cenacle">Divine Mercy Cenacle</option>'+
          '<option value="EDGE Core Leaders">EDGE Core Leaders</option>'+
          '<option value="Finance Council">Finance Council</option>'+
          '<option value="First Communion">First Communion</option>'+
          '<option value="Fish Fry">Fish Fry</option>'+
          '<option value="Grieving with Great Hope">Grieving with Great Hope</option>'+
          '<option value="H.E.L.P.">H.E.L.P.</option>'+
          '<option value="Heart of Jesus Ministry">Heart of Jesus Ministry</option>'+
          '<option value="Knights Of Columbus">Knights Of Columbus</option>'+
          '<option value="Ladies Guild">Ladies Guild</option>'+
          '<option value="Legion Of Mary">Legion Of Mary</option>'+
          '<option value="Life Teen Band">Life Teen Band</option>'+
          '<option value="Life Teen Core">Life Teen Core</option>'+
          '<option value="Life Teen Youth">Life Teen Youth</option>'+
          '<option value="Little Flowers Girls Club">Little Flowers Girls Club</option>'+
          '<option value="Men\'s Bible Study">Men\'s Bible Study</option>'+
          '<option value="Mom\'s Morning">Mom\'s Morning</option>'+
          '<option value="Parent Advisory Council">Parent Advisory Council</option>'+
          '<option value="Parish Council">Parish Council</option>'+
          '<option value="Parish Picnic">Parish Picnic</option>'+
          '<option value="Planning Committee">Planning Committee</option>'+
          '<option value="Prayer Shawl Ministry">Prayer Shawl Ministry</option>'+
          '<option value="Prison Ministry">Prison Ministry</option>'+
          '<option value="PSR Catechist">PSR Catechist</option>'+
          '<option value="PSR Substitute Teacher">PSR Substitute Teacher</option>'+
          '<option value="RCIA">RCIA</option>'+
          '<option value="Red Hats">Red Hats</option>'+
          '<option value="ROSS Group">ROSS Group</option>'+
          '<option value="St Helen School">St Helen School</option>'+
          '<option value="St. Vincent de Paul">St. Vincent de Paul</option>'+
          '<option value="Staff Member">Staff Member</option>'+
          '<option value="Stewardship Committe">Stewardship Committe</option>'+
          '<option value="Testify!">Testify!</option>'+
          '<option value="Those Guys!">Those Guys!</option>'+
          '<option value="Usher\'s Club">Usher\'s Club</option>'+
          '<option value="VBS Volunteer">VBS Volunteer</option>'+
          '<option value="Women\'s Bible Study">Women\'s Bible Study</option>'+
          '<option value="Young Adult Ministry">Young Adult Ministry</option>'+
          '</select>';
        var td21 = document.createElement('td');
        td21.setAttribute('id', 'td21'+memNum);
        td21.setAttribute('colspan', '2');
        tr20.appendChild(td21);
        td21.innerHTML = 
          '<select tabindex="'+(formTabIndex+1)+'" name="cboMem'+memNum+'Min3Type" id="cboMem'+memNum+'Min3Type" title="Select an interest in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Actively Involved">Actively Involved</option>'+
          '<option value="Interested">Interested</option>'+
          '</select>';
        formTabIndex = formTabIndex + 1;
        formTabIndex = formTabIndex + 1;
        var tr21 = document.createElement('tr');
        tr21.setAttribute('name', 'tr21'+memNum);
        tr21.setAttribute('id', 'tr21'+memNum);
        mainTableBody.appendChild(tr21);
        tr21.insertCell(0).innerHTML = '<td></td>';
        tr21.insertCell(1).innerHTML = '<td></td>';
        var td21 = document.createElement('td');
        td21.setAttribute('id', 'td21'+memNum);
        td21.setAttribute('colspan', '2');
        tr21.appendChild(td21);
        td21.innerHTML = 
          '&nbsp;&nbsp;&nbsp;<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Min4" id="cboMem'+memNum+'Min4" title="select a ministry pull down list 4 in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Alzheimer\'s & Dementia Support">Alzheimer\'s & Dementia Support</option>'+
          '<option value="American Herritage Girls">American Herritage Girls</option>'+
          '<option value="Aquinas Academy">Aquinas Academy</option>'+
          '<option value="Avila Hour">Avila Hour</option>'+
          '<option value="Book Group">Book Group</option>'+
          '<option value="Booster\'s Club">Booster\'s Club</option>'+
          '<option value="Brothers of the Cross">Brothers of the Cross</option>'+
          '<option value="Children Litrugy of Word">Children Litrugy of Word</option>'+
          '<option value="Choir">Choir</option>'+
          '<option value="Coffee & Doughnuts">Coffee & Doughnuts</option>'+
          '<option value="Confirmation">Confirmation</option>'+
          '<option value="Confirmation Core">Confirmation Core</option>'+
          '<option value="Couples Ministry">Couples Ministry</option>'+
          '<option value="Cross Training">Cross Training</option>'+
          '<option value="Dance Ministry">Dance Ministry</option>'+
          '<option value="Daytime Bible Study">Daytime Bible Study</option>'+
          '<option value="Devotion to St. Joseph">Devotion to St. Joseph</option>'+
          '<option value="Divine Mercy Cenacle">Divine Mercy Cenacle</option>'+
          '<option value="EDGE Core Leaders">EDGE Core Leaders</option>'+
          '<option value="Finance Council">Finance Council</option>'+
          '<option value="First Communion">First Communion</option>'+
          '<option value="Fish Fry">Fish Fry</option>'+
          '<option value="Grieving with Great Hope">Grieving with Great Hope</option>'+
          '<option value="H.E.L.P.">H.E.L.P.</option>'+
          '<option value="Heart of Jesus Ministry">Heart of Jesus Ministry</option>'+
          '<option value="Knights Of Columbus">Knights Of Columbus</option>'+
          '<option value="Ladies Guild">Ladies Guild</option>'+
          '<option value="Legion Of Mary">Legion Of Mary</option>'+
          '<option value="Life Teen Band">Life Teen Band</option>'+
          '<option value="Life Teen Core">Life Teen Core</option>'+
          '<option value="Life Teen Youth">Life Teen Youth</option>'+
          '<option value="Little Flowers Girls Club">Little Flowers Girls Club</option>'+
          '<option value="Men\'s Bible Study">Men\'s Bible Study</option>'+
          '<option value="Mom\'s Morning">Mom\'s Morning</option>'+
          '<option value="Parent Advisory Council">Parent Advisory Council</option>'+
          '<option value="Parish Council">Parish Council</option>'+
          '<option value="Parish Picnic">Parish Picnic</option>'+
          '<option value="Planning Committee">Planning Committee</option>'+
          '<option value="Prayer Shawl Ministry">Prayer Shawl Ministry</option>'+
          '<option value="Prison Ministry">Prison Ministry</option>'+
          '<option value="PSR Catechist">PSR Catechist</option>'+
          '<option value="PSR Substitute Teacher">PSR Substitute Teacher</option>'+
          '<option value="RCIA">RCIA</option>'+
          '<option value="Red Hats">Red Hats</option>'+
          '<option value="ROSS Group">ROSS Group</option>'+
          '<option value="St Helen School">St Helen School</option>'+
          '<option value="St. Vincent de Paul">St. Vincent de Paul</option>'+
          '<option value="Staff Member">Staff Member</option>'+
          '<option value="Stewardship Committe">Stewardship Committe</option>'+
          '<option value="Testify!">Testify!</option>'+
          '<option value="Those Guys!">Those Guys!</option>'+
          '<option value="Usher\'s Club">Usher\'s Club</option>'+
          '<option value="VBS Volunteer">VBS Volunteer</option>'+
          '<option value="Women\'s Bible Study">Women\'s Bible Study</option>'+
          '<option value="Young Adult Ministry">Young Adult Ministry</option>'+
          '</select>';
        var td22 = document.createElement('td');
        td22.setAttribute('id', 'td22'+memNum);
        td22.setAttribute('colspan', '2');
        tr21.appendChild(td22);
        td22.innerHTML = 
          '<select tabindex="'+(formTabIndex+1)+'" name="cboMem'+memNum+'Min4Type" id="cboMem'+memNum+'Min4Type" title="Select an interest in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Actively Involved">Actively Involved</option>'+
          '<option value="Interested">Interested</option>'+
          '</select>';
        formTabIndex = formTabIndex + 1;
        formTabIndex = formTabIndex + 1;
        var tr22 = document.createElement('tr');
        tr22.setAttribute('name', 'tr22'+memNum);
        tr22.setAttribute('id', 'tr22'+memNum);
        mainTableBody.appendChild(tr22);
        tr22.insertCell(0).innerHTML = '<td></td>';
        tr22.insertCell(1).innerHTML = '<td></td>';
        var td22 = document.createElement('td');
        td22.setAttribute('id', 'td22'+memNum);
        td22.setAttribute('colspan', '2');
        tr22.appendChild(td22);
        td22.innerHTML = 
          '&nbsp;&nbsp;&nbsp;<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Min5" id="cboMem'+memNum+'Min5" title="select a ministry pull down list 5 in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Alzheimer\'s & Dementia Support">Alzheimer\'s & Dementia Support</option>'+
          '<option value="American Herritage Girls">American Herritage Girls</option>'+
          '<option value="Aquinas Academy">Aquinas Academy</option>'+
          '<option value="Avila Hour">Avila Hour</option>'+
          '<option value="Book Group">Book Group</option>'+
          '<option value="Booster\'s Club">Booster\'s Club</option>'+
          '<option value="Brothers of the Cross">Brothers of the Cross</option>'+
          '<option value="Children Litrugy of Word">Children Litrugy of Word</option>'+
          '<option value="Choir">Choir</option>'+
          '<option value="Coffee & Doughnuts">Coffee & Doughnuts</option>'+
          '<option value="Confirmation">Confirmation</option>'+
          '<option value="Confirmation Core">Confirmation Core</option>'+
          '<option value="Couples Ministry">Couples Ministry</option>'+
          '<option value="Cross Training">Cross Training</option>'+
          '<option value="Dance Ministry">Dance Ministry</option>'+
          '<option value="Daytime Bible Study">Daytime Bible Study</option>'+
          '<option value="Devotion to St. Joseph">Devotion to St. Joseph</option>'+
          '<option value="Divine Mercy Cenacle">Divine Mercy Cenacle</option>'+
          '<option value="EDGE Core Leaders">EDGE Core Leaders</option>'+
          '<option value="Finance Council">Finance Council</option>'+
          '<option value="First Communion">First Communion</option>'+
          '<option value="Fish Fry">Fish Fry</option>'+
          '<option value="Grieving with Great Hope">Grieving with Great Hope</option>'+
          '<option value="H.E.L.P.">H.E.L.P.</option>'+
          '<option value="Heart of Jesus Ministry">Heart of Jesus Ministry</option>'+
          '<option value="Knights Of Columbus">Knights Of Columbus</option>'+
          '<option value="Ladies Guild">Ladies Guild</option>'+
          '<option value="Legion Of Mary">Legion Of Mary</option>'+
          '<option value="Life Teen Band">Life Teen Band</option>'+
          '<option value="Life Teen Core">Life Teen Core</option>'+
          '<option value="Life Teen Youth">Life Teen Youth</option>'+
          '<option value="Little Flowers Girls Club">Little Flowers Girls Club</option>'+
          '<option value="Men\'s Bible Study">Men\'s Bible Study</option>'+
          '<option value="Mom\'s Morning">Mom\'s Morning</option>'+
          '<option value="Parent Advisory Council">Parent Advisory Council</option>'+
          '<option value="Parish Council">Parish Council</option>'+
          '<option value="Parish Picnic">Parish Picnic</option>'+
          '<option value="Planning Committee">Planning Committee</option>'+
          '<option value="Prayer Shawl Ministry">Prayer Shawl Ministry</option>'+
          '<option value="Prison Ministry">Prison Ministry</option>'+
          '<option value="PSR Catechist">PSR Catechist</option>'+
          '<option value="PSR Substitute Teacher">PSR Substitute Teacher</option>'+
          '<option value="RCIA">RCIA</option>'+
          '<option value="Red Hats">Red Hats</option>'+
          '<option value="ROSS Group">ROSS Group</option>'+
          '<option value="St Helen School">St Helen School</option>'+
          '<option value="St. Vincent de Paul">St. Vincent de Paul</option>'+
          '<option value="Staff Member">Staff Member</option>'+
          '<option value="Stewardship Committe">Stewardship Committe</option>'+
          '<option value="Testify!">Testify!</option>'+
          '<option value="Those Guys!">Those Guys!</option>'+
          '<option value="Usher\'s Club">Usher\'s Club</option>'+
          '<option value="VBS Volunteer">VBS Volunteer</option>'+
          '<option value="Women\'s Bible Study">Women\'s Bible Study</option>'+
          '<option value="Young Adult Ministry">Young Adult Ministry</option>'+
          '</select>';
        var td23 = document.createElement('td');
        td23.setAttribute('id', 'td23'+memNum);
        td23.setAttribute('colspan', '2');
        tr22.appendChild(td23);
        td23.innerHTML = 
          '<select tabindex="'+(formTabIndex+1)+'" name="cboMem'+memNum+'Min5Type" id="cboMem'+memNum+'Min5Type" title="Select an interest in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Actively Involved">Actively Involved</option>'+
          '<option value="Interested">Interested</option>'+
          '</select>';
        formTabIndex = formTabIndex + 1;
        var tr23 = document.createElement('tr');
        tr23.setAttribute('name', 'tr23'+memNum);
        tr23.setAttribute('id', 'tr23'+memNum);
        mainTableBody.appendChild(tr23);
        tr23.insertCell(0).innerHTML = '<td></td>';
        tr23.insertCell(1).innerHTML = '<td><span class="titlelbl">Talents</span></td>';
        var td23 = document.createElement('td');
        td23.setAttribute('id', 'td23'+memNum);
        td23.setAttribute('colspan', '2');
        tr23.appendChild(td23);
        td23.innerHTML = '<span class="lbl">&nbsp;&nbsp;<u>Name</u></span>';
        var td24 = document.createElement('td');
        td24.setAttribute('id', 'td24'+memNum);
        td24.setAttribute('colspan', '2');
        tr23.appendChild(td24);
        td24.innerHTML = '<span class="lbl"><u>Interested in Joining</u></span>';
        formTabIndex = formTabIndex + 1;
        var tr24 = document.createElement('tr');
        tr24.setAttribute('name', 'tr24'+memNum);
        tr24.setAttribute('id', 'tr24'+memNum);
        mainTableBody.appendChild(tr24);
        tr24.insertCell(0).innerHTML = '<td></td>';
        tr24.insertCell(1).innerHTML = '<td></td>';
        var td24 = document.createElement('td');
        td24.setAttribute('id', 'td24'+memNum);
        td24.setAttribute('colspan', '2');
        tr24.appendChild(td24);
        td24.innerHTML = 
          '&nbsp;&nbsp;&nbsp;<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Tal1" id="cboMem'+memNum+'Tal1" title="select a talent pull down list 1 in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Adoration Chapel Hour">Adoration Chapel Hour</option>'+
          '<option value="Adult Server">Adult Server</option>'+
          '<option value="Babysitter">Babysitter</option>'+
          '<option value="Carpentry">Carpentry</option>'+
          '<option value="Cooking">Cooking</option>'+
          '<option value="Eucharistic Minister">Eucharistic Minister</option>'+
          '<option value="Gardening">Gardening</option>'+
          '<option value="General Volunteer">General Volunteer</option>'+
          '<option value="Landscaping">Landscaping</option>'+
          '<option value="Lector">Lector</option>'+
          '<option value="Painting">Painting</option>'+
          '<option value="Parish Library">Parish Library</option>'+
          '<option value="Rosary Makers">Rosary Makers</option>'+
          '<option value="Sacristan">Sacristan</option>'+
          '<option value="Tutor">Tutor</option>'+
          '<option value="Volunteer Driver">Volunteer Driver</option>'+
          '<option value="Youth Server">Youth Server</option>'+
          '</select>';
        var td25 = document.createElement('td');
        td25.setAttribute('id', 'td25'+memNum);
        td25.setAttribute('colspan', '2');
        tr24.appendChild(td25);
        td25.innerHTML = 
          '<select tabindex="'+(formTabIndex+1)+'" name="cboMem'+memNum+'Tal1Type" id="cboMem'+memNum+'Tal1Type" title="Select an interest in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Actively Involved">Actively Involved</option>'+
          '<option value="Interested">Interested</option>'+
          '</select>';
        formTabIndex = formTabIndex + 1;
        formTabIndex = formTabIndex + 1;
        var tr25 = document.createElement('tr');
        tr25.setAttribute('name', 'tr25'+memNum);
        tr25.setAttribute('id', 'tr25'+memNum);
        mainTableBody.appendChild(tr25);
        tr25.insertCell(0).innerHTML = '<td></td>';
        tr25.insertCell(1).innerHTML = '<td></td>';
        var td25 = document.createElement('td');
        td25.setAttribute('id', 'td25'+memNum);
        td25.setAttribute('colspan', '2');
        tr25.appendChild(td25);
        td25.innerHTML = 
          '&nbsp;&nbsp;&nbsp;<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Tal2" id="cboMem'+memNum+'Tal2" title="select a talent pull down list 2 in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Adoration Chapel Hour">Adoration Chapel Hour</option>'+
          '<option value="Adult Server">Adult Server</option>'+
          '<option value="Babysitter">Babysitter</option>'+
          '<option value="Carpentry">Carpentry</option>'+
          '<option value="Cooking">Cooking</option>'+
          '<option value="Eucharistic Minister">Eucharistic Minister</option>'+
          '<option value="Gardening">Gardening</option>'+
          '<option value="General Volunteer">General Volunteer</option>'+
          '<option value="Landscaping">Landscaping</option>'+
          '<option value="Lector">Lector</option>'+
          '<option value="Painting">Painting</option>'+
          '<option value="Parish Library">Parish Library</option>'+
          '<option value="Rosary Makers">Rosary Makers</option>'+
          '<option value="Sacristan">Sacristan</option>'+
          '<option value="Tutor">Tutor</option>'+
          '<option value="Volunteer Driver">Volunteer Driver</option>'+
          '<option value="Youth Server">Youth Server</option>'+
          '</select>';
        var td26 = document.createElement('td');
        td26.setAttribute('id', 'td26'+memNum);
        td26.setAttribute('colspan', '2');
        tr25.appendChild(td26);
        td26.innerHTML = 
          '<select tabindex="'+(formTabIndex+1)+'" name="cboMem'+memNum+'Tal2Type" id="cboMem'+memNum+'Tal2Type" title="Select an interest in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Actively Involved">Actively Involved</option>'+
          '<option value="Interested">Interested</option>'+
          '</select>';
        formTabIndex = formTabIndex + 1;
        formTabIndex = formTabIndex + 1;
        var tr26 = document.createElement('tr');
        tr26.setAttribute('name', 'tr26'+memNum);
        tr26.setAttribute('id', 'tr26'+memNum);
        mainTableBody.appendChild(tr26);
        tr26.insertCell(0).innerHTML = '<td></td>';
        tr26.insertCell(1).innerHTML = '<td></td>';
        var td26 = document.createElement('td');
        td26.setAttribute('id', 'td26'+memNum);
        td26.setAttribute('colspan', '2');
        tr26.appendChild(td26);
        td26.innerHTML = 
          '&nbsp;&nbsp;&nbsp;<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Tal3" id="cboMem'+memNum+'Tal3" title="select a talent pull down list 3 in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Adoration Chapel Hour">Adoration Chapel Hour</option>'+
          '<option value="Adult Server">Adult Server</option>'+
          '<option value="Babysitter">Babysitter</option>'+
          '<option value="Carpentry">Carpentry</option>'+
          '<option value="Cooking">Cooking</option>'+
          '<option value="Eucharistic Minister">Eucharistic Minister</option>'+
          '<option value="Gardening">Gardening</option>'+
          '<option value="General Volunteer">General Volunteer</option>'+
          '<option value="Landscaping">Landscaping</option>'+
          '<option value="Lector">Lector</option>'+
          '<option value="Painting">Painting</option>'+
          '<option value="Parish Library">Parish Library</option>'+
          '<option value="Rosary Makers">Rosary Makers</option>'+
          '<option value="Sacristan">Sacristan</option>'+
          '<option value="Tutor">Tutor</option>'+
          '<option value="Volunteer Driver">Volunteer Driver</option>'+
          '<option value="Youth Server">Youth Server</option>'+
          '</select>';
        var td27 = document.createElement('td');
        td27.setAttribute('id', 'td27'+memNum);
        td27.setAttribute('colspan', '2');
        tr26.appendChild(td27);
        td27.innerHTML = 
          '<select tabindex="'+(formTabIndex+1)+'" name="cboMem'+memNum+'Tal3Type" id="cboMem'+memNum+'Tal3Type" title="Select an interest in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Actively Involved">Actively Involved</option>'+
          '<option value="Interested">Interested</option>'+
          '</select>';
        formTabIndex = formTabIndex + 1;
        formTabIndex = formTabIndex + 1;
        var tr27 = document.createElement('tr');
        tr27.setAttribute('name', 'tr27'+memNum);
        tr27.setAttribute('id', 'tr27'+memNum);
        mainTableBody.appendChild(tr27);
        tr27.insertCell(0).innerHTML = '<td></td>';
        tr27.insertCell(1).innerHTML = '<td></td>';
        var td27 = document.createElement('td');
        td27.setAttribute('id', 'td27'+memNum);
        td27.setAttribute('colspan', '2');
        tr27.appendChild(td27);
        td27.innerHTML = 
          '&nbsp;&nbsp;&nbsp;<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Tal4" id="cboMem'+memNum+'Tal4" title="select a talent pull down list 4 in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Adoration Chapel Hour">Adoration Chapel Hour</option>'+
          '<option value="Adult Server">Adult Server</option>'+
          '<option value="Babysitter">Babysitter</option>'+
          '<option value="Carpentry">Carpentry</option>'+
          '<option value="Cooking">Cooking</option>'+
          '<option value="Eucharistic Minister">Eucharistic Minister</option>'+
          '<option value="Gardening">Gardening</option>'+
          '<option value="General Volunteer">General Volunteer</option>'+
          '<option value="Landscaping">Landscaping</option>'+
          '<option value="Lector">Lector</option>'+
          '<option value="Painting">Painting</option>'+
          '<option value="Parish Library">Parish Library</option>'+
          '<option value="Rosary Makers">Rosary Makers</option>'+
          '<option value="Sacristan">Sacristan</option>'+
          '<option value="Tutor">Tutor</option>'+
          '<option value="Volunteer Driver">Volunteer Driver</option>'+
          '<option value="Youth Server">Youth Server</option>'+
          '</select>';
        var td28 = document.createElement('td');
        td28.setAttribute('id', 'td28'+memNum);
        td28.setAttribute('colspan', '2');
        tr27.appendChild(td28);
        td28.innerHTML = 
          '<select tabindex="'+(formTabIndex+1)+'" name="cboMem'+memNum+'Tal4Type" id="cboMem'+memNum+'Tal4Type" title="Select an interest in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Actively Involved">Actively Involved</option>'+
          '<option value="Interested">Interested</option>'+
          '</select>';
        formTabIndex = formTabIndex + 1;
        formTabIndex = formTabIndex + 1;
        var tr28 = document.createElement('tr');
        tr28.setAttribute('name', 'tr28'+memNum);
        tr28.setAttribute('id', 'tr28'+memNum);
        mainTableBody.appendChild(tr28);
        tr28.insertCell(0).innerHTML = '<td></td>';
        tr28.insertCell(1).innerHTML = '<td></td>';
        var td28 = document.createElement('td');
        td28.setAttribute('id', 'td28'+memNum);
        td28.setAttribute('colspan', '2');
        tr28.appendChild(td28);
        td28.innerHTML = 
          '&nbsp;&nbsp;&nbsp;<select tabindex="'+formTabIndex+'" name="cboMem'+memNum+'Tal5" id="cboMem'+memNum+'Tal5" title="select a talent pull down list 5 in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Adoration Chapel Hour">Adoration Chapel Hour</option>'+
          '<option value="Adult Server">Adult Server</option>'+
          '<option value="Babysitter">Babysitter</option>'+
          '<option value="Carpentry">Carpentry</option>'+
          '<option value="Cooking">Cooking</option>'+
          '<option value="Eucharistic Minister">Eucharistic Minister</option>'+
          '<option value="Gardening">Gardening</option>'+
          '<option value="General Volunteer">General Volunteer</option>'+
          '<option value="Landscaping">Landscaping</option>'+
          '<option value="Lector">Lector</option>'+
          '<option value="Painting">Painting</option>'+
          '<option value="Parish Library">Parish Library</option>'+
          '<option value="Rosary Makers">Rosary Makers</option>'+
          '<option value="Sacristan">Sacristan</option>'+
          '<option value="Tutor">Tutor</option>'+
          '<option value="Volunteer Driver">Volunteer Driver</option>'+
          '<option value="Youth Server">Youth Server</option>'+
          '</select>';
        var td29 = document.createElement('td');
        td29.setAttribute('id', 'td29'+memNum);
        td29.setAttribute('colspan', '2');
        tr28.appendChild(td29);
        td29.innerHTML = 
          '<select tabindex="'+(formTabIndex+1)+'" name="cboMem'+memNum+'Tal5Type" id="cboMem'+memNum+'Tal5Type" title="Select an interest in the pull down list" style="width:155px" class="pulldownstyle" >'+
          '<option value=""/>'+
          '<option value="Actively Involved">Actively Involved</option>'+
          '<option value="Interested">Interested</option>'+
          '</select>';
        formTabIndex = formTabIndex + 1;
        var tr29 = document.createElement('tr');
        tr29.setAttribute('name', 'tr29'+memNum);
        tr29.setAttribute('id', 'tr29'+memNum);
        mainTableBody.appendChild(tr29);
        tr29.insertCell(0).innerHTML = '<td></td>';
        tr29.insertCell(1).innerHTML = '<td><span class="titlelbl">Remarks</span></td>';
        var td29 = document.createElement('td');
        td29.setAttribute('id', 'td29'+memNum);
        td29.setAttribute('colspan', '5');
        tr29.appendChild(td29);
        formTabIndex = formTabIndex + 1;
        td29.innerHTML = 
          '&nbsp;&nbsp;&nbsp;<textarea rows="5" cols="58" tabindex="'+formTabIndex+'" name="txaMem'+memNum+'Remarks" id="txaMem'+memNum+'Remarks" class="txareastyle"></textarea>';
        var tr9999 = document.createElement('tr');
        tr9999.setAttribute('name', 'tr9999'+memNum);
        tr9999.setAttribute('id', 'tr9999'+memNum);
        mainTableBody.appendChild(tr9999);
        var td9999 = document.createElement('td');
        td9999.setAttribute('id', 'td9999'+memNum);
        td9999.setAttribute('colspan', '8');
        tr9999.appendChild(td9999);
        td9999.innerHTML = '<hr>';
        modifyDisplay();
        BuildTabIndex();
      }
      catch(e) {
        showmodal("", "Information", e);
      }
    }
    function DelNewMem() {
      try {
      	if (memNum>orgMemNum) {
      	  var table = document.getElementById("mainTable");
      	  var mainTableBody = document.getElementById("mainTbody");
      	  var tr1 = document.getElementById('tr1'+memNum);
      	  mainTableBody.removeChild(tr1);
      	  var tr2 = document.getElementById('tr2'+memNum);
      	  mainTableBody.removeChild(tr2);
      	  var tr3 = document.getElementById('tr3'+memNum);
      	  mainTableBody.removeChild(tr3);
      	  var tr4 = document.getElementById('tr4'+memNum);
      	  mainTableBody.removeChild(tr4);
      	  var tr5 = document.getElementById('tr5'+memNum);
      	  mainTableBody.removeChild(tr5);
      	  var tr6 = document.getElementById('tr6'+memNum);
      	  mainTableBody.removeChild(tr6);
      	  var tr7 = document.getElementById('tr7'+memNum);
      	  mainTableBody.removeChild(tr7);
      	  var tr8 = document.getElementById('tr8'+memNum);
      	  mainTableBody.removeChild(tr8);
      	  var tr9 = document.getElementById('tr9'+memNum);
      	  mainTableBody.removeChild(tr9);
      	  var tr10 = document.getElementById('tr10'+memNum);
      	  mainTableBody.removeChild(tr10);
      	  var tr11 = document.getElementById('tr11'+memNum);
      	  mainTableBody.removeChild(tr11);
      	  var tr12 = document.getElementById('tr12'+memNum);
      	  mainTableBody.removeChild(tr12);
      	  var tr13 = document.getElementById('tr13'+memNum);
      	  mainTableBody.removeChild(tr13);
      	  var tr14 = document.getElementById('tr14'+memNum);
      	  mainTableBody.removeChild(tr14);
      	  var tr15 = document.getElementById('tr15'+memNum);
      	  mainTableBody.removeChild(tr15);
      	  var tr16 = document.getElementById('tr16'+memNum);
      	  mainTableBody.removeChild(tr16);
      	  var tr17 = document.getElementById('tr17'+memNum);
      	  mainTableBody.removeChild(tr17);
      	  var tr18 = document.getElementById('tr18'+memNum);
      	  mainTableBody.removeChild(tr18);
      	  var tr19 = document.getElementById('tr19'+memNum);
      	  mainTableBody.removeChild(tr19);
      	  var tr20 = document.getElementById('tr20'+memNum);
      	  mainTableBody.removeChild(tr20);
      	  var tr21 = document.getElementById('tr21'+memNum);
      	  mainTableBody.removeChild(tr21);
      	  var tr22 = document.getElementById('tr22'+memNum);
      	  mainTableBody.removeChild(tr22);
      	  var tr23 = document.getElementById('tr23'+memNum);
      	  mainTableBody.removeChild(tr23);
      	  var tr24 = document.getElementById('tr24'+memNum);
      	  mainTableBody.removeChild(tr24);
      	  var tr25 = document.getElementById('tr25'+memNum);
      	  mainTableBody.removeChild(tr25);
      	  var tr26 = document.getElementById('tr26'+memNum);
      	  mainTableBody.removeChild(tr26);
      	  var tr27 = document.getElementById('tr27'+memNum);
      	  mainTableBody.removeChild(tr27);
      	  var tr28 = document.getElementById('tr28'+memNum);
      	  mainTableBody.removeChild(tr28);
      	  var tr29 = document.getElementById('tr29'+memNum);
      	  mainTableBody.removeChild(tr29);
      	  var tr9999 = document.getElementById('tr9999'+memNum);
      	  var td9999 = document.getElementById('td9999'+memNum);
      	  tr9999.removeChild(td9999);
      	  mainTableBody.removeChild(tr9999);
      	  document.getElementById('btnDelMember').disabled = false;
      	  memNum = memNum-1;
      	  if (memNum <= orgMemNum) {
      	    memNum = orgMemNum;
      	    document.getElementById('btnDelMember').disabled = true;
      	  }
    	    }
      }
      catch(e) {
        showmodal("", "Information", e);
      }
    }
    function toggleMember(num) {
      var table = document.getElementById("mainTable");
      if (table) {
        var showInfo = 'showMember'+num+'Info';
        var MemberBtn = document.getElementById('btnMember'+num+'Btn');
        if ((table.className && table.className.indexOf(showInfo) !== -1) || (MemberBtn.value == "Hide")) {
          table.className = table.className.replace(" " + showInfo, "");
          table.className = table.className.replace(showInfo, "");
          document.getElementById('cboMem'+num+'Type').style.display = 'none';
          document.getElementById('labelMem'+num+'Type').style.display = 'none';
          if (MemberBtn) {
            MemberBtn.value = "Show";
          }
        }
        else {
          if (!table.className || "" == table.className) {
            table.className = showInfo;
          }
          else {
            table.className += " " + showInfo;
          }
          if (MemberBtn) {
            MemberBtn.value = "Hide";
            document.getElementById('cboMem'+num+'Type').style.display = 'inline';
            document.getElementById('labelMem'+num+'Type').style.display = 'inline';
          }
        }
      }
      if (MemberBtn.value == 'Hide') {
        document.getElementById('tr2'+num).style.display = '';
        document.getElementById('tr3'+num).style.display = '';
        document.getElementById('tr4'+num).style.display = '';
        document.getElementById('tr5'+num).style.display = '';
        document.getElementById('tr6'+num).style.display = '';
        document.getElementById('tr7'+num).style.display = '';
        document.getElementById('tr8'+num).style.display = '';
        document.getElementById('tr9'+num).style.display = '';
        document.getElementById('tr10'+num).style.display = '';
        document.getElementById('tr11'+num).style.display = '';
        document.getElementById('tr12'+num).style.display = '';
        document.getElementById('tr13'+num).style.display = '';
        document.getElementById('tr14'+num).style.display = '';
        document.getElementById('tr15'+num).style.display = '';
        document.getElementById('tr16'+num).style.display = '';
        document.getElementById('tr17'+num).style.display = '';
        document.getElementById('tr18'+num).style.display = '';
        document.getElementById('tr19'+num).style.display = '';
        document.getElementById('tr20'+num).style.display = '';
        document.getElementById('tr21'+num).style.display = '';
        document.getElementById('tr22'+num).style.display = '';
        document.getElementById('tr23'+num).style.display = '';
        document.getElementById('tr24'+num).style.display = '';
        document.getElementById('tr25'+num).style.display = '';
        document.getElementById('tr26'+num).style.display = '';
        document.getElementById('tr27'+num).style.display = '';
        document.getElementById('tr28'+num).style.display = '';
        document.getElementById('tr29'+num).style.display = '';
      }
      else {
        document.getElementById('tr2'+num).style.display = 'none';
        document.getElementById('tr3'+num).style.display = 'none';
        document.getElementById('tr4'+num).style.display = 'none';
        document.getElementById('tr5'+num).style.display = 'none';
        document.getElementById('tr6'+num).style.display = 'none';
        document.getElementById('tr7'+num).style.display = 'none';
        document.getElementById('tr8'+num).style.display = 'none';
        document.getElementById('tr9'+num).style.display = 'none';
        document.getElementById('tr10'+num).style.display = 'none';
        document.getElementById('tr11'+num).style.display = 'none';
        document.getElementById('tr12'+num).style.display = 'none';
        document.getElementById('tr13'+num).style.display = 'none';
        document.getElementById('tr14'+num).style.display = 'none';
        document.getElementById('tr15'+num).style.display = 'none';
        document.getElementById('tr16'+num).style.display = 'none';
        document.getElementById('tr17'+num).style.display = 'none';
        document.getElementById('tr18'+num).style.display = 'none';
        document.getElementById('tr19'+num).style.display = 'none';
        document.getElementById('tr20'+num).style.display = 'none';
        document.getElementById('tr21'+num).style.display = 'none';
        document.getElementById('tr22'+num).style.display = 'none';
        document.getElementById('tr23'+num).style.display = 'none';
        document.getElementById('tr24'+num).style.display = 'none';
        document.getElementById('tr25'+num).style.display = 'none';
        document.getElementById('tr26'+num).style.display = 'none';
        document.getElementById('tr27'+num).style.display = 'none';
        document.getElementById('tr28'+num).style.display = 'none';
        document.getElementById('tr29'+num).style.display = 'none';
      }
    }
    // show or hide spouse section
    function toggleSpouse() {
      var table = document.getElementById("mainTable");
      if (table) {
        var showInfo = "showSpouseInfo";
        var spouseBtn = document.getElementById("btnSpouseBtn");
        if (table.className && table.className.indexOf(showInfo) !== -1) {
          table.className = table.className.replace(" " + showInfo, "");
          table.className = table.className.replace(showInfo, "");
          if (spouseBtn) {
            spouseBtn.value = "Show";
          }
        }
        else {
          if (!table.className || "" == table.className) {
            table.className = showInfo;
          }
          else {
            table.className += " " + showInfo;
          }
          if (spouseBtn) {
            spouseBtn.value = "Hide";
          }
        }
      }
    }
    // show or hide Member1 section
    function toggleMember1() {
      var table = document.getElementById("mainTable");
      if (table) {
        var showInfo = "showMember1Info";
        var Member1Btn = document.getElementById("btnMember1Btn");
        if (table.className && table.className.indexOf(showInfo) !== -1) {
          table.className = table.className.replace(" " + showInfo, "");
          table.className = table.className.replace(showInfo, "");
          if (Member1Btn) {
            Member1Btn.value = "Show";
            document.getElementById("cboMem1Type").style.display = 'none';
            document.getElementById("labelMem1Type").style.display = 'none';
            if (document.getElementById("reqlblMem1Type") != null)
              document.getElementById("reqlblMem1Type").style.display = 'none';
          }
        }
        else {
          if (!table.className || "" == table.className) {
            table.className = showInfo;
          }
          else {
            table.className += " " + showInfo;
          }
          if (Member1Btn) {
            Member1Btn.value = "Hide";
            document.getElementById("cboMem1Type").style.display = 'inline';
            document.getElementById("labelMem1Type").style.display = 'inline';
            if (document.getElementById("reqlblMem1Type") != null)
              document.getElementById("reqlblMem1Type").style.display = 'inline';
          }
        }
      }
    }
    // show or hide Fund section
    function toggleFund() {
      var table = document.getElementById("mainTable");
      if (table) {
        var showInfo = "showFundInfo";
        var FundBtn = document.getElementById("btnFundBtn");
        if (table.className && table.className.indexOf(showInfo) !== -1) {
          table.className = table.className.replace(" " + showInfo, "");
          table.className = table.className.replace(showInfo, "");
          if (FundBtn) {
            FundBtn.value = "Show";
          }
        }
        else {
          if (!table.className || "" == table.className) {
            table.className = showInfo;
          }
          else {
            table.className += " " + showInfo;
          }
          if (FundBtn) {
            FundBtn.value = "Hide";
          }
        }
      }
    }
    // e-mail validation
    function IsValidEmail(str) {
      return (str.indexOf(".") > 0) && (str.indexOf("@") > 0);
    }
    // number validation
    function IsNumeric(strString) { // check for valid numeric strings
      var strValidChars = "0123456789.-";
      var strChar;
      var blnResult = true;
      if (strString.length == 0) return false; // test strString consists of valid characters listed above
      for (i = 0; i < strString.length &&  blnResult == true; i++) {
        strChar = strString.charAt(i);
        if (strValidChars.indexOf(strChar) == -1) {
          blnResult = false;
        }
      }
      return blnResult;
    }
    // date validation
    function validateDate(argDate) {
      if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(argDate))
        return false;
      var parts = argDate.split("/");
      var day = parseInt(parts[1], 10),
          month = parseInt(parts[0], 10),
          year = parseInt(parts[2], 10);
      if (year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;
      var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
      if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;
      return (day > 0 && day <= monthLength[month - 1]);
    }
    // radio button validation
    function RbtnChecked(argRbtn) {
      var rbtnResult=true;
      if (argRbtn.checked==false) {
        rbtnResult=false;
      }
      return rbtnResult;
    }
    function CheckForm() {
      if (errcaptcha == true) {
        showmodal("", "Information", "Captcha service is not available.<br><br>Please contact your church.");
        return false;
      }
      else if (errstr != "") {
        showmodal("", "Information", errstr);
        return false;
      }
      var theForm = document.forms["CORegForm"];
      var okay = true;
      var str = '';
      if (((document.getElementById('rbtEditRegID') != null) && (document.getElementById('rbtEditRegID').checked==false)) &&
          ((document.getElementById('rbtNewRegID') != null) && (document.getElementById('rbtNewRegID').checked==false))) {
        showmodal("rbtNewRegID", "Information", 'Please select a registration option');
        okay = false;
        if (document.getElementById('rbtNewRegID') != null)
          document.getElementById('rbtNewRegID').focus();
        return false;
      }
      if (((document.getElementById('rbtEditRegID') != null) && (document.getElementById('rbtEditRegID').checked==true)) ||
          ((document.getElementById('rbtNewRegID') != null) && (document.getElementById('rbtNewRegID').checked==true))) {
        if ((document.CORegForm.txaHeadFirstName.value=='') && (okay == true))
        {
          showmodal('txaHeadFirstName', "Information", 'Please enter head of household first name.');
          okay = false;
          document.CORegForm.txaHeadFirstName.focus();
        }
        else if ((document.CORegForm.txaHeadLastName.value=='') && (okay == true))
        {
          showmodal('txaHeadLastName', "Information", 'Please enter head of household last name.');
          okay = false;
          document.CORegForm.txaHeadLastName.focus();
        }
        else if ((document.CORegForm.txaHeadMidName.value=='') && (okay == true))
        {
          showmodal('txaHeadMidName', "Information", 'Please enter head of household middle name.');
          okay = false;
          document.CORegForm.txaHeadMidName.focus();
        }
        else if ((document.CORegForm.dteHeadBirthday.value=='mm/dd/yyyy')||
                 (document.CORegForm.dteHeadBirthday.value==''))
        {
          if (okay == true)
          {
            var errorMessage = 'Please enter the birth date.';
            showmodal('dteHeadBirthday', "Information", errorMessage);
            okay=false;
            document.CORegForm.dteHeadBirthday.focus();
          }
        }
        else if ((document.CORegForm.dteHeadBirthday.value!='mm/dd/yyyy')&&
                 (!validateDate(document.CORegForm.dteHeadBirthday.value)))
        {
          if (okay == true)
          {
            var errorMessage = 'Please enter birth date format as mm/dd/yyyy.';
            showmodal('dteHeadBirthday', "Information", errorMessage);
            okay=false;
            document.CORegForm.dteHeadBirthday.focus();
          }
        }
        else if ((!RbtnChecked(document.CORegForm.rbtHeadGender[0])) &&
                 (!RbtnChecked(document.CORegForm.rbtHeadGender[1])) &&
            (document.CORegForm.txaHeadFirstName.value!=''))
        {
          if (okay == true)
          {
            var errorMessage = 'Please select head of household gender.';
            showmodal('rbtHeadGenderMale', "Information", errorMessage);
            okay=false;
            document.CORegForm.rbtHeadGender[0].focus();
          }
        }
        else if ((document.CORegForm.cboHeadMary.selectedIndex == 0) && (okay == true))
        {
          showmodal('cboHeadMary', "Information", 'Please select head of household marital status in the pull down list.');
          okay = false;
          document.CORegForm.cboHeadMary.focus();
        }
        else if ((document.CORegForm.cboHeadKW2.selectedIndex == 0) && (okay == true))
        {
          showmodal('cboHeadKW2', "Information", 'Please select head of household district in the pull down list.');
          okay = false;
          document.CORegForm.cboHeadKW2.focus();
        }
        else if ((document.CORegForm.cbxHeadPhone1Unl.checked) &&
                 (document.CORegForm.txnHeadPhone1Num1.value==''))
        {
          showmodal('txnHeadPhone1Num1', "Information", 'Please enter head of household phone area code.');
          okay = false;
          document.CORegForm.txnHeadPhone1Num1.focus();
        }
        else if ((document.CORegForm.cbxHeadPhone1Unl.checked) &&
                 (document.CORegForm.txnHeadPhone1Num2.value==''))
        {
          showmodal('txnHeadPhone1Num2', "Information", 'Please enter head of household phone prefix.');
          okay = false;
          document.CORegForm.txnHeadPhone1Num2.focus();
        }
        else if ((document.CORegForm.cbxHeadPhone1Unl.checked) &&
                 (document.CORegForm.txnHeadPhone1Num3.value==''))
        {
          showmodal('txnHeadPhone1Num3', "Information", 'Please enter head of household phone number.');
          okay = false;
          document.CORegForm.txnHeadPhone1Num3.focus();
        }
        else if ((document.CORegForm.txnHeadPhone1Num1.value=='') && (okay == true))
        {
          showmodal('txnHeadPhone1Num1', "Information", 'Please enter head of household phone area code.');
          okay = false;
          document.CORegForm.txnHeadPhone1Num1.focus();
        }
        else if (!IsNumeric(document.CORegForm.txnHeadPhone1Num1.value))
        {
          showmodal('txnHeadPhone1Num1', "Information", 'Please enter number for the phone.');
          okay = false;
          document.CORegForm.txnHeadPhone1Num1.focus();
        }
        else if ((document.CORegForm.txnHeadPhone1Num2.value=='') && (okay == true))
        {
          showmodal('txnHeadPhone1Num2', "Information", 'Please enter head of household phone prefix.');
          okay = false;
          document.CORegForm.txnHeadPhone1Num2.focus();
        }
        else if (!IsNumeric(document.CORegForm.txnHeadPhone1Num2.value))
        {
          showmodal('txnHeadPhone1Num2', "Information", 'Please enter number for phone.');
          okay = false;
          document.CORegForm.txnHeadPhone1Num2.focus();
        }
        else if ((document.CORegForm.txnHeadPhone1Num3.value=='') && (okay == true))
        {
          showmodal('txnHeadPhone1Num3', "Information", 'Please enter head of household phone number.');
          okay = false;
          document.CORegForm.txnHeadPhone1Num3.focus();
        }
        else if (!IsNumeric(document.CORegForm.txnHeadPhone1Num3.value))
        {
          showmodal('txnHeadPhone1Num3', "Information", 'Please enter number for the phone.');
          okay = false;
          document.CORegForm.txnHeadPhone1Num3.focus();
        }
        else if ((document.CORegForm.cbxHeadEmail1Unl.checked) &&
                 (document.CORegForm.txaHeadEmail1.value=='') && (okay == true))
        {
          showmodal('txaHeadEmail1', "Information", 'Please enter head of household email 1 address.');
          okay = false;
          document.CORegForm.txaHeadEmail1.focus();
        }
        else if ((document.CORegForm.txaHeadEmail1.value=='') && (okay == true))
        {
          showmodal('txaHeadEmail1', "Information", 'Please enter head of household email 1 address.');
          okay = false;
          document.CORegForm.txaHeadEmail1.focus();
        }
        else if (!IsValidEmail(document.CORegForm.txaHeadEmail1.value) && (okay == true))
        {
          showmodal('txaHeadEmail1', "Information", 'Head of Household email 1 address is incorrect.');
          okay = false;
          document.CORegForm.txaHeadEmail1.focus();
        }
        else if ((document.CORegForm.txaSpouseFirstName.value!='') && (document.CORegForm.dteSpouseBirthday.value!='mm/dd/yyyy') &&
                 (!validateDate(document.CORegForm.dteSpouseBirthday.value)))
        {
          if (okay == true)
          {
            var errorMessage = 'Please enter birth date format as mm/dd/yyyy.';
            showmodal('dteSpouseBirthday', "Information", errorMessage);
            okay=false;
            document.CORegForm.dteSpouseBirthday.focus();
          }
        }
        else if ((document.CORegForm.txaStreetAddress.value=='') && (okay == true))
        {
          showmodal('txaStreetAddress', "Information", 'Please enter the street address.');
          okay = false;
          document.CORegForm.txaStreetAddress.focus();
        }
        else if ((document.CORegForm.txaStreetCity.value=='') && (okay == true))
        {
          showmodal('txaStreetCity', "Information", 'Please enter the street city.');
          okay = false;
          document.CORegForm.txaStreetCity.focus();
        }
        else if ((document.CORegForm.cboStreetState.selectedIndex == 0) && (okay == true))
        {
          showmodal('cboStreetState', "Information", 'Please select street state in the pull down list.');
          okay = false;
          document.CORegForm.cboStreetState.focus();
        }
        else if ((document.CORegForm.txaStreetZIP.value=='') && (okay == true))
        {
          showmodal('txaStreetZIP', "Information", 'Please enter the street zip.');
          okay = false;
          document.CORegForm.txaStreetZIP.focus();
        }
        else if ((document.CORegForm.cbxAddrPhone1Unl.checked) &&
                 (document.CORegForm.txnAddrPhone1Num1.value==''))
        {
          showmodal("txnAddrPhone1Num1", "Information", 'Please enter the family phone area code.');
          okay = false;
          document.CORegForm.txnAddrPhone1Num1.focus();
        }
        else if ((document.CORegForm.cbxAddrPhone1Unl.checked) &&
                 (document.CORegForm.txnAddrPhone1Num2.value==''))
        {
          showmodal("txnAddrPhone1Num2", "Information", 'Please enter the family phone prefix.');
          okay = false;
          document.CORegForm.txnAddrPhone1Num2.focus();
        }
        else if ((document.CORegForm.cbxAddrPhone1Unl.checked) &&
                 (document.CORegForm.txnAddrPhone1Num3.value==''))
        {
          showmodal("txnAddrPhone1Num3", "Information", 'Please enter the family phone number.');
          okay = false;
          document.CORegForm.txnAddrPhone1Num3.focus();
        }
        else if ((document.CORegForm.txnAddrPhone1Num1.value=='') && (okay == true))
        {
          showmodal("txnAddrPhone1Num1", "Information", 'Please enter the family phone area code.');
          okay = false;
          document.CORegForm.txnAddrPhone1Num1.focus();
        }
        else if (!IsNumeric(document.CORegForm.txnAddrPhone1Num1.value))
        {
          showmodal("txnAddrPhone1Num1", "Information", 'Please enter number for the phone.');
          okay = false;
          document.CORegForm.txnAddrPhone1Num1.focus();
        }
        else if ((document.CORegForm.txnAddrPhone1Num2.value=='') && (okay == true))
        {
          showmodal("txnAddrPhone1Num2", "Information", 'Please enter the family phone prefix.');
          okay = false;
          document.CORegForm.txnAddrPhone1Num2.focus();
        }
        else if (!IsNumeric(document.CORegForm.txnAddrPhone1Num2.value))
        {
          showmodal("txnAddrPhone1Num2", "Information", 'Please enter number for phone.');
          okay = false;
          document.CORegForm.txnAddrPhone1Numm2.focus();
        }
        else if ((document.CORegForm.txnAddrPhone1Num3.value=='') && (okay == true))
        {
          showmodal("txnAddrPhone1Num3", "Information", 'Please enter the family phone number.');
          okay = false;
          document.CORegForm.txnAddrPhone1Num3.focus();
        }
        else if (!IsNumeric(document.CORegForm.txnAddrPhone1Num3.value))
        {
          showmodal("txnAddrPhone1Num3", "Information", 'Please enter number for the phone.');
          okay = false;
          document.CORegForm.txnAddrPhone1Num3.focus();
        }
        else if ((document.CORegForm.cbxAddrEmailUnl.checked) &&
                 (document.CORegForm.txaAddrEmail.value==''))
        {
          showmodal("txaAddrEmail", "Information", 'Please enter the family email address.');
          okay = false;
          document.CORegForm.txaAddrEmail.focus();
        }
        else if ((document.CORegForm.txaAddrEmail.value=='') && (okay == true))
        {
          showmodal("txaAddrEmail", "Information", 'Please enter the family email address.');
          okay = false;
          document.CORegForm.txaAddrEmail.focus();
        }
        else if (!IsValidEmail(document.CORegForm.txaAddrEmail.value) && (okay == true))
        {
          showmodal("txaAddrEmail", "Information", 'Family email address is incorrect.');
          okay = false;
          document.CORegForm.txaAddrEmail.focus();
        }
        else if ((document.CORegForm.txaMem1FirstName.value!='') && (document.CORegForm.dteMem1Birthday.value!='mm/dd/yyyy')&&
                 (!validateDate(document.CORegForm.dteMem1Birthday.value)))
        {
          if (okay == true)
          {
            var errorMessage = 'Please enter birth date format as mm/dd/yyyy.';
            showmodal('dteMem1Birthday', "Information", errorMessage);
            okay=false;
            document.CORegForm.dteMem1Birthday.focus();
          }
        }
        for (var i=2; i<=memNum; i++) {
        }
      }
      else if ((document.getElementById('rbtEditRegID') != null) && (document.getElementById('rbtEditRegID').checked==true)) {
        if (theForm.elements['txaFamIDEnv'].value=='') {
          showmodal("txaFamIDEnv", "Information", 'Please enter your ID/Env number.\n\nCall Church of St. Helen at (440) 564-5805, if you\ndo not know your ID Number or Envelope Number.');
          okay = false;
          theForm.elements['txaFamIDEnv'].focus();
        }
        else if (theForm.elements['txaHeadFirstName'].value=='') {
          showmodal("txaHeadFirstName", "Information", 'Please select head first name');
          okay = false;
          theForm.elements['txaHeadFirstName'].focus();
        }
        else if (theForm.elements['txaHeadLastName'].value=='') {
          showmodal("txaHeadLastName", "Information", 'Please select head last name');
          okay = false;
          theForm.elements['txaHeadLastName'].focus();
        }
        else if ((theForm.elements['rbtHeadGenderMale'].checked==false) &&
                 (theForm.elements['rbtHeadGenderFemale'].checked==false)) {
          showmodal("rbtHeadGenderMale", "Information", 'Please select head gender');
          okay = false;
          theForm.elements['rbtHeadGenderMale'].focus();
        }
        else if ((document.CORegForm.cbxAddrPhone1Unl.checked) &&
                 (document.CORegForm.txnAddrPhone1Num1.value=='')) {
          showmodal("txnAddrPhone1Num1", "Information", 'Please enter the family phone area code.');
          okay = false;
          document.CORegForm.txnAddrPhone1Num1.focus();
        }
        else if ((document.CORegForm.cbxAddrPhone1Unl.checked) &&
                 (document.CORegForm.txnAddrPhone1Num2.value=='')) {
          showmodal("txnAddrPhone1Num2", "Information", 'Please enter the family phone prefix.');
          okay = false;
          document.CORegForm.txnAddrPhone1Num2.focus();
        }
        else if ((document.CORegForm.cbxAddrPhone1Unl.checked) &&
                 (document.CORegForm.txnAddrPhone1Num3.value=='')) {
          showmodal("txnAddrPhone1Num3", "Information", 'Please enter the family phone number.');
          okay = false;
          document.CORegForm.txnAddrPhone1Num3.focus();
        }
        else if ((document.CORegForm.txnAddrPhone1Num1.value=='') && (okay == true)) {
          showmodal("txnAddrPhone1Num1", "Information", 'Please enter the family phone area code.');
          okay = false;
          document.CORegForm.txnAddrPhone1Num1.focus();
        }
        else if (!IsNumeric(document.CORegForm.txnAddrPhone1Num1.value)) {
          showmodal("txnAddrPhone1Num1", "Information", 'Please enter number for the phone.');
          okay = false;
          document.CORegForm.txnAddrPhone1Num1.focus();
        }
        else if ((document.CORegForm.txnAddrPhone1Num2.value=='') && (okay == true)) {
          showmodal("txnAddrPhone1Num2", "Information", 'Please enter the family phone prefix.');
          okay = false;
          document.CORegForm.txnAddrPhone1Num2.focus();
        }
        else if (!IsNumeric(document.CORegForm.txnAddrPhone1Num2.value)) {
          showmodal("txnAddrPhone1Num2", "Information", 'Please enter number for phone.');
          okay = false;
          document.CORegForm.txnAddrPhone1Numm2.focus();
        }
        else if ((document.CORegForm.txnAddrPhone1Num3.value=='') && (okay == true)) {
          showmodal("txnAddrPhone1Num3", "Information", 'Please enter the family phone number.');
          okay = false;
          document.CORegForm.txnAddrPhone1Num3.focus();
        }
        else if (!IsNumeric(document.CORegForm.txnAddrPhone1Num3.value)) {
          showmodal("txnAddrPhone1Num3", "Information", 'Please enter number for the phone.');
          okay = false;
          document.CORegForm.txnAddrPhone1Num3.focus();
        }
        else if (theForm.elements['txaAddrEmail'].value=='') {
          showmodal("txaAddrEmail", "Information", 'Please enter the family email address');
          okay = false;
          theForm.elements['txaAddrEmail'].focus();
        }
        else if (!IsValidEmail(theForm.elements['txaAddrEmail'].value) && (okay == true)) {
          showmodal("txaAddrEmail", "Information", 'Family email address is incorrect.');
          okay = false;
          theForm.elements['txaAddrEmail'].focus();
        }
      }
      else {
        showmodal("rbtNewRegID", "Information", 'Please select a registration option');
        okay = false;
        if (document.getElementById('rbtNewRegID') != null)
          document.getElementById('rbtNewRegID').focus();
      }
      if (okay == true) {
        var ckvisible = document.getElementById("captsection").style.display;
        if (ckvisible == "none") {
          GetNewCaptcha();
          document.getElementById("captsection").scrollIntoView();
          document.getElementById("appCaptcha").focus();
          okay = false;
        }
      }
      if ((okay == true) && (ckvisible == "block") && (document.getElementById("appCaptcha").value=="")) {
        document.getElementById("captsection").scrollIntoView();
        showmodal("appCaptcha", "Information", "Please enter the characters.");
        okay = false;
      }
      else if ((okay == true) && (ckvisible == "block") && (document.getElementById("appCaptcha").value!="")) {
        var clen = document.getElementById("appCaptcha").value;
        if ((clen.length < 3) || (clen.length > 5)) {
          document.getElementById("captsection").scrollIntoView();
          showmodal("appCaptcha", "Information", "Please enter the same characters.");
          okay = false;
        }
      else okay = true;
      }
      if (okay == true)
        showmodal("", "Confirmation", "Are you ready to submit the form?");
      return okay;
    }
    // get fund period
    function ShowFundPeriod(val, prd)
    {
      var okay = true;
      for (var i=0; i<fndFN.length; i++)
      {
        if (fndFN[i] == val)
        {
          document.getElementById('Fund'+prd+'Period').innerHTML = '('+fndDR[i]+')';
        }
      }
      return okay;
    }
    function checkDate(e) {
      var theForm = document.forms["CORegForm"];
      if ((theForm.elements[e].value!='mm/dd/yyyy')&&
          (!validateDate(theForm.elements[e].value))) {
        clickOutSide();
        showmodal(e, "Information", 'Please enter a date format as mm/dd/yyyy.');
        theForm.elements[e].focus();
      }
    }
    function checkDR(f,e) {
      var theForm = document.forms["CORegForm"];
      if ((theForm.elements['dteFund'+f+e].value!='mm/dd/yyyy')&&
          (!validateDate(theForm.elements['dteFund'+f+e].value))) {
        clickOutSide();
        showmodal('dteFund'+f+e, "Information", 'Please enter valid '+e+' date format as mm/dd/yyyy.');
    	  theForm.elements['dteFund'+f+e].focus();
      }
      else if ((theForm.elements['dteFund'+f+e].value!='mm/dd/yyyy')&&
               (!validateDate(theForm.elements['dteFund'+f+e].value))) {
        clickOutSide();
        showmodal('dteFund'+f+e, "Information", 'Please enter valid '+e+' date format as mm/dd/yyyy.');
    	  theForm.elements['dteFund'+f+e].focus();
      }
      else if (theForm.elements['dteFund'+f+e].value!='mm/dd/yyyy') {
        if ((theForm.elements['cboRecurrFund'+f].value != '')&&
            (theForm.elements['cboTermFund'+f].value != '')&&
            (theForm.elements['dteFund'+f+'Start'].value != '')&&
            (theForm.elements['dteFund'+f+'End'].value != '')) {
          CalcRate(f);
          if (theForm.elements['dteFund'+f+'Start'].value > theForm.elements['dteFund'+f+'End'].value) {
            theForm.elements['dteFund'+f+'End'].value = theForm.elements['dteFund'+f+'Start'].value;
            theForm.elements['dteFund'+f+'End'].focus();
          }
        }
      }
    }
    // calculate and display each fund
    function ATotal(f) {
      Math.E
      Math.PI
      Math.SQRT2
      Math.SQRT1_2
      Math.LN2
      Math.LN10
      Math.LOG2E
      Math.LOG10E
      var theForm = document.forms["CORegForm"];
      var amt = theForm.elements['amtTotalFund'+f].value;
      return amt; //return total;
    }
    function CheckTotalAndRate(id1, id2) {
      if ((document.getElementById(id1) != null) && (document.getElementById(id2) != null) && (document.getElementById(id1).value == "") && (document.getElementById(id2).value != ""))
        document.getElementById(id2).value = "";
      if ((document.getElementById(id1) != null) && (document.getElementById(id2) != null) && (document.getElementById(id2).value == "") && (document.getElementById(id1).value != ""))
        document.getElementById(id1).value = "";
    }
    // calculate total all
    function TotalConAll() {
    }
    // clear total
    function ClearTotal()
    {
    }
    // auto move to a next phone field
    function autoTab(current,next)
    {
      if (current.getAttribute&&current.value.length==current.getAttribute("maxlength"))next.focus();
    }
   function onKeyPressed(evt, input) {
     var code = evt.charCode || evt.keyCode,
         v = document.getElementById(input.id).value;
     if ((code == 27) || (code == 9) || (code == 13) || (validateDate(v))) {
       if (v != "mm/dd/yyyy")
         checkDate(input.id)
       clickOutSide();
       return false;
     }
     else if (v === "mm/dd/yyyy") {
       return false;
     }
   }
   function clickOutSide() {
     if ((calendar !== null) && (_calendar_active_instance !== null)) {
       var ths = _calendar_active_instance;
       if (ths.hasOwnProperty("hideCalendar"))
         ths.hideCalendar();
     }
   }
   function documentClick(e)
   {
     if (document.calendarClicked)
     {
       document.calendarClicked = false;
     }
     else
     {
       clickOutSide();
     }
   }
   var calendar =
   {
     month_names: ["January","February","March","April","May","June","July","August","September","October","November","December"],
     weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
     month_days: [31,28,31,30,31,30,31,31,30,31,30,31],
     //Get today's date - year, month, day and date
     today : new Date(),
     opt : {},
     data: [],
     //Functions
     // Used to create HTML in a optimized way.
     wrt:function(txt)
     {
       this.data.push(txt);
     },
     /* Inspired by http://www.quirksmode.org/dom/getstyles.html */
     getStyle: function(ele, property)
     {
       if (ele.currentStyle)
       {
         var alt_property_name = property.replace(/\-(\w)/g,function(m,c){return c.toUpperCase();});//background-color becomes backgroundColor
    	 var value = ele.currentStyle[property]||ele.currentStyle[alt_property_name];
       }
       else if (window.getComputedStyle)
       {
         property = property.replace(/([A-Z])/g,"-$1").toLowerCase();//backgroundColor becomes background-color
    	 var value = document.defaultView.getComputedStyle(ele,null).getPropertyValue(property);
       }
       //Some properties are special cases
       if(property == "opacity" && ele.filter) value = (parseFloat( ele.filter.match(/opacity\=([^)]*)/)[1] ) / 100);
       else if(property == "width" && isNaN(value)) value = ele.clientWidth || ele.offsetWidth;
       else if(property == "height" && isNaN(value)) value = ele.clientHeight || ele.offsetHeight;
       return value;
     },
     getPosition:function(ele)
     {
       var x = 0;
       var y = 0;
       while (ele)
       {
         x += ele.offsetLeft;
    	 y += ele.offsetTop;
    	 ele = ele.offsetParent;
       } //while
       if (navigator.userAgent.indexOf("Mac") != -1 && typeof document.body.leftMargin != "undefined")
       {
         x += document.body.leftMargin;
    	 offsetTop += document.body.topMargin;
       }
       var xy = new Array(x,y);
       return xy;
     },
     // Called when the user clicks on a date in the calendar.
     selectDate:function(year,month,day)
     {
       var ths = _calendar_active_instance;
       //document.getElementById(ths.opt["input"]).value = year + "-" + month + "-" + day; // Date format is :HARDCODE:
       document.getElementById(ths.opt["input"]).value = month + "/" + day + "/" + year; // Date format is :HARDCODE:
       ths.hideCalendar();
     },
     // Creates a calendar with the date given in the argument as the selected date.
     makeCalendar:function(year, month, day)
     {
       year = parseInt(year);
       month = parseInt(month);
       day = parseInt(day);
       //Display the table
       var next_month = month+1;
       var next_month_year = year;
       if(next_month>=12)
       {
    	 next_month = 0;
    	 next_month_year++;
       }
       var previous_month = month-1;
       var previous_month_year = year;
       if(previous_month< 0)
       {
         previous_month = 11;
    	 previous_month_year--;
       }
       this.wrt("<table>");
       this.wrt("<tr><th><a href='javascript:calendar.makeCalendar("+(previous_month_year)+","+(previous_month)+");' title='"+this.month_names[previous_month]+" "+(previous_month_year)+"'>&lt;</a></th>");
       this.wrt("<th colspan='5' class='calendar-title'><select name='calendar-month' class='calendar-month' onChange='calendar.makeCalendar("+year+",this.value);'>");
       for(var i in this.month_names)
       {
         this.wrt("<option background='#FEFCFF' value='"+i+"'");
    	 if(i == month) this.wrt(" selected='selected'");
    	 this.wrt(">"+this.month_names[i]+"</option>");
       }
       this.wrt("</select>");
       this.wrt("<select background='#FEFCFF' name='calendar-year' class='calendar-year' onChange='calendar.makeCalendar(this.value, "+month+");'>");
       var current_year = this.today.getYear();
       if(current_year < 1900) current_year += 1900;
       for(var i=1899; i<current_year+500; i++)
       {
       	 this.wrt("<option value='"+i+"'")
    	 if(i == year) this.wrt(" selected='selected'");
    	 this.wrt(">"+i+"</option>");
       }
       this.wrt("</select></th>");
       this.wrt("<th><a href='javascript:calendar.makeCalendar("+(next_month_year)+","+(next_month)+");' title='"+this.month_names[next_month]+" "+(next_month_year)+"'>&gt;</a></th></tr>");
       this.wrt("<tr class='header'>");
       for(var weekday=0; weekday<7; weekday++) this.wrt("<td>"+this.weekdays[weekday]+"</td>");
       this.wrt("</tr>");
       //Get the first day of this month
       var first_day = new Date(year,month,1);
       var start_day = first_day.getDay();
       var d = 1;
       var flag = 0;
       //Leap year support
       if(year % 4 == 0) this.month_days[1] = 29;
       else this.month_days[1] = 28;
       var days_in_this_month = this.month_days[month];
       //Create the calender
       for(var i=0;i<=5;i++)
       {
    	 if(w >= days_in_this_month) break;
    	 this.wrt("<tr>");
    	 for(var j=0;j<7;j++)
         {
    	   if(d > days_in_this_month) flag=0; //If the days has overshooted the number of days in this month, stop writing
    	   else if(j >= start_day && !flag) flag=1;//If the first day of this month has come, start the date writing
    	   if(flag)
           {
    	     var w = d, mon = month+1;
    	     if(w < 10)	w	= "0" + w;
    	     if(mon < 10)mon = "0" + mon;
    	     //Is it today?
    	     var class_name = '';
    	     var yea = this.today.getYear();
    	     if(yea < 1900) yea += 1900;
    	     if(yea == year && this.today.getMonth() == month && this.today.getDate() == d) class_name = " today";
    	     if(day == d) class_name += " selected";
    	     class_name += " " + this.weekdays[j].toLowerCase();
    	     this.wrt("<td class='days"+class_name+"'><a href='javascript:calendar.selectDate(\""+year+"\",\""+mon+"\",\""+w+"\")'>"+w+"</a></td>");
    	     d++;
    	   }
           else
           {
    	     this.wrt("<td class='days'>&nbsp;</td>");
    	   }
    	 }
    	this.wrt("</tr>");
      }
      this.wrt("</table>");
      this.wrt("<table>");
      this.wrt("  <tr>");
      this.wrt("    <td>");
      this.wrt("      <input type='button' value='Clear' class='calendar-cancel btnstyle' onclick='calendar.clearCalValue();' />");
      this.wrt("    </td>");
      this.wrt("    <td>");
      this.wrt("      <input type='button' value='Close' class='calendar-cancel btnstyle' onclick='calendar.hideCalendar();' />");
      this.wrt("    </td>");
      this.wrt("  </tr>");
      this.wrt("</table>");
      document.getElementById(this.opt['calendar']).innerHTML = this.data.join("");
      this.data = [];
    },
    // Display the calendar - if a date exists in the input box, that will be selected in the calendar.
    showCalendar: function()
    {
      var input = document.getElementById(this.opt['input']);
      //Position the div in the correct location...
      var div = document.getElementById(this.opt['calendar']);
      var xy = this.getPosition(input);
      var width = parseInt(this.getStyle(input,'width'));
        div.style.left=(xy[0]+width+10)+"px";
      div.style.top=xy[1]+"px";
      // Show the calendar with the date in the input as the selected date
      if ((input.value!='mm/dd/yyyy')&& (validateDate(input.value))) {
        var existing_date = new Date(input.value);
      }
      else {
        var existing_date = new Date();
      }
      var date_in_input = input.value;
      if(date_in_input) {
        var selected_date = false;
    	var date_parts = date_in_input.split("-");
    	if(date_parts.length == 3) {
    	  date_parts[1]--; //Month starts with 0
    	  selected_date = new Date(date_parts[0], date_parts[1], date_parts[2]);
    	}
    	if(selected_date && !isNaN(selected_date.getYear())) { //Valid date.
    	  existing_date = selected_date;
    	}
      }
      var the_year = existing_date.getYear();
      if(the_year < 1900) the_year += 1900;
      this.makeCalendar(the_year, existing_date.getMonth(), existing_date.getDate());
      document.getElementById(this.opt['calendar']).style.display = "block";
      _calendar_active_instance = this;
    },
    // Hides the currently show calendar.
    hideCalendar: function(instance) {
      var active_calendar_id = "";
      if(instance) active_calendar_id = instance.opt['calendar'];
      else active_calendar_id = _calendar_active_instance.opt['calendar'];
      if(active_calendar_id) document.getElementById(active_calendar_id).style.display = "none";
      _calendar_active_instance = {};
      document.getElementById(this.opt['input']).focus();
    },
    // Hides the currently show calendar.
    clearCalValue: function(instance) {
      var active_calendar_id = "";
      if(instance) active_calendar_id = instance.opt['calendar'];
      else active_calendar_id = _calendar_active_instance.opt['calendar'];
      if(active_calendar_id) document.getElementById(active_calendar_id).style.display = "none";
      _calendar_active_instance = {};
      document.getElementById(this.opt['input']).value = "mm/dd/yyyy";
      document.getElementById(this.opt['input']).focus();
    },
    // Setup a text input box to be a calendar box.
    set: function(input_id)
    {
      var input = document.getElementById(input_id);
      if(!input) return; //If the input field is not there, exit.
      if(!this.opt['calendar']) this.init();
      var ths = this;
      input.onclick=function()
      {
    	document.calendarClicked = true;
    	ths.opt['input'] = this.id;
    	ths.showCalendar();
      },
      input.onkeypress=function(e) {
        var code = e.charCode || e.keyCode;
        if ((code == 27) || (code == 9) || (code == 13)) {
          return false;
        }
      };
    },
    // Will be called once when the first input is set.
    init: function()
    {
      if(!this.opt['calendar'] || !document.getElementById(this.opt['calendar']))
      {
        var div = document.createElement('div');
    	if(!this.opt['calendar']) this.opt['calendar'] = 'calender_div_'+ Math.round(Math.random() * 100);
    	div.setAttribute('id',this.opt['calendar']);
    	div.className="calendar-box";
    	document.getElementsByTagName("body")[0].insertBefore(div,document.getElementsByTagName("body")[0].firstChild);
    	div.onclick = function(e)
        {
    	  document.calendarClicked = true;
    	};
      }
    }
   }
