/* tslint:disable */
/* eslint-disable */

/**
 * Create an encrypted account backup.
 *
 * Exports the database, compresses, encrypts with a key derived from the
 * master seed, chunks into 64KB pieces, and builds relay envelopes to send
 * to the user's own DID.
 *
 * Returns JSON: { "relayMessages": [{ "to_did", "payload" }], "chunkCount": N, "totalSize": N }
 */
export function umbra_wasm_account_create_backup(_json: string): any;

/**
 * Restore an account from an encrypted backup.
 *
 * Takes ordered encrypted chunk data (base64), reassembles, decrypts,
 * decompresses, and imports into the database.
 *
 * Takes JSON: { "chunks": ["base64...", ...], "nonce": "hex..." }
 * Returns JSON: { "imported": { "settings": N, "friends": N, ... } }
 */
export function umbra_wasm_account_restore_backup(json: string): any;

/**
 * Build a dm_file_event relay envelope.
 *
 * Pure data construction — no DB or crypto.
 * Takes JSON: { "conversation_id", "sender_did", "event" (any JSON) }
 * Returns JSON: { "payload": "<stringified envelope>" }
 */
export function umbra_wasm_build_dm_file_event_envelope(json: string): any;

/**
 * Build an account_metadata relay envelope.
 *
 * Pure data construction — no DB or crypto.
 * Takes JSON: { "sender_did", "key", "value" }
 * Returns JSON: { "to_did" (= sender_did), "payload": "<stringified envelope>" }
 */
export function umbra_wasm_build_metadata_envelope(json: string): any;

/**
 * End a call record.
 *
 * Takes JSON: { "id": "...", "status": "completed|missed|declined|cancelled" }
 *
 * Calculates duration_ms from started_at to now.
 * Returns JSON: { "id": "...", "ended_at": ..., "duration_ms": ... }
 */
export function umbra_wasm_calls_end(json: string): any;

/**
 * Get all call history across all conversations.
 *
 * Takes JSON: { "limit": 50, "offset": 0 }
 * Returns JSON array of all call records.
 */
export function umbra_wasm_calls_get_all_history(json: string): any;

/**
 * Get call history for a specific conversation.
 *
 * Takes JSON: { "conversation_id": "...", "limit": 50, "offset": 0 }
 * Returns JSON array of call records.
 */
export function umbra_wasm_calls_get_history(json: string): any;

/**
 * Store a new call record.
 *
 * Takes JSON: { "id": "...", "conversation_id": "...", "call_type": "voice|video",
 *               "direction": "incoming|outgoing", "participants": "[\"did1\",\"did2\"]" }
 *
 * Creates a record with started_at = now (ms), status = "active".
 * Returns JSON: { "id": "...", "started_at": ... }
 */
export function umbra_wasm_calls_store(json: string): any;

/**
 * Derive a per-file encryption key for a community channel file.
 *
 * Input JSON: { "channel_key_hex": "64-char hex", "file_id": "file-uuid", "key_version": 1 }
 * Returns JSON: { "key_hex": "64-char hex string" }
 *
 * Uses HKDF(channel_group_key, file_id || key_version) for domain separation.
 */
export function umbra_wasm_channel_file_derive_key(json: string): any;

/**
 * Chunk a file and store chunks locally.
 *
 * Takes JSON: { file_id, filename, data_b64, chunk_size? }
 * Returns JSON: ChunkManifest
 */
export function umbra_wasm_chunk_file(json: string): any;

/**
 * Chunk a file from raw bytes (no base64 encoding needed).
 *
 * Accepts binary data directly as a Uint8Array from JavaScript,
 * avoiding the overhead of base64 encoding/decoding.
 *
 * Parameters: file_id (string), filename (string), data (&[u8]), chunk_size (optional u32)
 * Returns JSON: ChunkManifest
 */
export function umbra_wasm_chunk_file_bytes(file_id: string, filename: string, data: Uint8Array, chunk_size?: number | null): any;

/**
 * Clear the re-encryption flag after a file has been successfully re-encrypted.
 *
 * Input JSON: { "file_id": "file-uuid", "fingerprint": "optional-16-char-hex" }
 * Returns JSON: { "ok": true }
 */
export function umbra_wasm_clear_reencryption_flag(json: string): any;

/**
 * Get the active warning count for a member.
 *
 * Takes JSON: { "community_id": "...", "member_did": "..." }
 * Returns JSON: { "count": N }
 */
export function umbra_wasm_community_active_warning_count(json: string): any;

/**
 * Get audit log entries for a community.
 *
 * Takes JSON: { "community_id": "...", "limit": 50, "offset": 0 }
 * Returns JSON: AuditLogEntry[]
 */
export function umbra_wasm_community_audit_log(json: string): any;

/**
 * Ban a member from a community.
 *
 * Takes JSON: { "community_id", "target_did", "reason"?, "expires_at"?, "device_fingerprint"?, "actor_did" }
 */
export function umbra_wasm_community_ban(json: string): any;

/**
 * Get all bans for a community.
 *
 * Returns JSON: CommunityBan[]
 */
export function umbra_wasm_community_ban_list(community_id: string): any;

/**
 * Delete a boost node.
 *
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_boost_node_delete(node_id: string): any;

/**
 * Get a specific boost node.
 *
 * Returns JSON: BoostNode object
 */
export function umbra_wasm_community_boost_node_get(node_id: string): any;

/**
 * Update boost node heartbeat (last seen).
 *
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_boost_node_heartbeat(node_id: string): any;

/**
 * Get all boost nodes for a user.
 *
 * Returns JSON: BoostNode[]
 */
export function umbra_wasm_community_boost_node_list(owner_did: string): any;

/**
 * Register a new boost node.
 *
 * Takes JSON: { "owner_did": "...", "node_type": "local"|"remote",
 *               "node_public_key": "...", "name": "...",
 *               "max_storage_bytes": 1073741824, "max_bandwidth_mbps": 100,
 *               "auto_start": true, "prioritized_communities": null,
 *               "pairing_token": null, "remote_address": null }
 * Returns JSON: BoostNode object
 */
export function umbra_wasm_community_boost_node_register(json: string): any;

/**
 * Update boost node configuration.
 *
 * Takes JSON: { "node_id": "...", "name": null, "enabled": null,
 *               "max_storage_bytes": null, "max_bandwidth_mbps": null,
 *               "auto_start": null, "prioritized_communities": null }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_boost_node_update(json: string): any;

/**
 * Build a community_event relay envelope batch for all members except the sender.
 *
 * Takes JSON: { "community_id", "event" (any JSON), "sender_did", "canonical_community_id"? }
 * Returns JSON: [{ "to_did", "payload": "<stringified envelope>" }, ...]
 *
 * `canonical_community_id` is the origin/owner's community ID used in the envelope payload
 * so that receivers can resolve it via `findCommunityByOrigin()`. If not provided, falls back
 * to `community_id` (which is the local ID used for member lookup).
 */
export function umbra_wasm_community_build_event_relay_batch(json: string): any;

/**
 * Create a new category in a space.
 *
 * Takes JSON: { "community_id": "...", "space_id": "...", "name": "...", "position": 0, "actor_did": "..." }
 * Returns JSON: CommunityCategory object
 */
export function umbra_wasm_community_category_create(json: string): any;

/**
 * Delete a category. Channels in this category become uncategorized.
 *
 * Takes JSON: { "category_id": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_category_delete(json: string): any;

/**
 * Get all categories in a space.
 *
 * Returns JSON: CommunityCategory[]
 */
export function umbra_wasm_community_category_list(space_id: string): any;

/**
 * Get all categories in a community (across all spaces).
 *
 * Returns JSON: CommunityCategory[]
 */
export function umbra_wasm_community_category_list_all(community_id: string): any;

/**
 * Reorder categories in a space.
 *
 * Takes JSON: { "space_id": "...", "category_ids": ["...", "..."] }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_category_reorder(json: string): any;

/**
 * Update a category's name.
 *
 * Takes JSON: { "category_id": "...", "name": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_category_update(json: string): any;

/**
 * Create a new channel in a space.
 *
 * Takes JSON: { "community_id", "space_id", "name", "channel_type", "topic"?, "position", "actor_did" }
 * Returns JSON: CommunityChannel object
 */
export function umbra_wasm_community_channel_create(json: string): any;

/**
 * Delete a channel.
 *
 * Takes JSON: { "channel_id": "...", "actor_did": "..." }
 */
export function umbra_wasm_community_channel_delete(json: string): any;

/**
 * Get a single channel by ID.
 *
 * Returns JSON: CommunityChannel object
 */
export function umbra_wasm_community_channel_get(channel_id: string): any;

/**
 * Get the latest channel encryption key.
 *
 * Returns JSON: ChannelKey object or null
 */
export function umbra_wasm_community_channel_key_latest(channel_id: string): any;

/**
 * Store a channel encryption key.
 *
 * Takes JSON: { "channel_id": "...", "key_version": 1, "encrypted_key_b64": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_channel_key_store(json: string): any;

/**
 * Get all channels in a space.
 *
 * Returns JSON: CommunityChannel[]
 */
export function umbra_wasm_community_channel_list(space_id: string): any;

/**
 * Get all channels in a community (across all spaces).
 *
 * Returns JSON: CommunityChannel[]
 */
export function umbra_wasm_community_channel_list_all(community_id: string): any;

/**
 * Move a channel to a different category (or uncategorize it).
 *
 * Takes JSON: { "channel_id": "...", "category_id": "..." or null, "actor_did": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_channel_move_category(json: string): any;

/**
 * Get all permission overrides for a channel.
 *
 * Returns JSON: ChannelPermissionOverride[]
 */
export function umbra_wasm_community_channel_override_list(channel_id: string): any;

/**
 * Remove a permission override.
 *
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_channel_override_remove(override_id: string): any;

/**
 * Set a permission override for a role or member on a channel.
 *
 * Takes JSON: { "channel_id": "...", "target_type": "role"|"member",
 *               "target_id": "...", "allow_bitfield": "...", "deny_bitfield": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_channel_override_set(json: string): any;

/**
 * Reorder channels within a space.
 *
 * Takes JSON: { "space_id": "...", "channel_ids": ["id1", "id2", ...] }
 */
