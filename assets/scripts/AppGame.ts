import AssetManager from './manager/AssetManager';
import AudioManager from './manager/AudioManager';
import PopViewManager from './manager/PopViewManager';
import SceneManager from './manager/SceneManager';
import HttpClient from './net/HttpClient';
import GameUtil from './util/GameUtil';
import LocalizedUtil from './util/LocalizedUtil';
import NotifyUtil from './util/NotifyUtil';
import StorageUtil from './util/StorageUtil';
/**
 * 导出各种 Manager
 * 避免直接叫 Game, 和 creator 内部 cc.Game 一样自动导入容易导错包
 */
export default class AppGame {
    /** 资源管理器 */
    public static get AssetManager(): AssetManager {
        return AssetManager.getInstance();
    }
    /** 音频管理器 */
    public static get AudioManager(): AudioManager {
        return AudioManager.getInstance();
    }
    /** 场景管理器 */
    public static get SceneManager(): SceneManager {
        return SceneManager.getInstance();
    }
    /** PopView 管理器 */
    public static get PopViewManager(): PopViewManager {
        return PopViewManager.getInstance();
    }
    /** 游戏工具类 */
    public static get GameUtil(): GameUtil {
        return GameUtil.getInstance();
    }
    /** 多语言工具类 */
    public static get LocalizeUtil(): LocalizedUtil {
        return LocalizedUtil.getInstance();
    }
    /** 全局通知工具 */
    public static get NotifyUtil(): NotifyUtil {
        return NotifyUtil.getInstance();
    }
    /** 客户端存档工具 */
    public static get StorageUtil(): StorageUtil {
        return StorageUtil.getInstance();
    }
    /** http 客户端 */
    public static get HttpClient(): HttpClient {
        return HttpClient.getInstance();
    }
}
