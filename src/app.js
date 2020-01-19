

// const OPERE = require('./static/opere_package.js');
// const wix = require('./components/wix');
// require('./state.js');

// user components
// require('./components/o_opere.js');






// position:${item.location.split(',').map(Number)};无效在 o_marker内还是
//  ["5.991556167602539", "-1.0102713108062744", "3.742217779159546"]
// [0.8999999761581421, 2.299999952316284, 0.06839580088853836]

const creatMarkers = ()=>{
	const $opere = document.querySelector("#opere");
	OPERE.forEach((o)=>{

		const $marker = document.createElement('a-entity');
		// $marker.setAttribute('bind__o_opere','language:language')
		$marker.setAttribute('o_opere',{
			// language:'',
			position: o.location,
			rotation: o.rotation,
			scale: o.dimension,
			quaternion: o.quaternion,
			camera_id: o.camera_id,
			oid: o.id,
			year: o.year,
			height: o.height,
			width: o.width,
			mat_it: o['it']['mat'],
			mat_en: o['en']['mat'],
			title_it: o['it']['title'],
			title_en: o['en']['title'],
			prof_it: o['it']['prof'],
			prof_en: o['en']['prof'],
		})
		
		$opere.appendChild( $marker );
	})
}
const createLoader = (srcs)=>{
	THREE.Cache.enabled =true
	const $scene = document.querySelector("#scene");
	for (let i = 0; i < srcs.length; i++) {
		const src = srcs[i];
		const $asset = document.createElement('a-asset-item');
		$asset.setAttribute('src', src);
	}
	
// 
}

const creatPorta = (index,onRoomId,position)=>{
	const $porta = document.querySelector("#porta");
	const port = document.createElement('a-entity');
	port.setAttribute('o_door',{'index':index,'onRoomId':onRoomId} )
	port.setAttribute('event-set__click',{'index':index,'onRoomId':onRoomId} )
	port.setAttribute('position',position )
	$porta.appendChild( port );

}


const creatDubuggerCam = (name,position)=>{
	const $scene = document.querySelector("#scene");
	const port = document.createElement('a-sphere');
	// port.setAttribute('o_door',{'index':index} )
	port.setAttribute('radius',"0.4" )
	port.setAttribute('position',position )
	port.setAttribute('material',{color: 'yellow', shader: 'flat'})
	port.setAttribute("text",{value:name, width:0.5, zOffset: 0.6, wrapCount:  3, align:'center',
	})
	// port.setAttribute('look-at',"[camera]")
	port.setAttribute('geometry',{segmentsHeight: 12,segmentsWidth: 9})
	$scene.appendChild( port );

}

window.onload = ()=>{
	// AFRAME.utils.device.isMobile ()
	creatMarkers();
	// door_componets
	creatPorta(1,2,'4.96167 -2 -1');
	creatPorta(2,1,'4.96167 -2 -6');
	creatPorta(3,1,'0.446 -2 2.81129');
	creatPorta(1,3,'2.5 -2 2.5');
}