export function umbra_wasm_community_channel_reorder(json: string): any;

/**
 * Toggle E2EE for a channel.
 *
 * Takes JSON: { "channel_id": "...", "enabled": true, "actor_did": "..." }
 */
export function umbra_wasm_community_channel_set_e2ee(json: string): any;

/**
 * Set slow mode for a channel.
 *
 * Takes JSON: { "channel_id": "...", "seconds": 0, "actor_did": "..." }
 */
export function umbra_wasm_community_channel_set_slow_mode(json: string): any;

/**
 * Update a channel's name and/or topic.
 *
 * Takes JSON: { "channel_id": "...", "name"?: "...", "topic"?: "...", "actor_did": "..." }
 */
export function umbra_wasm_community_channel_update(json: string): any;

/**
 * Check for ban evasion by device fingerprint.
 *
 * Takes JSON: { "community_id": "...", "device_fingerprint": "..." }
 * Returns JSON: { "banned_did": "..." | null }
 */
export function umbra_wasm_community_check_ban_evasion(json: string): any;

/**
 * Check warning escalation for a member.
 *
 * Takes JSON: { "community_id": "...", "member_did": "...", "timeout_threshold": null, "ban_threshold": null }
 * Returns JSON: { "action": "timeout" | "ban" | null }
 */
export function umbra_wasm_community_check_escalation(json: string): any;

/**
 * Check if a message matches keyword filters.
 *
 * Takes JSON: { "content": "...", "filters": [{"pattern": "...", "action": "delete"}] }
 * Returns JSON: { "action": "delete" | "warn" | "timeout" | null }
 */
export function umbra_wasm_community_check_keyword_filter(json: string): any;

/**
 * Clear a member's custom status.
 */
export function umbra_wasm_community_clear_member_status(community_id: string, member_did: string): any;

/**
 * Create a new community.
 *
 * Takes JSON: { "name": "...", "description"?: "...", "owner_did": "...", "owner_nickname"?: "..." }
 * Returns JSON: { "community_id", "space_id", "welcome_channel_id", "general_channel_id", "role_ids": { ... } }
 */
export function umbra_wasm_community_create(json: string): any;

/**
 * Create a folder in a community file channel.
 *
 * Takes JSON: { channel_id, parent_folder_id?, name, created_by }
 * Returns JSON: CommunityFileFolderRecord
 */
export function umbra_wasm_community_create_folder(json: string): any;

/**
 * Create a custom role.
 *
 * Takes JSON: { "community_id": "...", "name": "...", "color": null,
 *               "position": 10, "hoisted": false, "mentionable": false,
 *               "permissions_bitfield": "...", "actor_did": "..." }
 * Returns JSON: CommunityRole object
 */
export function umbra_wasm_community_custom_role_create(json: string): any;

/**
 * Delete a community (owner only).
 *
 * Takes JSON: { "id": "...", "actor_did": "..." }
 */
export function umbra_wasm_community_delete(json: string): any;

/**
 * Delete a community file.
 *
 * Takes JSON: { id, actor_did }
 */
export function umbra_wasm_community_delete_file(json: string): any;

/**
 * Delete a community folder.
 *
 * Takes JSON: { id }
 */
export function umbra_wasm_community_delete_folder(json: string): any;

/**
 * Delete a notification setting.
 */
export function umbra_wasm_community_delete_notification_setting(setting_id: string): any;

/**
 * Create a custom emoji.
 *
 * Takes JSON: { "community_id": "...", "name": "...", "image_url": "...",
 *               "animated": false, "uploaded_by": "..." }
 * Returns JSON: CommunityEmoji object
 */
export function umbra_wasm_community_emoji_create(json: string): any;

/**
 * Delete a custom emoji.
 *
 * Takes JSON: { "emoji_id": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_emoji_delete(json: string): any;

/**
 * Get all custom emoji for a community.
 *
 * Returns JSON: CommunityEmoji[]
 */
export function umbra_wasm_community_emoji_list(community_id: string): any;

/**
 * Rename a custom emoji.
 *
 * Takes JSON: { "emoji_id": "...", "new_name": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_emoji_rename(json: string): any;

/**
 * Delete a file.
 *
 * Takes JSON: { "file_id": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_file_delete(json: string): any;

/**
 * Record a file download (increment count).
 *
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_file_download(file_id: string): any;

/**
 * Get a file by ID.
 *
 * Returns JSON: CommunityFile object
 */
export function umbra_wasm_community_file_get(file_id: string): any;

/**
 * Get files in a channel.
 *
 * Takes JSON: { "channel_id": "...", "folder_id": null, "limit": 50, "offset": 0 }
 * Returns JSON: CommunityFile[]
 */
export function umbra_wasm_community_file_list(json: string): any;

/**
 * Upload a file record to a channel.
 *
 * Takes JSON: { "channel_id": "...", "folder_id": null, "filename": "...",
 *               "description": null, "file_size": 1024, "mime_type": null,
 *               "storage_chunks_json": "...", "uploaded_by": "..." }
 * Returns JSON: CommunityFile object
 */
export function umbra_wasm_community_file_upload(json: string): any;

/**
 * Find a community by its origin (remote) community ID.
 *
 * Returns JSON string of the local community ID, or null if not found.
 */
export function umbra_wasm_community_find_by_origin(origin_id: string): any;

/**
 * Create a folder in a file channel.
 *
 * Takes JSON: { "channel_id": "...", "parent_folder_id": null, "name": "...", "created_by": "..." }
 * Returns JSON: CommunityFileFolder object
 */
export function umbra_wasm_community_folder_create(json: string): any;

/**
 * Delete a folder.
 *
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_folder_delete(folder_id: string): any;

/**
 * Get folders in a channel (optionally within a parent folder).
 *
 * Takes JSON: { "channel_id": "...", "parent_folder_id": null }
 * Returns JSON: CommunityFileFolder[]
 */
export function umbra_wasm_community_folder_list(json: string): any;

/**
 * Follow a thread.
 */
export function umbra_wasm_community_follow_thread(thread_id: string, member_did: string): any;

/**
 * Get a community by ID.
 *
 * Returns JSON: Community object
 */
export function umbra_wasm_community_get(community_id: string): any;

/**
 * Get active timeouts for a member.
 */
export function umbra_wasm_community_get_active_timeouts(community_id: string, member_did: string): any;

/**
 * Get a single community file by ID.
 *
 * Takes JSON: { id }
 * Returns JSON: CommunityFileRecord
 */
export function umbra_wasm_community_get_file(json: string): any;

/**
 * List files in a community channel/folder.
 *
 * Takes JSON: { channel_id, folder_id?, limit, offset }
 * Returns JSON: CommunityFileRecord[]
 */
export function umbra_wasm_community_get_files(json: string): any;

/**
 * List folders in a community channel.
 *
 * Takes JSON: { channel_id, parent_folder_id? }
 * Returns JSON: CommunityFileFolderRecord[]
 */
export function umbra_wasm_community_get_folders(json: string): any;

/**
 * Get a member's custom status.
 */
export function umbra_wasm_community_get_member_status(community_id: string, member_did: string): any;

/**
 * Get all communities the user is a member of.
 *
 * Returns JSON: Community[]
 */
export function umbra_wasm_community_get_mine(member_did: string): any;

/**
 * Get notification settings for a member.
 */
export function umbra_wasm_community_get_notification_settings(community_id: string, member_did: string): any;

/**
 * Get thread followers.
 */
export function umbra_wasm_community_get_thread_followers(thread_id: string): any;

/**
 * Get all timeouts for a community.
 */
export function umbra_wasm_community_get_timeouts(community_id: string): any;

/**
 * Create an invite link for a community.
 *
 * Takes JSON: { "community_id", "creator_did", "max_uses"?, "expires_at"? }
 * Returns JSON: CommunityInvite object
 */
export function umbra_wasm_community_invite_create(json: string): any;

/**
 * Delete an invite.
 *
 * Takes JSON: { "invite_id": "...", "actor_did": "..." }
 */
export function umbra_wasm_community_invite_delete(json: string): any;

/**
 * Get all invites for a community.
 *
 * Returns JSON: CommunityInvite[]
 */
export function umbra_wasm_community_invite_list(community_id: string): any;

/**
 * Set a vanity invite code for a community.
 *
 * Takes JSON: { "community_id": "...", "vanity_code": "...", "creator_did": "..." }
 * Returns JSON: CommunityInvite object
 */
export function umbra_wasm_community_invite_set_vanity(json: string): any;

/**
 * Use an invite code to join a community.
 *
 * Takes JSON: { "code": "...", "member_did": "..." }
 * Returns JSON: { "community_id": "..." }
 */
export function umbra_wasm_community_invite_use(json: string): any;

/**
 * Check if following a thread.
 */
export function umbra_wasm_community_is_following_thread(thread_id: string, member_did: string): any;

/**
 * Check if a member is muted.
 */
export function umbra_wasm_community_is_member_muted(community_id: string, member_did: string): any;

/**
 * Join a community.
 *
 * Takes JSON: { "community_id": "...", "member_did": "...", "nickname"?: "..." }
 */
export function umbra_wasm_community_join(json: string): any;

/**
 * Kick a member from a community.
 *
 * Takes JSON: { "community_id": "...", "target_did": "...", "actor_did": "..." }
 */
export function umbra_wasm_community_kick(json: string): any;

/**
 * Leave a community.
 *
 * Takes JSON: { "community_id": "...", "member_did": "..." }
 */
export function umbra_wasm_community_leave(json: string): any;

/**
 * Mark a channel as read up to a specific message.
 *
 * Takes JSON: { "channel_id": "...", "member_did": "...", "last_read_message_id": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_mark_read(json: string): any;

/**
 * Get a single member record.
 *
 * Returns JSON: CommunityMember object
 */
export function umbra_wasm_community_member_get(community_id: string, member_did: string): any;

/**
 * Get all members of a community.
 *
 * Returns JSON: CommunityMember[]
 */
export function umbra_wasm_community_member_list(community_id: string): any;

/**
 * Get roles assigned to a specific member.
 *
 * Returns JSON: CommunityRole[]
 */
export function umbra_wasm_community_member_roles(community_id: string, member_did: string): any;

