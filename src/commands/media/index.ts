import Message from "../../config/lib/message_class";
import {isCommand} from "../../models/command/is_command";
import {findGroups} from "../../models/group/find_groups";
import {realImageSearch} from "./nsfw/real_image_search";
import {hentaiImageSearch} from "./nsfw/hentai_image_search";
import {hentaiVideoSearch} from "./nsfw/hentai_video_search";
import {imageSearch} from "./others/image_search";
import {tiktokVideoDownloader, tiktokAudioDownloader} from "./others/tiktok_downloader";
import {youtubeMusicDownloader} from "./others/youtube_downloader";
import{stickerMaker} from "./others/sticker_maker";

export const mediaCommands = async(m, sock) => {
	const {message, jid, msg} = new Message(m);
	
	if(message?.toLowerCase()?.startsWith("/imgsearch")){
		imageSearch(message, sock, jid, msg);
	}
	else if(message == "/sticker"){
		stickerMaker(message, sock, jid, msg) 
	}
	else if(message?.toLowerCase()?.startsWith("/tiktok ")){
		tiktokVideoDownloader(message, sock, jid, msg);
	}
	else if(message?.toLowerCase()?.startsWith("/tiktokmp3")){
		tiktokAudioDownloader(message, sock, jid, msg);
	}
	else if(message?.toLowerCase()?.startsWith("/play ")){
		youtubeMusicDownloader(message, sock, jid, msg);
	}
	
	if(isCommand(message, "nsfw")){
		if(findGroups(jid)?.data?.nsfw){
	        if(message?.toLowerCase()?.startsWith("/hsearch ")){
		        hentaiImageSearch(message, sock, jid, msg);
	        }
	        else if(message?.toLowerCase()?.startsWith("/hvideosearch ")){
		        hentaiVideoSearch(message, sock, jid, msg);
	        }
	        else{
		        realImageSearch(message, sock, jid, msg);
	        }
	    }else{
		    sock.sendMessage(jid, {text: "*o nsfw está desabilitado.  para habilitá-lo utilize _/nsfw on_*"}, {quoted:msg})
		}
	}
}