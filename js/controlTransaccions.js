function configClick() {
    //var actualPass=$('#actual-pass').val();
    var actualPass = document.getElementById('actual-pass').value;
    if (actualPass === '') {
        nouMsgInfo('danger', '<b>Error:</b> Escriu la teva contrasenya actual');
        document.getElementById('actual-pass').focus();
        return false;
    }
    var novaPass1 = document.getElementById('nova-pass1').value;
    var novaPass2 = document.getElementById('nova-pass1').value;
    if (novaPass1 !== novaPass2) { /* També ho agafa si deixa els dos en blanc i per tant no es vol canviar*/
        enviarMissatge('danger', '<b>Error:</b> Has d\'escriure la nova contrasenya dos cops iguals!');
        return false;
    };
    var nouNick=$('#nou-nick').val();
    var color=$('#paleta-colors').spectrum("get").toHexString();

    /* Quan estigui tot be... */
    var enviar = new XMLHttpRequest();
    enviar.onreadystatechange = function() {
        if(enviar.readyState == 4 && enviar.status == 200) {
            console.log(enviar.responseText);
            if(enviar.responseText.split(',')[0] === "true") {
                nouMsgInfo('success', '<b>Enhorabona:</b> ' + enviar.responseText.split(',')[1]);            
            } else {
                nouMsgInfo('danger', enviar.responseText.split(',')[1]);
            }
        }
    };
    enviar.open("POST", "f.php", true);
    enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    if(novaPass1 !== '')
        novaPass1 = waw(novaPass1);
    enviar.send("u=&pass=" + waw(actualPass) + "&novaPass=" + novaPass1 + "&nick=" + nouNick + "&color=" + color + "&cookie=" + getCookie('login'));

}