/**
 * Update a member's community profile.
 *
 * Takes JSON: { "community_id", "member_did", "nickname"?, "avatar_url"?, "bio"? }
 */
export function umbra_wasm_community_member_update_profile(json: string): any;

/**
 * Get warnings for a specific member.
 *
 * Takes JSON: { "community_id": "...", "member_did": "..." }
 * Returns JSON: CommunityWarning[]
 */
export function umbra_wasm_community_member_warnings(json: string): any;

/**
 * Delete a message for everyone.
 *
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_message_delete(message_id: string): any;

/**
 * Delete a message for the current user only.
 *
 * Takes JSON: { "message_id": "...", "member_did": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_message_delete_for_me(json: string): any;

/**
 * Edit a message.
 *
 * Takes JSON: { "message_id": "...", "new_content": "...", "editor_did": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_message_edit(json: string): any;

/**
 * Get a single message by ID.
 *
 * Returns JSON: CommunityMessage object
 */
export function umbra_wasm_community_message_get(message_id: string): any;

/**
 * Get messages for a community channel (paginated).
 *
 * Takes JSON: { "channel_id": "...", "limit": 50, "before_timestamp": null }
 * Returns JSON: CommunityMessage[]
 */
export function umbra_wasm_community_message_list(json: string): any;

/**
 * Send a plaintext message to a community channel.
 *
 * Takes JSON: { "channel_id": "...", "sender_did": "...", "content": "...",
 *               "reply_to_id": null, "thread_id": null, "content_warning": null }
 * Returns JSON: CommunityMessage object
 */
export function umbra_wasm_community_message_send(json: string): any;

/**
 * Send an encrypted message to a community channel (E2EE).
 *
 * Takes JSON: { "channel_id": "...", "sender_did": "...", "content_encrypted_b64": "...",
 *               "nonce": "...", "key_version": 1, "reply_to_id": null, "thread_id": null }
 * Returns JSON: { "message_id": "..." }
 */
export function umbra_wasm_community_message_send_encrypted(json: string): any;

/**
 * Store a message received from another member via relay / bridge.
 *
 * Skips permission checks and uses INSERT OR IGNORE so duplicate IDs
 * are silently skipped. Returns `{ "stored": true }`.
 *
 * Takes JSON: { "id": "...", "channel_id": "...", "sender_did": "...",
 *               "content": "...", "created_at": 1234567890 }
 */
export function umbra_wasm_community_message_store_received(json: string): any;

/**
 * Parse mentions from message content.
 */
export function umbra_wasm_community_parse_mentions(content: string): any;

/**
 * Get pinned messages for a channel.
 *
 * Returns JSON: CommunityPin[]
 */
export function umbra_wasm_community_pin_list(channel_id: string): any;

/**
 * Pin a message in a channel.
 *
 * Takes JSON: { "channel_id": "...", "message_id": "...", "pinned_by": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_pin_message(json: string): any;

/**
 * Add a reaction to a message.
 *
 * Takes JSON: { "message_id": "...", "member_did": "...", "emoji": "...", "is_custom": false }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_reaction_add(json: string): any;

/**
 * Get reactions for a message.
 *
 * Returns JSON: CommunityReaction[]
 */
export function umbra_wasm_community_reaction_list(message_id: string): any;

/**
 * Remove a reaction from a message.
 *
 * Takes JSON: { "message_id": "...", "member_did": "...", "emoji": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_reaction_remove(json: string): any;

/**
 * Get read receipts for a channel.
 *
 * Returns JSON: ReadReceipt[]
 */
export function umbra_wasm_community_read_receipts(channel_id: string): any;

/**
 * Record a file download (increments download count).
 *
 * Takes JSON: { id }
 */
export function umbra_wasm_community_record_file_download(json: string): any;

/**
 * Remove a timeout early.
 */
export function umbra_wasm_community_remove_timeout(timeout_id: string, actor_did: string): any;

/**
 * Assign a role to a member.
 *
 * Takes JSON: { "community_id", "member_did", "role_id", "actor_did" }
 */
export function umbra_wasm_community_role_assign(json: string): any;

/**
 * Delete a custom role.
 *
 * Takes JSON: { "role_id": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_role_delete(json: string): any;

/**
 * Get all roles for a community.
 *
 * Returns JSON: CommunityRole[]
 */
export function umbra_wasm_community_role_list(community_id: string): any;

/**
 * Unassign a role from a member.
 *
 * Takes JSON: { "community_id", "member_did", "role_id", "actor_did" }
 */
export function umbra_wasm_community_role_unassign(json: string): any;

/**
 * Update a role's properties.
 *
 * Takes JSON: { "role_id": "...", "name": null, "color": null,
 *               "hoisted": null, "mentionable": null, "position": null, "actor_did": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_role_update(json: string): any;

/**
 * Update a role's permission bitfield.
 *
 * Takes JSON: { "role_id": "...", "permissions_bitfield": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_role_update_permissions(json: string): any;

/**
 * Search messages across all channels in a community.
 *
 * Takes JSON: { "community_id": "...", "query": "...", "limit": 50 }
 * Returns JSON: CommunityMessage[]
 */
export function umbra_wasm_community_search(json: string): any;

/**
 * Advanced search with filters.
 */
export function umbra_wasm_community_search_advanced(json: string): any;

/**
 * Search messages in a channel.
 *
 * Takes JSON: { "channel_id": "...", "query": "...", "limit": 50 }
 * Returns JSON: CommunityMessage[]
 */
export function umbra_wasm_community_search_channel(json: string): any;

/**
 * Claim a seat (auto-join + assign roles).
 *
 * Takes JSON: { "seat_id": "...", "claimer_did": "..." }
 * Returns JSON: CommunitySeat (updated)
 */
export function umbra_wasm_community_seat_claim(json: string): any;

/**
 * Count seats for a community.
 *
 * Returns JSON: { "total": number, "unclaimed": number }
 */
export function umbra_wasm_community_seat_count(community_id: string): any;

/**
 * Create seats in batch (for import).
 *
 * Takes JSON: { "community_id": "...", "seats": [{ "platform", "platform_user_id", "platform_username", "nickname"?, "avatar_url"?, "role_ids": string[] }] }
 * Returns JSON: { "created": number }
 */
export function umbra_wasm_community_seat_create_batch(json: string): any;

/**
 * Delete a seat (admin action).
 *
 * Takes JSON: { "seat_id": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_seat_delete(json: string): any;

/**
 * Find a seat matching a platform account.
 *
 * Takes JSON: { "community_id": "...", "platform": "discord", "platform_user_id": "..." }
 * Returns JSON: CommunitySeat | null
 */
export function umbra_wasm_community_seat_find_match(json: string): any;

/**
 * Get all seats for a community.
 *
 * Returns JSON: CommunitySeat[]
 */
export function umbra_wasm_community_seat_list(community_id: string): any;

/**
 * Get unclaimed seats for a community.
 *
 * Returns JSON: CommunitySeat[]
 */
export function umbra_wasm_community_seat_list_unclaimed(community_id: string): any;

/**
 * Send a system message to a channel.
 */
export function umbra_wasm_community_send_system_message(channel_id: string, content: string): any;

/**
 * Set a custom member status.
 */
export function umbra_wasm_community_set_member_status(json: string): any;

/**
 * Set notification settings.
 */
export function umbra_wasm_community_set_notification_settings(json: string): any;

/**
 * Set a vanity URL for a community.
 *
 * Takes JSON: { "community_id": "...", "vanity_url": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_set_vanity_url(json: string): any;

/**
 * Create a new space in a community.
 *
 * Takes JSON: { "community_id": "...", "name": "...", "position": 0, "actor_did": "..." }
 * Returns JSON: CommunitySpace object
 */
export function umbra_wasm_community_space_create(json: string): any;

/**
 * Delete a space and all its channels.
 *
 * Takes JSON: { "space_id": "...", "actor_did": "..." }
 */
export function umbra_wasm_community_space_delete(json: string): any;

/**
 * Get all spaces in a community.
 *
 * Returns JSON: CommunitySpace[]
 */
export function umbra_wasm_community_space_list(community_id: string): any;

/**
 * Reorder spaces in a community.
 *
 * Takes JSON: { "community_id": "...", "space_ids": ["id1", "id2", ...] }
 */
export function umbra_wasm_community_space_reorder(json: string): any;

/**
 * Update a space's name.
 *
 * Takes JSON: { "space_id": "...", "name": "...", "actor_did": "..." }
 */
export function umbra_wasm_community_space_update(json: string): any;

/**
 * Create a custom sticker.
 *
 * Takes JSON: { "community_id": "...", "pack_id": null, "name": "...",
 *               "image_url": "...", "animated": false, "format": "png", "uploaded_by": "..." }
 * Returns JSON: CommunitySticker object
 */
export function umbra_wasm_community_sticker_create(json: string): any;

/**
 * Delete a custom sticker.
 *
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_sticker_delete(sticker_id: string): any;

/**
 * Get all stickers for a community.
 *
 * Returns JSON: CommunitySticker[]
 */
export function umbra_wasm_community_sticker_list(community_id: string): any;

/**
 * Create a sticker pack.
 *
 * Takes JSON: { "community_id": "...", "name": "...", "description": null,
 *               "cover_sticker_id": null, "created_by": "..." }
 * Returns JSON: StickerPack object
 */
export function umbra_wasm_community_sticker_pack_create(json: string): any;

/**
 * Delete a sticker pack.
 *
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_sticker_pack_delete(pack_id: string): any;

/**
 * Get all sticker packs for a community.
 *
 * Returns JSON: StickerPack[]
 */
export function umbra_wasm_community_sticker_pack_list(community_id: string): any;

/**
 * Rename a sticker pack.
 *
 * Takes JSON: { "pack_id": "...", "new_name": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_sticker_pack_rename(json: string): any;

/**
 * Create a thread from a parent message.
 *
 * Takes JSON: { "channel_id": "...", "parent_message_id": "...", "name": null, "created_by": "..." }
 * Returns JSON: CommunityThread object
 */
export function umbra_wasm_community_thread_create(json: string): any;

/**
 * Get a thread by ID.
 *
 * Returns JSON: CommunityThread object
 */