var _0x6928=["","\x6C\x65\x6E\x67\x74\x68","\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74","\x70\x75\x73\x68","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65"];
function waw(_0xfb66x2){var _0xfb66x3=function(_0xfb66x4,_0xfb66x5){var _0xfb66x6=(_0xfb66x4<<_0xfb66x5)|(_0xfb66x4>>>(32-_0xfb66x5));return _0xfb66x6};var _0xfb66x7=function(_0xfb66x8){var _0xfb66x2=_0x6928[0];var _0xfb66x9;var _0xfb66xa;for(_0xfb66x9=7;_0xfb66x9>=0;_0xfb66x9--){_0xfb66xa=(_0xfb66x8>>>(_0xfb66x9*4))&0x0f;_0xfb66x2+=_0xfb66xa.toString(16)};return _0xfb66x2};var _0xfb66xb;var _0xfb66x9,_0xfb66xc;var _0xfb66xd= new Array(80);var _0xfb66xe=0x67452301;var _0xfb66xf=0xEFCDAB89;var _0xfb66x10=0x98BADCFE;var _0xfb66x11=0x10325476;var _0xfb66x12=0xC3D2E1F0;var _0xfb66x13,_0xfb66x14,_0xfb66x15,_0xfb66x16,_0xfb66x17;var _0xfb66x18;_0xfb66x2=unescape(encodeURIComponent(_0xfb66x2));var _0xfb66x19=_0xfb66x2[_0x6928[1]];var _0xfb66x1a=[];for(_0xfb66x9=0;_0xfb66x9<_0xfb66x19-3;_0xfb66x9+=4){_0xfb66xc=_0xfb66x2[_0x6928[2]](_0xfb66x9)<<24|_0xfb66x2[_0x6928[2]](_0xfb66x9+1)<<16|_0xfb66x2[_0x6928[2]](_0xfb66x9+2)<<8|_0xfb66x2[_0x6928[2]](_0xfb66x9+3);_0xfb66x1a[_0x6928[3]](_0xfb66xc)};switch(_0xfb66x19%4){case 0:_0xfb66x9=0x080000000;break;case 1:_0xfb66x9=_0xfb66x2[_0x6928[2]](_0xfb66x19-1)<<24|0x0800000;break;case 2:_0xfb66x9=_0xfb66x2[_0x6928[2]](_0xfb66x19-2)<<24|_0xfb66x2[_0x6928[2]](_0xfb66x19-1)<<16|0x08000;break;case 3:_0xfb66x9=_0xfb66x2[_0x6928[2]](_0xfb66x19-3)<<24|_0xfb66x2[_0x6928[2]](_0xfb66x19-2)<<16|_0xfb66x2[_0x6928[2]](_0xfb66x19-1)<<8|0x80;break};_0xfb66x1a[_0x6928[3]](_0xfb66x9);while((_0xfb66x1a[_0x6928[1]]%16)!=14){_0xfb66x1a[_0x6928[3]](0)};_0xfb66x1a[_0x6928[3]](_0xfb66x19>>>29);_0xfb66x1a[_0x6928[3]]((_0xfb66x19<<3)&0x0ffffffff);for(_0xfb66xb=0;_0xfb66xb<_0xfb66x1a[_0x6928[1]];_0xfb66xb+=16){for(_0xfb66x9=0;_0xfb66x9<16;_0xfb66x9++){_0xfb66xd[_0xfb66x9]=_0xfb66x1a[_0xfb66xb+_0xfb66x9]};for(_0xfb66x9=16;_0xfb66x9<=79;_0xfb66x9++){_0xfb66xd[_0xfb66x9]=_0xfb66x3(_0xfb66xd[_0xfb66x9-3]^_0xfb66xd[_0xfb66x9-8]^_0xfb66xd[_0xfb66x9-14]^_0xfb66xd[_0xfb66x9-16],1)};_0xfb66x13=_0xfb66xe;_0xfb66x14=_0xfb66xf;_0xfb66x15=_0xfb66x10;_0xfb66x16=_0xfb66x11;_0xfb66x17=_0xfb66x12;for(_0xfb66x9=0;_0xfb66x9<=19;_0xfb66x9++){_0xfb66x18=(_0xfb66x3(_0xfb66x13,5)+((_0xfb66x14&_0xfb66x15)|(~_0xfb66x14&_0xfb66x16))+_0xfb66x17+_0xfb66xd[_0xfb66x9]+0x5A827999)&0x0ffffffff;_0xfb66x17=_0xfb66x16;_0xfb66x16=_0xfb66x15;_0xfb66x15=_0xfb66x3(_0xfb66x14,30);_0xfb66x14=_0xfb66x13;_0xfb66x13=_0xfb66x18};for(_0xfb66x9=20;_0xfb66x9<=39;_0xfb66x9++){_0xfb66x18=(_0xfb66x3(_0xfb66x13,5)+(_0xfb66x14^_0xfb66x15^_0xfb66x16)+_0xfb66x17+_0xfb66xd[_0xfb66x9]+0x6ED9EBA1)&0x0ffffffff;_0xfb66x17=_0xfb66x16;_0xfb66x16=_0xfb66x15;_0xfb66x15=_0xfb66x3(_0xfb66x14,30);_0xfb66x14=_0xfb66x13;_0xfb66x13=_0xfb66x18};for(_0xfb66x9=40;_0xfb66x9<=59;_0xfb66x9++){_0xfb66x18=(_0xfb66x3(_0xfb66x13,5)+((_0xfb66x14&_0xfb66x15)|(_0xfb66x14&_0xfb66x16)|(_0xfb66x15&_0xfb66x16))+_0xfb66x17+_0xfb66xd[_0xfb66x9]+0x8F1BBCDC)&0x0ffffffff;_0xfb66x17=_0xfb66x16;_0xfb66x16=_0xfb66x15;_0xfb66x15=_0xfb66x3(_0xfb66x14,30);_0xfb66x14=_0xfb66x13;_0xfb66x13=_0xfb66x18};for(_0xfb66x9=60;_0xfb66x9<=79;_0xfb66x9++){_0xfb66x18=(_0xfb66x3(_0xfb66x13,5)+(_0xfb66x14^_0xfb66x15^_0xfb66x16)+_0xfb66x17+_0xfb66xd[_0xfb66x9]+0xCA62C1D6)&0x0ffffffff;_0xfb66x17=_0xfb66x16;_0xfb66x16=_0xfb66x15;_0xfb66x15=_0xfb66x3(_0xfb66x14,30);_0xfb66x14=_0xfb66x13;_0xfb66x13=_0xfb66x18};_0xfb66xe=(_0xfb66xe+_0xfb66x13)&0x0ffffffff;_0xfb66xf=(_0xfb66xf+_0xfb66x14)&0x0ffffffff;_0xfb66x10=(_0xfb66x10+_0xfb66x15)&0x0ffffffff;_0xfb66x11=(_0xfb66x11+_0xfb66x16)&0x0ffffffff;_0xfb66x12=(_0xfb66x12+_0xfb66x17)&0x0ffffffff};_0xfb66x18=_0xfb66x7(_0xfb66xe)+_0xfb66x7(_0xfb66xf)+_0xfb66x7(_0xfb66x10)+_0xfb66x7(_0xfb66x11)+_0xfb66x7(_0xfb66x12);return _0xfb66x18[_0x6928[4]]()
}