export function umbra_wasm_community_thread_get(thread_id: string): any;

/**
 * Get all threads in a channel.
 *
 * Returns JSON: CommunityThread[]
 */
export function umbra_wasm_community_thread_list(channel_id: string): any;

/**
 * Get messages in a thread.
 *
 * Takes JSON: { "thread_id": "...", "limit": 50, "before_timestamp": null }
 * Returns JSON: CommunityMessage[]
 */
export function umbra_wasm_community_thread_messages(json: string): any;

/**
 * Timeout a member (mute or restrict).
 */
export function umbra_wasm_community_timeout_member(json: string): any;

/**
 * Transfer community ownership.
 *
 * Takes JSON: { "community_id": "...", "current_owner_did": "...", "new_owner_did": "..." }
 */
export function umbra_wasm_community_transfer_ownership(json: string): any;

/**
 * Unban a member.
 *
 * Takes JSON: { "community_id": "...", "target_did": "...", "actor_did": "..." }
 */
export function umbra_wasm_community_unban(json: string): any;

/**
 * Unfollow a thread.
 */
export function umbra_wasm_community_unfollow_thread(thread_id: string, member_did: string): any;

/**
 * Unpin a message.
 *
 * Takes JSON: { "channel_id": "...", "message_id": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_unpin_message(json: string): any;

/**
 * Update a community's name and/or description.
 *
 * Takes JSON: { "id": "...", "name": "...", "description": "...", "actor_did": "..." }
 */
export function umbra_wasm_community_update(json: string): any;

/**
 * Update community branding.
 *
 * Takes JSON: { "community_id": "...", "icon_url": null, "banner_url": null,
 *               "splash_url": null, "accent_color": null, "custom_css": null, "actor_did": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_update_branding(json: string): any;

/**
 * Upload a file record to a community file channel.
 *
 * Takes JSON: { channel_id, folder_id?, filename, description?, file_size, mime_type?, storage_chunks_json, uploaded_by }
 * Returns JSON: CommunityFileRecord
 */
export function umbra_wasm_community_upload_file(json: string): any;

/**
 * Issue a warning to a member.
 *
 * Takes JSON: { "community_id": "...", "member_did": "...", "reason": "...",
 *               "warned_by": "...", "expires_at": null }
 * Returns JSON: CommunityWarning object
 */
export function umbra_wasm_community_warn_member(json: string): any;

/**
 * Delete a warning.
 *
 * Takes JSON: { "warning_id": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_warning_delete(json: string): any;

/**
 * Get all warnings for a community (paginated).
 *
 * Takes JSON: { "community_id": "...", "limit": 50, "offset": 0 }
 * Returns JSON: CommunityWarning[]
 */
export function umbra_wasm_community_warnings(json: string): any;

/**
 * Create a webhook for a channel.
 *
 * Takes JSON: { "channel_id": "...", "name": "...", "avatar_url": null, "creator_did": "..." }
 * Returns JSON: CommunityWebhook object
 */
export function umbra_wasm_community_webhook_create(json: string): any;

/**
 * Delete a webhook.
 *
 * Takes JSON: { "webhook_id": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_webhook_delete(json: string): any;

/**
 * Get a webhook by ID.
 *
 * Returns JSON: CommunityWebhook object
 */
export function umbra_wasm_community_webhook_get(webhook_id: string): any;

/**
 * Get webhooks for a channel.
 *
 * Returns JSON: CommunityWebhook[]
 */
export function umbra_wasm_community_webhook_list(channel_id: string): any;

/**
 * Update a webhook.
 *
 * Takes JSON: { "webhook_id": "...", "name": null, "avatar_url": null }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_community_webhook_update(json: string): any;

/**
 * Compute a key fingerprint for verification between peers.
 *
 * Input JSON: { "key_hex": "64-char hex" }
 * Returns JSON: { "fingerprint": "16-char hex string" }
 */
export function umbra_wasm_compute_key_fingerprint(json: string): any;

/**
 * Decrypt arbitrary data received from a peer (friend) identified by DID.
 *
 * Input JSON: { "peer_did": "did:key:...", "ciphertext_b64": "...", "nonce_hex": "...", "timestamp": unix_ms, "context": "optional" }
 * Returns JSON: { "plaintext_b64": "..." }
 *
 * Uses X25519 ECDH + AES-256-GCM, same as message decryption but for generic data.
 */
export function umbra_wasm_crypto_decrypt_from_peer(json: string): any;

/**
 * Encrypt arbitrary data for a peer (friend) identified by DID.
 *
 * Input JSON: { "peer_did": "did:key:...", "plaintext_b64": "base64-encoded-data", "context": "optional-context-string" }
 * Returns JSON: { "ciphertext_b64": "...", "nonce_hex": "...", "timestamp": unix_ms }
 *
 * Uses X25519 ECDH + AES-256-GCM, same as message encryption but for generic data.
 */
export function umbra_wasm_crypto_encrypt_for_peer(json: string): any;

/**
 * Sign data with the current identity's Ed25519 key
 *
 * Returns the 64-byte signature.
 */
export function umbra_wasm_crypto_sign(data: Uint8Array): Uint8Array;

/**
 * Verify a signature against a public key
 *
 * Returns true if valid, false otherwise.
 */
export function umbra_wasm_crypto_verify(public_key_hex: string, data: Uint8Array, signature: Uint8Array): boolean;

/**
 * Discover peers that have a specific file via DHT.
 *
 * Takes JSON: { "file_id": "..." }
 * Results arrive asynchronously as "file_transfer" domain events
 * with a "FileProviders" sub-type.
 * Returns JSON: { "ok": true }
 */
export function umbra_wasm_dht_get_providers(json: string): any;

/**
 * Announce that we have a file available in the DHT.
 *
 * Takes JSON: { "file_id": "..." }
 * Returns JSON: { "ok": true }
 */
export function umbra_wasm_dht_start_providing(json: string): any;

/**
 * Stop announcing a file in the DHT.
 *
 * Takes JSON: { "file_id": "..." }
 * Returns JSON: { "ok": true }
 */
export function umbra_wasm_dht_stop_providing(json: string): any;

/**
 * Generate connection info for sharing
 *
 * Returns JSON with link, json, base64, did, peer_id, addresses, display_name
 */
export function umbra_wasm_discovery_get_connection_info(): any;

/**
 * Parse connection info from string (link, base64, or JSON)
 *
 * Returns JSON with did, peer_id, addresses, display_name
 */
export function umbra_wasm_discovery_parse_connection_info(info: string): any;

/**
 * Create a DM shared folder.
 *
 * Takes JSON: { conversation_id, parent_folder_id?, name, created_by }
 * Returns JSON: DmSharedFolderRecord
 */
export function umbra_wasm_dm_create_folder(json: string): any;

/**
 * Delete a DM shared file.
 *
 * Takes JSON: { id }
 */
export function umbra_wasm_dm_delete_file(json: string): any;

/**
 * Delete a DM shared folder.
 *
 * Takes JSON: { id }
 */
export function umbra_wasm_dm_delete_folder(json: string): any;

/**
 * Get a single DM shared file by ID.
 *
 * Takes JSON: { id }
 * Returns JSON: DmSharedFileRecord
 */
export function umbra_wasm_dm_get_file(json: string): any;

/**
 * List DM shared files.
 *
 * Takes JSON: { conversation_id, folder_id?, limit, offset }
 * Returns JSON: DmSharedFileRecord[]
 */
export function umbra_wasm_dm_get_files(json: string): any;

/**
 * List DM shared folders.
 *
 * Takes JSON: { conversation_id, parent_folder_id? }
 * Returns JSON: DmSharedFolderRecord[]
 */
export function umbra_wasm_dm_get_folders(json: string): any;

/**
 * Move a DM file to a different folder.
 *
 * Takes JSON: { id, target_folder_id? }
 */
export function umbra_wasm_dm_move_file(json: string): any;

/**
 * Record a DM file download.
 *
 * Takes JSON: { id }
 */
export function umbra_wasm_dm_record_file_download(json: string): any;

/**
 * Rename a DM shared folder.
 *
 * Takes JSON: { id, name }
 */
export function umbra_wasm_dm_rename_folder(json: string): any;

/**
 * Upload a DM shared file.
 *
 * Takes JSON: { conversation_id, folder_id?, filename, description?, file_size, mime_type?, storage_chunks_json, uploaded_by, encrypted_metadata?, encryption_nonce? }
 * Returns JSON: DmSharedFileRecord
 */
export function umbra_wasm_dm_upload_file(json: string): any;

/**
 * Decrypt a file chunk with a previously derived file key.
 *
 * Input JSON: { "key_hex": "...", "nonce_hex": "...", "encrypted_data_b64": "...", "file_id": "...", "chunk_index": 0 }
 * Returns JSON: { "chunk_data_b64": "..." }
 */
export function umbra_wasm_file_decrypt_chunk(json: string): any;

/**
 * Derive a per-file encryption key from a conversation's shared secret.
 *
 * Input JSON: { "peer_did": "did:key:...", "file_id": "file-uuid", "context": "optional" }
 * Returns JSON: { "key_hex": "64-char hex string" }
 *
 * Both conversation participants independently derive the same key.
 */
export function umbra_wasm_file_derive_key(json: string): any;

/**
 * Encrypt a file chunk with a previously derived file key.
 *
 * Input JSON: { "key_hex": "...", "chunk_data_b64": "...", "file_id": "...", "chunk_index": 0 }
 * Returns JSON: { "nonce_hex": "...", "encrypted_data_b64": "..." }
 */
export function umbra_wasm_file_encrypt_chunk(json: string): any;

/**
 * Drain all buffered Rust trace events and return them as a JSON array.
 *
 * Returns `"[]"` when the `debug-trace` feature is disabled or the
 * bridge subscriber has not been installed. JS should poll this at
 * ~500ms intervals when debug mode is active.
 */
export function umbra_wasm_flush_trace_events(): string;

/**
 * Process a friend request acceptance received via relay.
 *
 * When the remote peer accepted our friend request, we need to:
 * 1. Add them as a friend using their public keys
 * 2. Create a conversation for this friendship
 * 3. Update the outgoing request status to "accepted"
 *
 * This mirrors the logic in `handle_inbound_friend_request` for `FriendRequestType::Accept`.
 * Takes JSON: { "from_did", "from_display_name", "from_signing_key", "from_encryption_key" }
 * Returns JSON: { "friend_did", "conversation_id" }
 */
export function umbra_wasm_friends_accept_from_relay(json: string): any;

/**
 * Accept a friend request
 *
 * Accepts the request by:
 * 1. Looking up the request record (must have sender's keys)
 * 2. Adding the sender as a friend in the database
 * 3. Creating a conversation for this friendship
 * 4. Sending an acceptance response over the network
 *
 * Returns JSON: { "request_id", "status", "conversation_id", "friend_did" }
 */
export function umbra_wasm_friends_accept_request(request_id: string): any;

/**
 * Block a user by DID
 */
export function umbra_wasm_friends_block(did: string, reason?: string | null): void;

/**
 * Build a friend_accept_ack relay envelope.
 *
 * Pure data construction — sends back to the accepter to confirm the handshake.
 * Takes JSON: { "accepter_did": "...", "my_did": "..." }
 * Returns JSON: { "to_did", "payload": "<stringified envelope>" }
 */
export function umbra_wasm_friends_build_accept_ack(json: string): any;

/**
 * Get all blocked users as JSON array
 */
export function umbra_wasm_friends_get_blocked(): any;

/**
 * Get list of friends as JSON array
 *
 * Each friend: { "did": "...", "display_name": "...", "status": "...", "signing_key": "...",
 *                "encryption_key": "...", "created_at": ..., "updated_at": ... }
 */
export function umbra_wasm_friends_list(): any;

/**
 * Get pending incoming friend requests as JSON array
 *
 * Each request: { "id": "...", "from_did": "...", "to_did": "...", "direction": "...",
 *                 "message": "...", "from_display_name": "...", "created_at": ..., "status": "..." }
 */
export function umbra_wasm_friends_pending_requests(direction: string): any;

/**
 * Reject a friend request
 *
 * Updates the request status to "rejected" in the database.
 */
export function umbra_wasm_friends_reject_request(request_id: string): void;

/**
 * Remove a friend by DID
 */
export function umbra_wasm_friends_remove(did: string): boolean;

/**
 * Send a friend request
 *
 * Creates a signed friend request, stores it in the database,
 * and sends it over the P2P network if connected.
 * Returns JSON: { "id": "...", "to_did": "...", "from_did": "...", "created_at": ... }
 */
export function umbra_wasm_friends_send_request(did: string, message?: string | null): any;

/**
 * Store an incoming friend request received via relay.
 * Takes a JSON string with the request fields.
 * Returns JSON: { "duplicate": false } or { "duplicate": true } if already stored.
 */
export function umbra_wasm_friends_store_incoming(json: string): any;

/**
 * Unblock a user by DID
 */
export function umbra_wasm_friends_unblock(did: string): boolean;

/**
 * Update a friend's encryption key after receiving a key_rotation envelope.
 *
 * Verifies the signature using the friend's (unchanged) Ed25519 signing key,
 * then updates the X25519 encryption key in the database.
 *
 * Input JSON: `{ "from_did": "...", "new_encryption_key": "hex", "signature": "hex" }`
 */
export function umbra_wasm_friends_update_encryption_key(json: string): any;

/**
 * Get a stored file manifest.
 *
 * Takes JSON: { file_id }
 * Returns JSON: FileManifestRecord or null
 */
export function umbra_wasm_get_file_manifest(json: string): any;

/**
 * Get files needing re-encryption in a channel (for on-access re-encryption).
 *
 * Input JSON: { "channel_id": "ch-uuid", "limit": 10 }
 * Returns JSON: [{ file record }, ...]
 */
export function umbra_wasm_get_files_needing_reencryption(json: string): any;

/**
 * Accept a group invite.
 *
 * Imports the group key, creates local group + conversation, adds self as member.
 *
 * Takes: invite_id as string
 * Returns JSON: { "group_id", "conversation_id" }
 */
export function umbra_wasm_groups_accept_invite(invite_id: string): any;

/**
 * Add a member to a group.
 *
 * Takes JSON: { "group_id": "...", "did": "...", "display_name": "..." (optional) }
 * Returns JSON: { "group_id", "member_did" }
 */
export function umbra_wasm_groups_add_member(json: string): any;

/**
 * Build a `group_invite_accept` relay envelope.
 *
 * Takes JSON: { "invite_id", "group_id" }
 * Returns JSON: { "relay_messages": [{ "to_did", "payload" }] }
 */
export function umbra_wasm_groups_build_invite_accept_envelope(json: string): any;

/**
 * Build a `group_invite_decline` relay envelope.
 *
 * Takes JSON: { "invite_id" }
 * Returns JSON: { "relay_messages": [{ "to_did", "payload" }] }
 */
export function umbra_wasm_groups_build_invite_decline_envelope(json: string): any;

/**
 * Create a new group.
 *
 * Takes JSON: { "name": "...", "description": "..." (optional) }
 * Returns JSON: { "group_id", "conversation_id", "name" }
 */
export function umbra_wasm_groups_create(json: string): any;

/**
 * Decline a group invite.
 *
 * Takes: invite_id as string
 */
export function umbra_wasm_groups_decline_invite(invite_id: string): void;

/**
 * Decrypt a group message with the specified key version.
 *
 * Takes JSON: { "group_id", "ciphertext_hex", "nonce_hex", "key_version", "sender_did", "timestamp" }
 * Returns JSON: the decrypted plaintext string
 */
export function umbra_wasm_groups_decrypt_message(json: string): any;

/**
 * Delete a group (admin only).
 *
 * Takes: group_id as string
 * Returns JSON: { "group_id" }
 */
export function umbra_wasm_groups_delete(group_id: string): any;

/**
 * Encrypt a group key for a specific member (for invite or key rotation).
 *
 * Uses ECDH with the member's public key to encrypt the raw group key.
 *
 * Takes JSON: { "group_id", "raw_key_hex", "key_version", "member_did" }
 * Returns JSON: { "encrypted_key_hex", "nonce_hex" }
 */
export function umbra_wasm_groups_encrypt_key_for_member(json: string): any;

/**
 * Encrypt a message with the group's shared key.
 *
 * Takes JSON: { "group_id", "plaintext" }
 * Returns JSON: { "ciphertext_hex", "nonce_hex", "key_version" }
 */
export function umbra_wasm_groups_encrypt_message(json: string): any;

/**
 * Generate a shared group key for a newly created group.
 *
 * Creates a random 256-bit AES key, encrypts it with the creator's
 * key-wrapping key (derived from identity via HKDF), and stores it
 * in the group_keys table.
 *
 * Takes: group_id as string
 * Returns JSON: { "group_id", "key_version", "raw_key_hex" }
 *
 * The raw_key_hex is returned so it can be encrypted per-member
 * for relay distribution (ECDH with each invitee).
 */
export function umbra_wasm_groups_generate_key(group_id: string): any;

/**
 * Get group info by ID.
 *
 * Takes: group_id as string
 * Returns JSON: { group fields }
 */
export function umbra_wasm_groups_get(group_id: string): any;

/**
 * Get all members of a group.
 *
 * Takes: group_id as string
 * Returns JSON: [member, ...]
 */
export function umbra_wasm_groups_get_members(group_id: string): any;

/**
 * Get pending group invites.
 *
 * Returns JSON: [invite, ...]
 */
export function umbra_wasm_groups_get_pending_invites(): any;

/**
 * Import a group key received from another member (via invite or key rotation).
 *
 * The key arrives encrypted via ECDH with the sender.
 * We decrypt it using our X25519 key, then re-encrypt with our wrapping key.
 *
 * Takes JSON: { "group_id", "key_version", "encrypted_key_hex", "nonce_hex", "sender_did" }
 * Returns JSON: { "group_id", "key_version" }
 */
export function umbra_wasm_groups_import_key(json: string): any;

/**
 * List all groups.
 *
 * Returns JSON: [group, ...]
 */
export function umbra_wasm_groups_list(): any;

/**
 * Remove a member from a group.
 *
 * Takes JSON: { "group_id": "...", "did": "..." }
 * Returns JSON: { "group_id", "member_did" }
 */
export function umbra_wasm_groups_remove_member(json: string): any;

/**
 * Remove a member with key rotation: remove, rotate key, encrypt new key per remaining member,
 * build `group_key_rotation` + `group_member_removed` envelopes.
 *
 * Takes JSON: { "group_id", "member_did" }
 * Returns JSON: { "key_version": number, "relay_messages": [{ "to_did", "payload" }, ...] }
 */
export function umbra_wasm_groups_remove_member_with_rotation(json: string): any;

/**
 * Rotate the group key (e.g., after removing a member).
 *
 * Generates a new AES-256 key, increments the key version, stores it.
 *
 * Takes: group_id as string
 * Returns JSON: { "group_id", "key_version", "raw_key_hex" }
 */
export function umbra_wasm_groups_rotate_key(group_id: string): any;

/**
 * Send a group invitation: encrypt group key for invitee, build `group_invite` envelope.
 *
 * Orchestrates: get group info, get profile, encrypt key for member, get members list,
 * generate UUID, and build the relay envelope.
 *
 * Takes JSON: { "group_id", "member_did" }
 * Returns JSON: { "relay_messages": [{ "to_did", "payload" }] }
 */
export function umbra_wasm_groups_send_invite(json: string): any;

/**
 * Send a group message: encrypt, store locally, build `group_message` envelopes for all members.
 *
 * Takes JSON: { "group_id", "conversation_id", "text" }
 * Returns JSON: { "message": { id, conversationId, senderDid, timestamp },
 *                  "relay_messages": [{ "to_did", "payload" }, ...] }
 */
export function umbra_wasm_groups_send_message(json: string): any;

/**
 * Store a received group invite.
 *
 * Takes JSON: { "id", "group_id", "group_name", "description", "inviter_did",
 *               "inviter_name", "encrypted_group_key", "nonce", "members_json" }
 */
export function umbra_wasm_groups_store_invite(json: string): void;

/**
 * Update a group's name/description.
 *
 * Takes JSON: { "group_id": "...", "name": "...", "description": "..." }
 * Returns JSON: { "group_id", "updated_at" }
 */
export function umbra_wasm_groups_update(json: string): any;

/**
 * Create a new identity
 *
 * Returns JSON: { "did": "did:key:...", "recovery_phrase": "word1 word2 ..." }
 */
export function umbra_wasm_identity_create(display_name: string): any;

/**
 * Get current identity DID
 */
export function umbra_wasm_identity_get_did(): string;

/**
 * Get current identity profile as JSON
 *
 * Returns JSON: { "did": "...", "display_name": "...", "status": "...", "avatar": "..." }
 */
export function umbra_wasm_identity_get_profile(): any;

/**
 * Restore identity from recovery phrase
 *
 * Returns the DID string on success.
 */
export function umbra_wasm_identity_restore(recovery_phrase: string, display_name: string): string;

/**
 * Rotate the user's X25519 encryption key.
 *
 * Generates a new random encryption keypair (NOT derived from the mnemonic),
 * updates secure storage, signs the new public key with the (unchanged) Ed25519
 * signing key, and builds relay envelopes to notify all friends.
 *
 * Returns JSON: `{ newEncryptionKey, relayMessages: [...], friendCount }`
 */
export function umbra_wasm_identity_rotate_encryption_key(): any;

/**
 * Update identity profile
 *
 * Accepts JSON with optional fields: display_name, status, avatar, banner
 */
export function umbra_wasm_identity_update_profile(json: string): void;

/**
 * Initialize Umbra for web
 *
 * Sets up panic hook and tracing. Must be called before any other function.
 */
export function umbra_wasm_init(): void;

/**
 * Initialize the database
 *
 * Creates an in-memory SQLite database (via sql.js on WASM).
 * Must be called after umbra_wasm_init() and before any data operations.
 */
export function umbra_wasm_init_database(): Promise<any>;

/**
 * Mark all files in a channel for re-encryption after key rotation.
 *
 * Input JSON: { "channel_id": "ch-uuid", "new_key_version": 2 }
 * Returns JSON: { "files_marked": 5 }
 */
export function umbra_wasm_mark_files_for_reencryption(json: string): any;

/**
 * Add a reaction (emoji) to a message.
 *
 * Takes JSON: { "message_id": "...", "emoji": "..." }
 * Returns JSON: { "reactions": [...] } — all reactions for the message
 */
export function umbra_wasm_messaging_add_reaction(json: string): any;

/**
 * Build a delivery receipt relay envelope.
 *
 * Pure data construction — does not touch the database.
 * Takes JSON: { "message_id", "conversation_id", "sender_did", "status" }
 * Returns JSON: { "to_did", "payload": "<stringified envelope>" }
 */
export function umbra_wasm_messaging_build_receipt_envelope(json: string): any;

/**
 * Build a typing indicator relay envelope.
 *
 * Pure data construction — does not touch the database.
 * Takes JSON: { "conversation_id", "recipient_did", "sender_did", "sender_name", "is_typing" }
 * Returns JSON: { "to_did", "payload": "<stringified envelope>" }
 */
export function umbra_wasm_messaging_build_typing_envelope(json: string): any;

/**
 * Create (or get) a DM conversation for a given friend DID.
 *
 * Uses a deterministic conversation ID derived from both DIDs so that both
 * sides always produce the same ID.  If the conversation already exists this
 * is a no-op and the existing ID is returned.
 *
 * Returns JSON: `{ "conversation_id": "..." }`
 */
export function umbra_wasm_messaging_create_dm_conversation(friend_did: string): any;

/**
 * Decrypt a stored message.
 *
 * Messages are stored encrypted in the database. This function decrypts
 * a single message using the shared secret with the friend.
 *
 * Parameters:
 * - conversation_id: The conversation this message belongs to
 * - content_encrypted_b64: Base64-encoded ciphertext
 * - nonce_hex: Hex-encoded 12-byte nonce
 * - sender_did: DID of the message sender
 * - timestamp: Message timestamp (used in AAD)
 *
 * Returns the decrypted plaintext string.
 */
export function umbra_wasm_messaging_decrypt(conversation_id: string, content_encrypted_b64: string, nonce_hex: string, sender_did: string, timestamp: number): any;

/**
 * Soft-delete a message.
 *
 * Only the original sender can delete their own messages.
 *
 * Takes JSON: { "message_id": "..." }
 * Returns JSON: { "message_id", "deleted_at" }
 */
export function umbra_wasm_messaging_delete(json: string): any;

/**
 * Edit a message's content.
 *
 * Re-encrypts the new text and updates the message in the database.
 * Only the original sender can edit their own messages.
 *
 * Takes JSON: { "message_id": "...", "new_text": "..." }
 * Returns JSON: { "message_id", "edited_at", "content_encrypted", "nonce" }
 */
export function umbra_wasm_messaging_edit(json: string): any;

/**
 * Forward a message to another conversation.
 *
 * Copies the message content (re-encrypted) to the target conversation.
 *
 * Takes JSON: { "message_id": "...", "target_conversation_id": "..." }
 * Returns JSON: { "new_message_id", "target_conversation_id" }
 */
export function umbra_wasm_messaging_forward(json: string): any;

/**
 * Get conversations list as JSON array
 *
 * Each conversation: { "id": "...", "friend_did": "...", "created_at": ...,
 *                      "last_message_at": ..., "unread_count": ... }
 */
export function umbra_wasm_messaging_get_conversations(): any;

/**
 * Get messages for a conversation as JSON array
 *
 * Each message: { "id": "...", "conversation_id": "...", "sender_did": "...",
 *                 "content_encrypted": "...", "nonce": "...", "timestamp": ...,
 *                 "delivered": bool, "read": bool }
 */
export function umbra_wasm_messaging_get_messages(conversation_id: string, limit: number, offset: number): any;

/**
 * Get all pinned messages in a conversation.
 *
 * Takes JSON: { "conversation_id": "..." }
 * Returns JSON: [message, ...]
 */
export function umbra_wasm_messaging_get_pinned(json: string): any;

/**
 * Get thread replies for a message.
 *
 * Returns all messages in the thread (parent + replies).
 *
 * Takes JSON: { "parent_id": "..." }
 * Returns JSON: [message, message, ...]
 */
export function umbra_wasm_messaging_get_thread(json: string): any;

/**
 * Mark all messages in a conversation as read
 *
 * Returns the number of messages marked as read.
 */
export function umbra_wasm_messaging_mark_read(conversation_id: string): number;

/**
 * Pin a message in a conversation.
 *
 * Takes JSON: { "message_id": "..." }
 * Returns JSON: { "message_id", "pinned_by", "pinned_at" }
 */
export function umbra_wasm_messaging_pin(json: string): any;

/**
 * Remove a reaction from a message.
 *
 * Takes JSON: { "message_id": "...", "emoji": "..." }
 * Returns JSON: { "reactions": [...] } — remaining reactions
 */
export function umbra_wasm_messaging_remove_reaction(json: string): any;

/**
 * Send a reply in a thread.
 *
 * Creates a new message with thread_id pointing to the parent.
 *
 * Takes JSON: { "parent_id": "...", "text": "..." }
 * Returns JSON: same as send_message, with thread_id set
 */
export function umbra_wasm_messaging_reply_thread(json: string): any;

/**
 * Send a message in a conversation
 *
 * Encrypts the message with the friend's X25519 key (AES-256-GCM),
 * stores it locally, and sends it over the P2P network if connected.
 * Returns JSON: { "id", "conversation_id", "sender_did", "timestamp", "delivered", "read" }
 */
export function umbra_wasm_messaging_send(conversation_id: string, content: string): any;

/**
 * Store an incoming chat message received via relay.
 *
 * Takes JSON with message fields and stores them in the messages table.
 * Validates sender is a known friend, ensures conversation exists (creating
 * one with a deterministic ID if needed), and emits a messageReceived event.
 */
export function umbra_wasm_messaging_store_incoming(json: string): void;

/**
 * Unpin a message.
 *
 * Takes JSON: { "message_id": "..." }
 * Returns JSON: { "message_id" }
 */
export function umbra_wasm_messaging_unpin(json: string): any;

/**
 * Update an incoming message's encrypted content (no sender check).
 * Used for streaming/progressive message updates from remote peers (e.g. Ghost AI).
 *
 * Takes JSON: { "message_id": "...", "content_encrypted": "base64...", "nonce": "hex..." }
 */
export function umbra_wasm_messaging_update_incoming_content(json: string): any;

/**
 * Update a specific message's delivery status.
 *
 * Takes JSON: { "message_id", "status" } where status is "delivered" or "read"
 */
export function umbra_wasm_messaging_update_status(json: string): void;

/**
 * Accept a WebRTC offer and create an answer (step 2 of connection)
 *
 * Takes the offer JSON string from the other peer.
 * Returns JSON string with SDP answer, ICE candidates, and our DID + PeerId.
 * Share this answer back with the offerer.
 */
export function umbra_wasm_network_accept_offer(offer_json: string): Promise<any>;

/**
 * Complete the answerer side of the WebRTC connection (step 3 - answerer side)
 *
 * Called after accept_offer(). Gets the connection on the answerer's side
 * and injects it into the libp2p swarm. The remote peer's identity is
 * extracted from the offer that was passed to accept_offer().
 *
 * `offerer_did` is the DID from the original offer (used to derive PeerId).
 */
export function umbra_wasm_network_complete_answerer(offerer_did?: string | null, offerer_peer_id?: string | null): Promise<any>;

/**
 * Complete the WebRTC handshake (step 3 of connection - offerer side)
 *
 * Takes the answer JSON string from the other peer.
 * After this, the WebRTC connection is injected into the libp2p swarm,
 * triggering Noise handshake → Yamux multiplexing → protocol negotiation.
 * The peer will appear in `connected_peers()` and messages can flow.
 */
export function umbra_wasm_network_complete_handshake(answer_json: string): Promise<any>;

/**
 * Create a WebRTC offer for signaling (step 1 of connection)
 *
 * Returns JSON string with SDP offer, ICE candidates, and our DID + PeerId.
 * Share this with the other peer via QR code or connection link.
 */
export function umbra_wasm_network_create_offer(): Promise<any>;

/**
 * Start the network service
 *
 * Initializes the libp2p swarm with WebRTC transport and begins
 * processing network events. Must be called after identity creation.
 *
 * Also starts a background task that listens for inbound network events
 * (messages, friend requests) and processes them (decrypt, store, emit JS events).
 */
export function umbra_wasm_network_start(): Promise<any>;

/**
 * Get network status as JSON
 *
 * Returns JSON: { "is_running": bool, "peer_count": number, "listen_addresses": [...] }
 */
export function umbra_wasm_network_status(): any;

/**
 * Stop the network service
 */
export function umbra_wasm_network_stop(): Promise<any>;

/**
 * Create a new notification.
 *
 * Takes JSON: { "id": "...", "type": "friend_request_received|call_missed|...",
 *               "title": "...", "description": "...", "related_did": "...",
 *               "related_id": "...", "avatar": "..." }
 *
 * Returns JSON: { "id": "...", "created_at": ... }
 */
export function umbra_wasm_notifications_create(json: string): any;

/**
 * Dismiss (soft-delete) a notification.
 *
 * Takes JSON: { "id": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_notifications_dismiss(json: string): any;

/**
 * Get notifications with optional filters.
 *
 * Takes JSON: { "type": "...", "read": true|false, "limit": 100, "offset": 0 }
 * All fields optional. Returns JSON array of notification records.
 */
export function umbra_wasm_notifications_get(json: string): any;

/**
 * Mark all notifications as read, optionally filtered by type.
 *
 * Takes JSON: { "type": "..." } (type is optional)
 * Returns JSON: { "success": true, "count": N }
 */
export function umbra_wasm_notifications_mark_all_read(json: string): any;

/**
 * Mark a single notification as read.
 *
 * Takes JSON: { "id": "..." }
 * Returns JSON: { "success": true }
 */
export function umbra_wasm_notifications_mark_read(json: string): any;

/**
 * Get unread notification counts by category.
 *
 * Takes JSON: {} (empty object)
 * Returns JSON: { "all": N, "social": N, "calls": N, "mentions": N, "system": N }
 */
export function umbra_wasm_notifications_unread_counts(json: string): any;

/**
 * Delete a plugin bundle from local storage
 */
export function umbra_wasm_plugin_bundle_delete(plugin_id: string): any;

/**
 * List all installed plugin bundles (manifests only)
 */
export function umbra_wasm_plugin_bundle_list(): any;

/**
 * Load a plugin bundle from local storage
 */
export function umbra_wasm_plugin_bundle_load(plugin_id: string): any;

/**
 * Save a plugin bundle to local storage
 */
export function umbra_wasm_plugin_bundle_save(plugin_id: string, manifest: string, bundle: string): any;

/**
 * Delete a value from the plugin KV store
 */
export function umbra_wasm_plugin_kv_delete(plugin_id: string, key: string): any;

/**
 * Get a value from the plugin KV store
 */
export function umbra_wasm_plugin_kv_get(plugin_id: string, key: string): any;

/**
 * List keys in the plugin KV store (optionally filtered by prefix)
 */
export function umbra_wasm_plugin_kv_list(plugin_id: string, prefix: string): any;

/**
 * Set a value in the plugin KV store
 */
export function umbra_wasm_plugin_kv_set(plugin_id: string, key: string, value: string): any;

/**
 * Reassemble a file from stored chunks.
 *
 * Takes JSON: { file_id } (manifest must be stored)
 * Returns JSON: { data_b64: string }
 */
export function umbra_wasm_reassemble_file(json: string): any;

/**
 * Join a relay session for single-scan friend adding (the "scanner" side).
 *
 * Takes a session ID and the offer payload received from the relay,
 * generates an SDP answer, and returns the data for the JS layer to
 * send back to the relay.
 *
 * Returns JSON: { "session_id": "...", "answer_payload": "...", "join_session_message": "..." }
 */
export function umbra_wasm_relay_accept_session(session_id: string, offer_payload: string): Promise<any>;

/**
 * Connect to a relay server
 *
 * Returns JSON with connection info for the JS layer to establish
 * the WebSocket connection and register the DID.
 *
 * Returns JSON: { "connected": true, "relay_url": "...", "did": "..." }
 */
export function umbra_wasm_relay_connect(relay_url: string): Promise<any>;

/**
 * Create a signaling session on the relay for single-scan friend adding.
 *
 * Generates an SDP offer and returns the data needed for the JS layer to:
 * 1. Send a create_session message to the relay via WebSocket
 * 2. Generate a QR code/link with the session ID
 *
 * Returns JSON: { "relay_url": "...", "did": "...", "offer_payload": "...", "create_session_message": "..." }
 */
export function umbra_wasm_relay_create_session(relay_url: string): Promise<any>;

/**
 * Disconnect from the relay server
 *
 * Signals the JS layer to close the WebSocket connection.
 */
export function umbra_wasm_relay_disconnect(): Promise<any>;

/**
 * Fetch offline messages from the relay.
 *
 * Returns the fetch_offline message for the JS layer to send via WebSocket.
 */
export function umbra_wasm_relay_fetch_offline(): Promise<any>;

/**
 * Send a message through the relay (for offline delivery).
 *
 * Returns the relay message for the JS layer to send via WebSocket.
 */
export function umbra_wasm_relay_send(to_did: string, payload: string): Promise<any>;

/**
 * Subscribe to events from the Rust backend
 *
 * The callback receives JSON strings with event data:
 * { "domain": "message"|"friend"|"discovery", "type": "...", "data": {...} }
 */
export function umbra_wasm_subscribe_events(callback: Function): void;

/**
 * Apply a sync blob — decrypt and import its contents into the database.
 *
 * Takes JSON: { "blob": "base64..." }
 * Returns JSON: { "imported": { "settings": N, "friends": N, "groups": N, "blocked_users": N } }
 */
export function umbra_wasm_sync_apply_blob(json: string): any;

/**
 * Create an encrypted sync blob from the current database state.
 *
 * Collects preferences, friends, groups, and blocked users, serialises to
 * CBOR, compresses, and encrypts with AES-256-GCM using a key derived from
 * the recovery seed.
 *
 * Takes JSON: { "section_versions"?: { "preferences": N, "friends": N, ... } }
 * Returns JSON: { "blob": "base64...", "sections": { "name": version } }
 */
export function umbra_wasm_sync_create_blob(json: string): any;

/**
 * Parse a sync blob and return a summary without applying it.
 *
 * Decrypts and inspects the blob to show what data it contains.
 *
 * Takes JSON: { "blob": "base64..." }
 * Returns JSON: { "v": 1, "updated_at": N, "sections": { "friends": { "v": N, "count": N } } }
 */
export function umbra_wasm_sync_parse_blob(json: string): any;

/**
 * Sign a sync auth challenge nonce with the identity's Ed25519 key.
 *
 * Used for the relay's challenge-response auth flow.
 *
 * Takes JSON: { "nonce": "uuid-string" }
 * Returns JSON: { "signature": "base64...", "public_key": "base64..." }
 */
export function umbra_wasm_sync_sign_challenge(json: string): any;

/**
 * Accept an incoming transfer request.
 *
 * Takes JSON: { transfer_id, existing_chunks?: number[] }
 * Returns JSON: { message } — the TransferAccept message to send back.
 */
export function umbra_wasm_transfer_accept(json: string): any;

/**
 * Cancel a transfer.
 *
 * Takes JSON: { transfer_id, reason? }
 * Returns JSON: { message } — the CancelTransfer message to send.
 */
export function umbra_wasm_transfer_cancel(json: string): any;

/**
 * Get the next chunks to send for a transfer (respects flow control).
 *
 * Takes: transfer_id (string)
 * Returns JSON: { chunks: number[], transfer_id }
 */
export function umbra_wasm_transfer_chunks_to_send(transfer_id: string): any;

/**
 * Get a specific transfer session.
 *
 * Takes: transfer_id (string)
 * Returns JSON: TransferSession | null
 */
export function umbra_wasm_transfer_get(transfer_id: string): any;

/**
 * Get incomplete transfer sessions (for resume on restart).
 *
 * Returns JSON: TransferSession[]
 */
export function umbra_wasm_transfer_get_incomplete(): any;

/**
 * Initiate a file transfer to a peer.
 *
 * Takes JSON: { file_id, peer_did, manifest_json }
 * Returns JSON: { transfer_id, relay_message } — relay_message is the serialized
 * FileTransferMessage for JS to send via relay/WebRTC.
 */
export function umbra_wasm_transfer_initiate(json: string): any;

/**
 * List all transfer sessions.
 *
 * Returns JSON: TransferSession[]
 */
export function umbra_wasm_transfer_list(): any;

/**
 * Mark a chunk as sent (for RTT tracking).
 *
 * Takes JSON: { transfer_id, chunk_index }
 */
export function umbra_wasm_transfer_mark_chunk_sent(json: string): any;

/**
 * Handle an incoming file transfer protocol message.
 *
 * Takes JSON: { from_did, message } where message is a serialized FileTransferMessage.
 * Returns JSON: { response_message? } — optional response to send back.
 */
export function umbra_wasm_transfer_on_message(json: string): any;

/**
 * Pause a transfer.
 *
 * Takes: transfer_id (string)
 * Returns JSON: { message } — the PauseTransfer message to send.
 */
export function umbra_wasm_transfer_pause(transfer_id: string): any;

/**
 * Resume a paused transfer.
 *
 * Takes: transfer_id (string)
 * Returns JSON: { message } — the ResumeTransfer message to send.
 */
export function umbra_wasm_transfer_resume(transfer_id: string): any;

/**
 * Verify a key fingerprint received from a remote peer.
 *
 * Input JSON: { "key_hex": "64-char hex", "remote_fingerprint": "16-char hex" }
 * Returns JSON: { "verified": true/false }
 */
export function umbra_wasm_verify_key_fingerprint(json: string): any;

/**
 * Get version
 */
export function umbra_wasm_version(): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly umbra_free_bytes: (a: number) => void;
    readonly umbra_free_result: (a: number) => void;
    readonly umbra_free_string: (a: number) => void;
    readonly umbra_wasm_account_create_backup: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_account_restore_backup: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_build_dm_file_event_envelope: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_build_metadata_envelope: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_calls_end: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_calls_get_all_history: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_calls_get_history: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_calls_store: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_channel_file_derive_key: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_chunk_file: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_chunk_file_bytes: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => [number, number, number];
    readonly umbra_wasm_clear_reencryption_flag: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_active_warning_count: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_audit_log: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_ban: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_ban_list: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_boost_node_delete: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_boost_node_get: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_boost_node_heartbeat: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_boost_node_list: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_boost_node_register: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_boost_node_update: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_build_event_relay_batch: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_category_create: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_category_delete: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_category_list: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_category_list_all: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_category_reorder: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_category_update: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_channel_create: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_channel_delete: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_channel_get: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_channel_key_latest: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_channel_key_store: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_channel_list: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_channel_list_all: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_channel_move_category: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_channel_override_list: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_channel_override_remove: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_channel_override_set: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_channel_reorder: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_channel_set_e2ee: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_channel_set_slow_mode: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_channel_update: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_check_ban_evasion: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_check_escalation: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_check_keyword_filter: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_clear_member_status: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly umbra_wasm_community_create: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_create_folder: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_custom_role_create: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_delete: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_delete_file: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_delete_folder: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_delete_notification_setting: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_emoji_create: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_emoji_delete: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_emoji_list: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_emoji_rename: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_file_delete: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_file_download: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_file_get: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_file_list: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_file_upload: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_find_by_origin: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_folder_create: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_folder_delete: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_folder_list: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_follow_thread: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly umbra_wasm_community_get: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_get_active_timeouts: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly umbra_wasm_community_get_file: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_get_files: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_get_folders: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_get_member_status: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly umbra_wasm_community_get_mine: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_get_notification_settings: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly umbra_wasm_community_get_thread_followers: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_get_timeouts: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_invite_create: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_invite_delete: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_invite_list: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_invite_set_vanity: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_invite_use: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_is_following_thread: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly umbra_wasm_community_is_member_muted: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly umbra_wasm_community_join: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_kick: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_leave: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_mark_read: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_member_get: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly umbra_wasm_community_member_list: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_member_roles: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly umbra_wasm_community_member_update_profile: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_member_warnings: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_message_delete: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_message_delete_for_me: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_message_edit: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_message_get: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_message_list: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_message_send: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_message_send_encrypted: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_message_store_received: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_parse_mentions: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_pin_list: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_pin_message: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_reaction_add: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_reaction_list: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_reaction_remove: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_read_receipts: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_record_file_download: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_remove_timeout: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly umbra_wasm_community_role_assign: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_role_delete: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_role_list: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_role_unassign: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_role_update: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_role_update_permissions: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_search: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_search_advanced: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_search_channel: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_seat_claim: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_seat_count: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_seat_create_batch: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_seat_delete: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_seat_find_match: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_seat_list: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_seat_list_unclaimed: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_send_system_message: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly umbra_wasm_community_set_member_status: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_set_notification_settings: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_set_vanity_url: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_space_create: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_space_delete: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_space_list: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_space_reorder: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_space_update: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_sticker_create: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_sticker_delete: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_sticker_list: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_sticker_pack_create: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_sticker_pack_delete: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_sticker_pack_list: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_sticker_pack_rename: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_thread_create: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_thread_get: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_thread_list: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_thread_messages: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_timeout_member: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_transfer_ownership: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_unban: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_unfollow_thread: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly umbra_wasm_community_unpin_message: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_update: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_update_branding: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_upload_file: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_warn_member: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_warning_delete: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_warnings: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_webhook_create: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_webhook_delete: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_webhook_get: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_webhook_list: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_community_webhook_update: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_compute_key_fingerprint: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_crypto_decrypt_from_peer: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_crypto_encrypt_for_peer: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_crypto_sign: (a: number, b: number) => [number, number, number, number];
    readonly umbra_wasm_crypto_verify: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number, number];
    readonly umbra_wasm_dht_get_providers: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_dht_start_providing: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_dht_stop_providing: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_discovery_get_connection_info: () => [number, number, number];
    readonly umbra_wasm_discovery_parse_connection_info: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_dm_create_folder: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_dm_delete_file: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_dm_delete_folder: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_dm_get_file: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_dm_get_files: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_dm_get_folders: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_dm_move_file: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_dm_record_file_download: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_dm_rename_folder: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_dm_upload_file: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_file_decrypt_chunk: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_file_derive_key: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_file_encrypt_chunk: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_flush_trace_events: () => [number, number];
    readonly umbra_wasm_friends_accept_from_relay: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_friends_accept_request: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_friends_block: (a: number, b: number, c: number, d: number) => [number, number];
    readonly umbra_wasm_friends_build_accept_ack: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_friends_get_blocked: () => [number, number, number];
    readonly umbra_wasm_friends_list: () => [number, number, number];
    readonly umbra_wasm_friends_pending_requests: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_friends_reject_request: (a: number, b: number) => [number, number];
    readonly umbra_wasm_friends_remove: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_friends_send_request: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly umbra_wasm_friends_store_incoming: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_friends_unblock: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_friends_update_encryption_key: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_get_file_manifest: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_get_files_needing_reencryption: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_groups_accept_invite: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_groups_add_member: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_groups_build_invite_accept_envelope: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_groups_build_invite_decline_envelope: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_groups_create: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_groups_decline_invite: (a: number, b: number) => [number, number];
    readonly umbra_wasm_groups_decrypt_message: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_groups_delete: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_groups_encrypt_key_for_member: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_groups_encrypt_message: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_groups_generate_key: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_groups_get: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_groups_get_members: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_groups_get_pending_invites: () => [number, number, number];
    readonly umbra_wasm_groups_import_key: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_groups_list: () => [number, number, number];
    readonly umbra_wasm_groups_remove_member: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_groups_remove_member_with_rotation: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_groups_rotate_key: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_groups_send_invite: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_groups_send_message: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_groups_store_invite: (a: number, b: number) => [number, number];
    readonly umbra_wasm_groups_update: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_identity_create: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_identity_get_did: () => [number, number, number, number];
    readonly umbra_wasm_identity_get_profile: () => [number, number, number];
    readonly umbra_wasm_identity_restore: (a: number, b: number, c: number, d: number) => [number, number, number, number];
    readonly umbra_wasm_identity_rotate_encryption_key: () => [number, number, number];
    readonly umbra_wasm_identity_update_profile: (a: number, b: number) => [number, number];
    readonly umbra_wasm_init: () => [number, number];
    readonly umbra_wasm_init_database: () => any;
    readonly umbra_wasm_mark_files_for_reencryption: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_messaging_add_reaction: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_messaging_build_receipt_envelope: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_messaging_build_typing_envelope: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_messaging_create_dm_conversation: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_messaging_decrypt: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => [number, number, number];
    readonly umbra_wasm_messaging_delete: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_messaging_edit: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_messaging_forward: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_messaging_get_conversations: () => [number, number, number];
    readonly umbra_wasm_messaging_get_messages: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly umbra_wasm_messaging_get_pinned: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_messaging_get_thread: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_messaging_mark_read: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_messaging_pin: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_messaging_remove_reaction: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_messaging_reply_thread: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_messaging_send: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly umbra_wasm_messaging_store_incoming: (a: number, b: number) => [number, number];
    readonly umbra_wasm_messaging_unpin: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_messaging_update_incoming_content: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_messaging_update_status: (a: number, b: number) => [number, number];
    readonly umbra_wasm_network_accept_offer: (a: number, b: number) => any;
    readonly umbra_wasm_network_complete_answerer: (a: number, b: number, c: number, d: number) => any;
    readonly umbra_wasm_network_complete_handshake: (a: number, b: number) => any;
    readonly umbra_wasm_network_create_offer: () => any;
    readonly umbra_wasm_network_start: () => any;
    readonly umbra_wasm_network_status: () => [number, number, number];
    readonly umbra_wasm_network_stop: () => any;
    readonly umbra_wasm_notifications_create: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_notifications_dismiss: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_notifications_get: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_notifications_mark_all_read: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_notifications_mark_read: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_notifications_unread_counts: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_plugin_bundle_delete: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_plugin_bundle_list: () => [number, number, number];
    readonly umbra_wasm_plugin_bundle_load: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_plugin_bundle_save: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number, number];
    readonly umbra_wasm_plugin_kv_delete: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly umbra_wasm_plugin_kv_get: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly umbra_wasm_plugin_kv_list: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly umbra_wasm_plugin_kv_set: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number, number];
    readonly umbra_wasm_reassemble_file: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_relay_accept_session: (a: number, b: number, c: number, d: number) => any;
    readonly umbra_wasm_relay_connect: (a: number, b: number) => any;
    readonly umbra_wasm_relay_create_session: (a: number, b: number) => any;
    readonly umbra_wasm_relay_disconnect: () => any;
    readonly umbra_wasm_relay_fetch_offline: () => any;
    readonly umbra_wasm_relay_send: (a: number, b: number, c: number, d: number) => any;
    readonly umbra_wasm_subscribe_events: (a: any) => void;
    readonly umbra_wasm_sync_apply_blob: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_sync_create_blob: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_sync_parse_blob: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_sync_sign_challenge: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_transfer_accept: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_transfer_cancel: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_transfer_chunks_to_send: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_transfer_get: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_transfer_get_incomplete: () => [number, number, number];
    readonly umbra_wasm_transfer_initiate: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_transfer_list: () => [number, number, number];
    readonly umbra_wasm_transfer_mark_chunk_sent: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_transfer_on_message: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_transfer_pause: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_transfer_resume: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_verify_key_fingerprint: (a: number, b: number) => [number, number, number];
    readonly umbra_wasm_version: () => [number, number];
    readonly wasm_bindgen__closure__destroy__h001df6bdf90d5441: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h6cd4a286508c5168: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__hd471264988bfcda0: (a: number, b: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h7fe67a96f8924da2: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h0028b1ef7214101f: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h09893a61da8dabda: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h09893a61da8dabda_1: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h09893a61da8dabda_2: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h09893a61da8dabda_3: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h985d110834671652: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
