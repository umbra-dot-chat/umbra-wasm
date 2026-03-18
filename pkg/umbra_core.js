/* @ts-self-types="./umbra_core.d.ts" */

/**
 * Create an encrypted account backup.
 *
 * Exports the database, compresses, encrypts with a key derived from the
 * master seed, chunks into 64KB pieces, and builds relay envelopes to send
 * to the user's own DID.
 *
 * Returns JSON: { "relayMessages": [{ "to_did", "payload" }], "chunkCount": N, "totalSize": N }
 * @param {string} _json
 * @returns {any}
 */
export function umbra_wasm_account_create_backup(_json) {
    const ptr0 = passStringToWasm0(_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_account_create_backup(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Restore an account from an encrypted backup.
 *
 * Takes ordered encrypted chunk data (base64), reassembles, decrypts,
 * decompresses, and imports into the database.
 *
 * Takes JSON: { "chunks": ["base64...", ...], "nonce": "hex..." }
 * Returns JSON: { "imported": { "settings": N, "friends": N, ... } }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_account_restore_backup(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_account_restore_backup(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Build a dm_file_event relay envelope.
 *
 * Pure data construction — no DB or crypto.
 * Takes JSON: { "conversation_id", "sender_did", "event" (any JSON) }
 * Returns JSON: { "payload": "<stringified envelope>" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_build_dm_file_event_envelope(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_build_dm_file_event_envelope(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Build an account_metadata relay envelope.
 *
 * Pure data construction — no DB or crypto.
 * Takes JSON: { "sender_did", "key", "value" }
 * Returns JSON: { "to_did" (= sender_did), "payload": "<stringified envelope>" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_build_metadata_envelope(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_build_metadata_envelope(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * End a call record.
 *
 * Takes JSON: { "id": "...", "status": "completed|missed|declined|cancelled" }
 *
 * Calculates duration_ms from started_at to now.
 * Returns JSON: { "id": "...", "ended_at": ..., "duration_ms": ... }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_calls_end(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_calls_end(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all call history across all conversations.
 *
 * Takes JSON: { "limit": 50, "offset": 0 }
 * Returns JSON array of all call records.
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_calls_get_all_history(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_calls_get_all_history(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get call history for a specific conversation.
 *
 * Takes JSON: { "conversation_id": "...", "limit": 50, "offset": 0 }
 * Returns JSON array of call records.
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_calls_get_history(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_calls_get_history(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Store a new call record.
 *
 * Takes JSON: { "id": "...", "conversation_id": "...", "call_type": "voice|video",
 *               "direction": "incoming|outgoing", "participants": "[\"did1\",\"did2\"]" }
 *
 * Creates a record with started_at = now (ms), status = "active".
 * Returns JSON: { "id": "...", "started_at": ... }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_calls_store(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_calls_store(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Derive a per-file encryption key for a community channel file.
 *
 * Input JSON: { "channel_key_hex": "64-char hex", "file_id": "file-uuid", "key_version": 1 }
 * Returns JSON: { "key_hex": "64-char hex string" }
 *
 * Uses HKDF(channel_group_key, file_id || key_version) for domain separation.
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_channel_file_derive_key(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_channel_file_derive_key(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Chunk a file and store chunks locally.
 *
 * Takes JSON: { file_id, filename, data_b64, chunk_size? }
 * Returns JSON: ChunkManifest
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_chunk_file(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_chunk_file(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Chunk a file from raw bytes (no base64 encoding needed).
 *
 * Accepts binary data directly as a Uint8Array from JavaScript,
 * avoiding the overhead of base64 encoding/decoding.
 *
 * Parameters: file_id (string), filename (string), data (&[u8]), chunk_size (optional u32)
 * Returns JSON: ChunkManifest
 * @param {string} file_id
 * @param {string} filename
 * @param {Uint8Array} data
 * @param {number | null} [chunk_size]
 * @returns {any}
 */
export function umbra_wasm_chunk_file_bytes(file_id, filename, data, chunk_size) {
    const ptr0 = passStringToWasm0(file_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(filename, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_chunk_file_bytes(ptr0, len0, ptr1, len1, ptr2, len2, isLikeNone(chunk_size) ? 0x100000001 : (chunk_size) >>> 0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Clear the re-encryption flag after a file has been successfully re-encrypted.
 *
 * Input JSON: { "file_id": "file-uuid", "fingerprint": "optional-16-char-hex" }
 * Returns JSON: { "ok": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_clear_reencryption_flag(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_clear_reencryption_flag(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get the active warning count for a member.
 *
 * Takes JSON: { "community_id": "...", "member_did": "..." }
 * Returns JSON: { "count": N }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_active_warning_count(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_active_warning_count(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get audit log entries for a community.
 *
 * Takes JSON: { "community_id": "...", "limit": 50, "offset": 0 }
 * Returns JSON: AuditLogEntry[]
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_audit_log(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_audit_log(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Ban a member from a community.
 *
 * Takes JSON: { "community_id", "target_did", "reason"?, "expires_at"?, "device_fingerprint"?, "actor_did" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_ban(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_ban(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all bans for a community.
 *
 * Returns JSON: CommunityBan[]
 * @param {string} community_id
 * @returns {any}
 */
export function umbra_wasm_community_ban_list(community_id) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_ban_list(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a boost node.
 *
 * Returns JSON: { "success": true }
 * @param {string} node_id
 * @returns {any}
 */
export function umbra_wasm_community_boost_node_delete(node_id) {
    const ptr0 = passStringToWasm0(node_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_boost_node_delete(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get a specific boost node.
 *
 * Returns JSON: BoostNode object
 * @param {string} node_id
 * @returns {any}
 */
export function umbra_wasm_community_boost_node_get(node_id) {
    const ptr0 = passStringToWasm0(node_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_boost_node_get(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Update boost node heartbeat (last seen).
 *
 * Returns JSON: { "success": true }
 * @param {string} node_id
 * @returns {any}
 */
export function umbra_wasm_community_boost_node_heartbeat(node_id) {
    const ptr0 = passStringToWasm0(node_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_boost_node_heartbeat(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all boost nodes for a user.
 *
 * Returns JSON: BoostNode[]
 * @param {string} owner_did
 * @returns {any}
 */
export function umbra_wasm_community_boost_node_list(owner_did) {
    const ptr0 = passStringToWasm0(owner_did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_boost_node_list(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Register a new boost node.
 *
 * Takes JSON: { "owner_did": "...", "node_type": "local"|"remote",
 *               "node_public_key": "...", "name": "...",
 *               "max_storage_bytes": 1073741824, "max_bandwidth_mbps": 100,
 *               "auto_start": true, "prioritized_communities": null,
 *               "pairing_token": null, "remote_address": null }
 * Returns JSON: BoostNode object
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_boost_node_register(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_boost_node_register(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Update boost node configuration.
 *
 * Takes JSON: { "node_id": "...", "name": null, "enabled": null,
 *               "max_storage_bytes": null, "max_bandwidth_mbps": null,
 *               "auto_start": null, "prioritized_communities": null }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_boost_node_update(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_boost_node_update(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Build a community_event relay envelope batch for all members except the sender.
 *
 * Takes JSON: { "community_id", "event" (any JSON), "sender_did", "canonical_community_id"? }
 * Returns JSON: [{ "to_did", "payload": "<stringified envelope>" }, ...]
 *
 * `canonical_community_id` is the origin/owner's community ID used in the envelope payload
 * so that receivers can resolve it via `findCommunityByOrigin()`. If not provided, falls back
 * to `community_id` (which is the local ID used for member lookup).
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_build_event_relay_batch(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_build_event_relay_batch(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Create a new category in a space.
 *
 * Takes JSON: { "community_id": "...", "space_id": "...", "name": "...", "position": 0, "actor_did": "..." }
 * Returns JSON: CommunityCategory object
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_category_create(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_category_create(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a category. Channels in this category become uncategorized.
 *
 * Takes JSON: { "category_id": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_category_delete(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_category_delete(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all categories in a space.
 *
 * Returns JSON: CommunityCategory[]
 * @param {string} space_id
 * @returns {any}
 */
export function umbra_wasm_community_category_list(space_id) {
    const ptr0 = passStringToWasm0(space_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_category_list(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all categories in a community (across all spaces).
 *
 * Returns JSON: CommunityCategory[]
 * @param {string} community_id
 * @returns {any}
 */
export function umbra_wasm_community_category_list_all(community_id) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_category_list_all(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Reorder categories in a space.
 *
 * Takes JSON: { "space_id": "...", "category_ids": ["...", "..."] }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_category_reorder(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_category_reorder(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Update a category's name.
 *
 * Takes JSON: { "category_id": "...", "name": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_category_update(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_category_update(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Create a new channel in a space.
 *
 * Takes JSON: { "community_id", "space_id", "name", "channel_type", "topic"?, "position", "actor_did" }
 * Returns JSON: CommunityChannel object
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_channel_create(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_channel_create(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a channel.
 *
 * Takes JSON: { "channel_id": "...", "actor_did": "..." }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_channel_delete(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_channel_delete(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get a single channel by ID.
 *
 * Returns JSON: CommunityChannel object
 * @param {string} channel_id
 * @returns {any}
 */
export function umbra_wasm_community_channel_get(channel_id) {
    const ptr0 = passStringToWasm0(channel_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_channel_get(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get the latest channel encryption key.
 *
 * Returns JSON: ChannelKey object or null
 * @param {string} channel_id
 * @returns {any}
 */
export function umbra_wasm_community_channel_key_latest(channel_id) {
    const ptr0 = passStringToWasm0(channel_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_channel_key_latest(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Store a channel encryption key.
 *
 * Takes JSON: { "channel_id": "...", "key_version": 1, "encrypted_key_b64": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_channel_key_store(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_channel_key_store(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all channels in a space.
 *
 * Returns JSON: CommunityChannel[]
 * @param {string} space_id
 * @returns {any}
 */
export function umbra_wasm_community_channel_list(space_id) {
    const ptr0 = passStringToWasm0(space_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_channel_list(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all channels in a community (across all spaces).
 *
 * Returns JSON: CommunityChannel[]
 * @param {string} community_id
 * @returns {any}
 */
export function umbra_wasm_community_channel_list_all(community_id) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_channel_list_all(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Move a channel to a different category (or uncategorize it).
 *
 * Takes JSON: { "channel_id": "...", "category_id": "..." or null, "actor_did": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_channel_move_category(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_channel_move_category(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all permission overrides for a channel.
 *
 * Returns JSON: ChannelPermissionOverride[]
 * @param {string} channel_id
 * @returns {any}
 */
export function umbra_wasm_community_channel_override_list(channel_id) {
    const ptr0 = passStringToWasm0(channel_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_channel_override_list(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Remove a permission override.
 *
 * Returns JSON: { "success": true }
 * @param {string} override_id
 * @returns {any}
 */
export function umbra_wasm_community_channel_override_remove(override_id) {
    const ptr0 = passStringToWasm0(override_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_channel_override_remove(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Set a permission override for a role or member on a channel.
 *
 * Takes JSON: { "channel_id": "...", "target_type": "role"|"member",
 *               "target_id": "...", "allow_bitfield": "...", "deny_bitfield": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_channel_override_set(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_channel_override_set(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Reorder channels within a space.
 *
 * Takes JSON: { "space_id": "...", "channel_ids": ["id1", "id2", ...] }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_channel_reorder(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_channel_reorder(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Toggle E2EE for a channel.
 *
 * Takes JSON: { "channel_id": "...", "enabled": true, "actor_did": "..." }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_channel_set_e2ee(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_channel_set_e2ee(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Set slow mode for a channel.
 *
 * Takes JSON: { "channel_id": "...", "seconds": 0, "actor_did": "..." }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_channel_set_slow_mode(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_channel_set_slow_mode(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Update a channel's name and/or topic.
 *
 * Takes JSON: { "channel_id": "...", "name"?: "...", "topic"?: "...", "actor_did": "..." }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_channel_update(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_channel_update(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Check for ban evasion by device fingerprint.
 *
 * Takes JSON: { "community_id": "...", "device_fingerprint": "..." }
 * Returns JSON: { "banned_did": "..." | null }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_check_ban_evasion(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_check_ban_evasion(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Check warning escalation for a member.
 *
 * Takes JSON: { "community_id": "...", "member_did": "...", "timeout_threshold": null, "ban_threshold": null }
 * Returns JSON: { "action": "timeout" | "ban" | null }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_check_escalation(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_check_escalation(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Check if a message matches keyword filters.
 *
 * Takes JSON: { "content": "...", "filters": [{"pattern": "...", "action": "delete"}] }
 * Returns JSON: { "action": "delete" | "warn" | "timeout" | null }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_check_keyword_filter(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_check_keyword_filter(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Clear a member's custom status.
 * @param {string} community_id
 * @param {string} member_did
 * @returns {any}
 */
export function umbra_wasm_community_clear_member_status(community_id, member_did) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(member_did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_clear_member_status(ptr0, len0, ptr1, len1);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Create a new community.
 *
 * Takes JSON: { "name": "...", "description"?: "...", "owner_did": "...", "owner_nickname"?: "..." }
 * Returns JSON: { "community_id", "space_id", "welcome_channel_id", "general_channel_id", "role_ids": { ... } }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_create(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_create(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Create a folder in a community file channel.
 *
 * Takes JSON: { channel_id, parent_folder_id?, name, created_by }
 * Returns JSON: CommunityFileFolderRecord
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_create_folder(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_create_folder(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Create a custom role.
 *
 * Takes JSON: { "community_id": "...", "name": "...", "color": null,
 *               "position": 10, "hoisted": false, "mentionable": false,
 *               "permissions_bitfield": "...", "actor_did": "..." }
 * Returns JSON: CommunityRole object
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_custom_role_create(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_custom_role_create(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a community (owner only).
 *
 * Takes JSON: { "id": "...", "actor_did": "..." }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_delete(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_delete(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a community file.
 *
 * Takes JSON: { id, actor_did }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_delete_file(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_delete_file(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a community folder.
 *
 * Takes JSON: { id }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_delete_folder(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_delete_folder(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a notification setting.
 * @param {string} setting_id
 * @returns {any}
 */
export function umbra_wasm_community_delete_notification_setting(setting_id) {
    const ptr0 = passStringToWasm0(setting_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_delete_notification_setting(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Create a custom emoji.
 *
 * Takes JSON: { "community_id": "...", "name": "...", "image_url": "...",
 *               "animated": false, "uploaded_by": "..." }
 * Returns JSON: CommunityEmoji object
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_emoji_create(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_emoji_create(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a custom emoji.
 *
 * Takes JSON: { "emoji_id": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_emoji_delete(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_emoji_delete(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all custom emoji for a community.
 *
 * Returns JSON: CommunityEmoji[]
 * @param {string} community_id
 * @returns {any}
 */
export function umbra_wasm_community_emoji_list(community_id) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_emoji_list(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Rename a custom emoji.
 *
 * Takes JSON: { "emoji_id": "...", "new_name": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_emoji_rename(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_emoji_rename(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a file.
 *
 * Takes JSON: { "file_id": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_file_delete(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_file_delete(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Record a file download (increment count).
 *
 * Returns JSON: { "success": true }
 * @param {string} file_id
 * @returns {any}
 */
export function umbra_wasm_community_file_download(file_id) {
    const ptr0 = passStringToWasm0(file_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_file_download(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get a file by ID.
 *
 * Returns JSON: CommunityFile object
 * @param {string} file_id
 * @returns {any}
 */
export function umbra_wasm_community_file_get(file_id) {
    const ptr0 = passStringToWasm0(file_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_file_get(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get files in a channel.
 *
 * Takes JSON: { "channel_id": "...", "folder_id": null, "limit": 50, "offset": 0 }
 * Returns JSON: CommunityFile[]
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_file_list(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_file_list(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Upload a file record to a channel.
 *
 * Takes JSON: { "channel_id": "...", "folder_id": null, "filename": "...",
 *               "description": null, "file_size": 1024, "mime_type": null,
 *               "storage_chunks_json": "...", "uploaded_by": "..." }
 * Returns JSON: CommunityFile object
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_file_upload(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_file_upload(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Find a community by its origin (remote) community ID.
 *
 * Returns JSON string of the local community ID, or null if not found.
 * @param {string} origin_id
 * @returns {any}
 */
export function umbra_wasm_community_find_by_origin(origin_id) {
    const ptr0 = passStringToWasm0(origin_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_find_by_origin(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Create a folder in a file channel.
 *
 * Takes JSON: { "channel_id": "...", "parent_folder_id": null, "name": "...", "created_by": "..." }
 * Returns JSON: CommunityFileFolder object
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_folder_create(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_folder_create(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a folder.
 *
 * Returns JSON: { "success": true }
 * @param {string} folder_id
 * @returns {any}
 */
export function umbra_wasm_community_folder_delete(folder_id) {
    const ptr0 = passStringToWasm0(folder_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_folder_delete(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get folders in a channel (optionally within a parent folder).
 *
 * Takes JSON: { "channel_id": "...", "parent_folder_id": null }
 * Returns JSON: CommunityFileFolder[]
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_folder_list(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_folder_list(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Follow a thread.
 * @param {string} thread_id
 * @param {string} member_did
 * @returns {any}
 */
export function umbra_wasm_community_follow_thread(thread_id, member_did) {
    const ptr0 = passStringToWasm0(thread_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(member_did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_follow_thread(ptr0, len0, ptr1, len1);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get a community by ID.
 *
 * Returns JSON: Community object
 * @param {string} community_id
 * @returns {any}
 */
export function umbra_wasm_community_get(community_id) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_get(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get active timeouts for a member.
 * @param {string} community_id
 * @param {string} member_did
 * @returns {any}
 */
export function umbra_wasm_community_get_active_timeouts(community_id, member_did) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(member_did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_get_active_timeouts(ptr0, len0, ptr1, len1);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get a single community file by ID.
 *
 * Takes JSON: { id }
 * Returns JSON: CommunityFileRecord
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_get_file(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_get_file(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * List files in a community channel/folder.
 *
 * Takes JSON: { channel_id, folder_id?, limit, offset }
 * Returns JSON: CommunityFileRecord[]
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_get_files(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_get_files(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * List folders in a community channel.
 *
 * Takes JSON: { channel_id, parent_folder_id? }
 * Returns JSON: CommunityFileFolderRecord[]
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_get_folders(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_get_folders(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get a member's custom status.
 * @param {string} community_id
 * @param {string} member_did
 * @returns {any}
 */
export function umbra_wasm_community_get_member_status(community_id, member_did) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(member_did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_get_member_status(ptr0, len0, ptr1, len1);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all communities the user is a member of.
 *
 * Returns JSON: Community[]
 * @param {string} member_did
 * @returns {any}
 */
export function umbra_wasm_community_get_mine(member_did) {
    const ptr0 = passStringToWasm0(member_did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_get_mine(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get notification settings for a member.
 * @param {string} community_id
 * @param {string} member_did
 * @returns {any}
 */
export function umbra_wasm_community_get_notification_settings(community_id, member_did) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(member_did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_get_notification_settings(ptr0, len0, ptr1, len1);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get thread followers.
 * @param {string} thread_id
 * @returns {any}
 */
export function umbra_wasm_community_get_thread_followers(thread_id) {
    const ptr0 = passStringToWasm0(thread_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_get_thread_followers(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all timeouts for a community.
 * @param {string} community_id
 * @returns {any}
 */
export function umbra_wasm_community_get_timeouts(community_id) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_get_timeouts(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Create an invite link for a community.
 *
 * Takes JSON: { "community_id", "creator_did", "max_uses"?, "expires_at"? }
 * Returns JSON: CommunityInvite object
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_invite_create(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_invite_create(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete an invite.
 *
 * Takes JSON: { "invite_id": "...", "actor_did": "..." }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_invite_delete(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_invite_delete(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all invites for a community.
 *
 * Returns JSON: CommunityInvite[]
 * @param {string} community_id
 * @returns {any}
 */
export function umbra_wasm_community_invite_list(community_id) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_invite_list(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Set a vanity invite code for a community.
 *
 * Takes JSON: { "community_id": "...", "vanity_code": "...", "creator_did": "..." }
 * Returns JSON: CommunityInvite object
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_invite_set_vanity(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_invite_set_vanity(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Use an invite code to join a community.
 *
 * Takes JSON: { "code": "...", "member_did": "..." }
 * Returns JSON: { "community_id": "..." }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_invite_use(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_invite_use(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Check if following a thread.
 * @param {string} thread_id
 * @param {string} member_did
 * @returns {any}
 */
export function umbra_wasm_community_is_following_thread(thread_id, member_did) {
    const ptr0 = passStringToWasm0(thread_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(member_did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_is_following_thread(ptr0, len0, ptr1, len1);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Check if a member is muted.
 * @param {string} community_id
 * @param {string} member_did
 * @returns {any}
 */
export function umbra_wasm_community_is_member_muted(community_id, member_did) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(member_did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_is_member_muted(ptr0, len0, ptr1, len1);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Join a community.
 *
 * Takes JSON: { "community_id": "...", "member_did": "...", "nickname"?: "..." }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_join(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_join(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Kick a member from a community.
 *
 * Takes JSON: { "community_id": "...", "target_did": "...", "actor_did": "..." }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_kick(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_kick(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Leave a community.
 *
 * Takes JSON: { "community_id": "...", "member_did": "..." }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_leave(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_leave(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Mark a channel as read up to a specific message.
 *
 * Takes JSON: { "channel_id": "...", "member_did": "...", "last_read_message_id": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_mark_read(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_mark_read(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get a single member record.
 *
 * Returns JSON: CommunityMember object
 * @param {string} community_id
 * @param {string} member_did
 * @returns {any}
 */
export function umbra_wasm_community_member_get(community_id, member_did) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(member_did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_member_get(ptr0, len0, ptr1, len1);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all members of a community.
 *
 * Returns JSON: CommunityMember[]
 * @param {string} community_id
 * @returns {any}
 */
export function umbra_wasm_community_member_list(community_id) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_member_list(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get roles assigned to a specific member.
 *
 * Returns JSON: CommunityRole[]
 * @param {string} community_id
 * @param {string} member_did
 * @returns {any}
 */
export function umbra_wasm_community_member_roles(community_id, member_did) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(member_did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_member_roles(ptr0, len0, ptr1, len1);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Update a member's community profile.
 *
 * Takes JSON: { "community_id", "member_did", "nickname"?, "avatar_url"?, "bio"? }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_member_update_profile(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_member_update_profile(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get warnings for a specific member.
 *
 * Takes JSON: { "community_id": "...", "member_did": "..." }
 * Returns JSON: CommunityWarning[]
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_member_warnings(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_member_warnings(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a message for everyone.
 *
 * Returns JSON: { "success": true }
 * @param {string} message_id
 * @returns {any}
 */
export function umbra_wasm_community_message_delete(message_id) {
    const ptr0 = passStringToWasm0(message_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_message_delete(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a message for the current user only.
 *
 * Takes JSON: { "message_id": "...", "member_did": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_message_delete_for_me(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_message_delete_for_me(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Edit a message.
 *
 * Takes JSON: { "message_id": "...", "new_content": "...", "editor_did": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_message_edit(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_message_edit(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get a single message by ID.
 *
 * Returns JSON: CommunityMessage object
 * @param {string} message_id
 * @returns {any}
 */
export function umbra_wasm_community_message_get(message_id) {
    const ptr0 = passStringToWasm0(message_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_message_get(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get messages for a community channel (paginated).
 *
 * Takes JSON: { "channel_id": "...", "limit": 50, "before_timestamp": null }
 * Returns JSON: CommunityMessage[]
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_message_list(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_message_list(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Send a plaintext message to a community channel.
 *
 * Takes JSON: { "channel_id": "...", "sender_did": "...", "content": "...",
 *               "reply_to_id": null, "thread_id": null, "content_warning": null }
 * Returns JSON: CommunityMessage object
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_message_send(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_message_send(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Send an encrypted message to a community channel (E2EE).
 *
 * Takes JSON: { "channel_id": "...", "sender_did": "...", "content_encrypted_b64": "...",
 *               "nonce": "...", "key_version": 1, "reply_to_id": null, "thread_id": null }
 * Returns JSON: { "message_id": "..." }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_message_send_encrypted(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_message_send_encrypted(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Store a message received from another member via relay / bridge.
 *
 * Skips permission checks and uses INSERT OR IGNORE so duplicate IDs
 * are silently skipped. Returns `{ "stored": true }`.
 *
 * Takes JSON: { "id": "...", "channel_id": "...", "sender_did": "...",
 *               "content": "...", "created_at": 1234567890 }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_message_store_received(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_message_store_received(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Parse mentions from message content.
 * @param {string} content
 * @returns {any}
 */
export function umbra_wasm_community_parse_mentions(content) {
    const ptr0 = passStringToWasm0(content, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_parse_mentions(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get pinned messages for a channel.
 *
 * Returns JSON: CommunityPin[]
 * @param {string} channel_id
 * @returns {any}
 */
export function umbra_wasm_community_pin_list(channel_id) {
    const ptr0 = passStringToWasm0(channel_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_pin_list(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Pin a message in a channel.
 *
 * Takes JSON: { "channel_id": "...", "message_id": "...", "pinned_by": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_pin_message(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_pin_message(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Add a reaction to a message.
 *
 * Takes JSON: { "message_id": "...", "member_did": "...", "emoji": "...", "is_custom": false }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_reaction_add(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_reaction_add(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get reactions for a message.
 *
 * Returns JSON: CommunityReaction[]
 * @param {string} message_id
 * @returns {any}
 */
export function umbra_wasm_community_reaction_list(message_id) {
    const ptr0 = passStringToWasm0(message_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_reaction_list(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Remove a reaction from a message.
 *
 * Takes JSON: { "message_id": "...", "member_did": "...", "emoji": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_reaction_remove(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_reaction_remove(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get read receipts for a channel.
 *
 * Returns JSON: ReadReceipt[]
 * @param {string} channel_id
 * @returns {any}
 */
export function umbra_wasm_community_read_receipts(channel_id) {
    const ptr0 = passStringToWasm0(channel_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_read_receipts(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Record a file download (increments download count).
 *
 * Takes JSON: { id }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_record_file_download(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_record_file_download(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Remove a timeout early.
 * @param {string} timeout_id
 * @param {string} actor_did
 * @returns {any}
 */
export function umbra_wasm_community_remove_timeout(timeout_id, actor_did) {
    const ptr0 = passStringToWasm0(timeout_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(actor_did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_remove_timeout(ptr0, len0, ptr1, len1);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Assign a role to a member.
 *
 * Takes JSON: { "community_id", "member_did", "role_id", "actor_did" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_role_assign(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_role_assign(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a custom role.
 *
 * Takes JSON: { "role_id": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_role_delete(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_role_delete(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all roles for a community.
 *
 * Returns JSON: CommunityRole[]
 * @param {string} community_id
 * @returns {any}
 */
export function umbra_wasm_community_role_list(community_id) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_role_list(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Unassign a role from a member.
 *
 * Takes JSON: { "community_id", "member_did", "role_id", "actor_did" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_role_unassign(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_role_unassign(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Update a role's properties.
 *
 * Takes JSON: { "role_id": "...", "name": null, "color": null,
 *               "hoisted": null, "mentionable": null, "position": null, "actor_did": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_role_update(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_role_update(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Update a role's permission bitfield.
 *
 * Takes JSON: { "role_id": "...", "permissions_bitfield": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_role_update_permissions(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_role_update_permissions(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Search messages across all channels in a community.
 *
 * Takes JSON: { "community_id": "...", "query": "...", "limit": 50 }
 * Returns JSON: CommunityMessage[]
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_search(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_search(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Advanced search with filters.
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_search_advanced(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_search_advanced(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Search messages in a channel.
 *
 * Takes JSON: { "channel_id": "...", "query": "...", "limit": 50 }
 * Returns JSON: CommunityMessage[]
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_search_channel(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_search_channel(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Claim a seat (auto-join + assign roles).
 *
 * Takes JSON: { "seat_id": "...", "claimer_did": "..." }
 * Returns JSON: CommunitySeat (updated)
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_seat_claim(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_seat_claim(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Count seats for a community.
 *
 * Returns JSON: { "total": number, "unclaimed": number }
 * @param {string} community_id
 * @returns {any}
 */
export function umbra_wasm_community_seat_count(community_id) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_seat_count(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Create seats in batch (for import).
 *
 * Takes JSON: { "community_id": "...", "seats": [{ "platform", "platform_user_id", "platform_username", "nickname"?, "avatar_url"?, "role_ids": string[] }] }
 * Returns JSON: { "created": number }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_seat_create_batch(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_seat_create_batch(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a seat (admin action).
 *
 * Takes JSON: { "seat_id": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_seat_delete(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_seat_delete(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Find a seat matching a platform account.
 *
 * Takes JSON: { "community_id": "...", "platform": "discord", "platform_user_id": "..." }
 * Returns JSON: CommunitySeat | null
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_seat_find_match(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_seat_find_match(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all seats for a community.
 *
 * Returns JSON: CommunitySeat[]
 * @param {string} community_id
 * @returns {any}
 */
export function umbra_wasm_community_seat_list(community_id) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_seat_list(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get unclaimed seats for a community.
 *
 * Returns JSON: CommunitySeat[]
 * @param {string} community_id
 * @returns {any}
 */
export function umbra_wasm_community_seat_list_unclaimed(community_id) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_seat_list_unclaimed(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Send a system message to a channel.
 * @param {string} channel_id
 * @param {string} content
 * @returns {any}
 */
export function umbra_wasm_community_send_system_message(channel_id, content) {
    const ptr0 = passStringToWasm0(channel_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(content, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_send_system_message(ptr0, len0, ptr1, len1);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Set a custom member status.
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_set_member_status(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_set_member_status(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Set notification settings.
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_set_notification_settings(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_set_notification_settings(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Set a vanity URL for a community.
 *
 * Takes JSON: { "community_id": "...", "vanity_url": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_set_vanity_url(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_set_vanity_url(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Create a new space in a community.
 *
 * Takes JSON: { "community_id": "...", "name": "...", "position": 0, "actor_did": "..." }
 * Returns JSON: CommunitySpace object
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_space_create(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_space_create(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a space and all its channels.
 *
 * Takes JSON: { "space_id": "...", "actor_did": "..." }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_space_delete(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_space_delete(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all spaces in a community.
 *
 * Returns JSON: CommunitySpace[]
 * @param {string} community_id
 * @returns {any}
 */
export function umbra_wasm_community_space_list(community_id) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_space_list(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Reorder spaces in a community.
 *
 * Takes JSON: { "community_id": "...", "space_ids": ["id1", "id2", ...] }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_space_reorder(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_space_reorder(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Update a space's name.
 *
 * Takes JSON: { "space_id": "...", "name": "...", "actor_did": "..." }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_space_update(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_space_update(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Create a custom sticker.
 *
 * Takes JSON: { "community_id": "...", "pack_id": null, "name": "...",
 *               "image_url": "...", "animated": false, "format": "png", "uploaded_by": "..." }
 * Returns JSON: CommunitySticker object
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_sticker_create(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_sticker_create(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a custom sticker.
 *
 * Returns JSON: { "success": true }
 * @param {string} sticker_id
 * @returns {any}
 */
export function umbra_wasm_community_sticker_delete(sticker_id) {
    const ptr0 = passStringToWasm0(sticker_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_sticker_delete(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all stickers for a community.
 *
 * Returns JSON: CommunitySticker[]
 * @param {string} community_id
 * @returns {any}
 */
export function umbra_wasm_community_sticker_list(community_id) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_sticker_list(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Create a sticker pack.
 *
 * Takes JSON: { "community_id": "...", "name": "...", "description": null,
 *               "cover_sticker_id": null, "created_by": "..." }
 * Returns JSON: StickerPack object
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_sticker_pack_create(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_sticker_pack_create(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a sticker pack.
 *
 * Returns JSON: { "success": true }
 * @param {string} pack_id
 * @returns {any}
 */
export function umbra_wasm_community_sticker_pack_delete(pack_id) {
    const ptr0 = passStringToWasm0(pack_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_sticker_pack_delete(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all sticker packs for a community.
 *
 * Returns JSON: StickerPack[]
 * @param {string} community_id
 * @returns {any}
 */
export function umbra_wasm_community_sticker_pack_list(community_id) {
    const ptr0 = passStringToWasm0(community_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_sticker_pack_list(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Rename a sticker pack.
 *
 * Takes JSON: { "pack_id": "...", "new_name": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_sticker_pack_rename(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_sticker_pack_rename(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Create a thread from a parent message.
 *
 * Takes JSON: { "channel_id": "...", "parent_message_id": "...", "name": null, "created_by": "..." }
 * Returns JSON: CommunityThread object
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_thread_create(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_thread_create(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get a thread by ID.
 *
 * Returns JSON: CommunityThread object
 * @param {string} thread_id
 * @returns {any}
 */
export function umbra_wasm_community_thread_get(thread_id) {
    const ptr0 = passStringToWasm0(thread_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_thread_get(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all threads in a channel.
 *
 * Returns JSON: CommunityThread[]
 * @param {string} channel_id
 * @returns {any}
 */
export function umbra_wasm_community_thread_list(channel_id) {
    const ptr0 = passStringToWasm0(channel_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_thread_list(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get messages in a thread.
 *
 * Takes JSON: { "thread_id": "...", "limit": 50, "before_timestamp": null }
 * Returns JSON: CommunityMessage[]
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_thread_messages(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_thread_messages(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Timeout a member (mute or restrict).
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_timeout_member(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_timeout_member(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Transfer community ownership.
 *
 * Takes JSON: { "community_id": "...", "current_owner_did": "...", "new_owner_did": "..." }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_transfer_ownership(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_transfer_ownership(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Unban a member.
 *
 * Takes JSON: { "community_id": "...", "target_did": "...", "actor_did": "..." }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_unban(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_unban(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Unfollow a thread.
 * @param {string} thread_id
 * @param {string} member_did
 * @returns {any}
 */
export function umbra_wasm_community_unfollow_thread(thread_id, member_did) {
    const ptr0 = passStringToWasm0(thread_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(member_did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_unfollow_thread(ptr0, len0, ptr1, len1);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Unpin a message.
 *
 * Takes JSON: { "channel_id": "...", "message_id": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_unpin_message(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_unpin_message(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Update a community's name and/or description.
 *
 * Takes JSON: { "id": "...", "name": "...", "description": "...", "actor_did": "..." }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_update(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_update(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Update community branding.
 *
 * Takes JSON: { "community_id": "...", "icon_url": null, "banner_url": null,
 *               "splash_url": null, "accent_color": null, "custom_css": null, "actor_did": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_update_branding(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_update_branding(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Upload a file record to a community file channel.
 *
 * Takes JSON: { channel_id, folder_id?, filename, description?, file_size, mime_type?, storage_chunks_json, uploaded_by }
 * Returns JSON: CommunityFileRecord
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_upload_file(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_upload_file(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Issue a warning to a member.
 *
 * Takes JSON: { "community_id": "...", "member_did": "...", "reason": "...",
 *               "warned_by": "...", "expires_at": null }
 * Returns JSON: CommunityWarning object
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_warn_member(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_warn_member(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a warning.
 *
 * Takes JSON: { "warning_id": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_warning_delete(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_warning_delete(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all warnings for a community (paginated).
 *
 * Takes JSON: { "community_id": "...", "limit": 50, "offset": 0 }
 * Returns JSON: CommunityWarning[]
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_warnings(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_warnings(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Create a webhook for a channel.
 *
 * Takes JSON: { "channel_id": "...", "name": "...", "avatar_url": null, "creator_did": "..." }
 * Returns JSON: CommunityWebhook object
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_webhook_create(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_webhook_create(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a webhook.
 *
 * Takes JSON: { "webhook_id": "...", "actor_did": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_webhook_delete(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_webhook_delete(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get a webhook by ID.
 *
 * Returns JSON: CommunityWebhook object
 * @param {string} webhook_id
 * @returns {any}
 */
export function umbra_wasm_community_webhook_get(webhook_id) {
    const ptr0 = passStringToWasm0(webhook_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_webhook_get(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get webhooks for a channel.
 *
 * Returns JSON: CommunityWebhook[]
 * @param {string} channel_id
 * @returns {any}
 */
export function umbra_wasm_community_webhook_list(channel_id) {
    const ptr0 = passStringToWasm0(channel_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_webhook_list(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Update a webhook.
 *
 * Takes JSON: { "webhook_id": "...", "name": null, "avatar_url": null }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_community_webhook_update(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_community_webhook_update(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Compute a key fingerprint for verification between peers.
 *
 * Input JSON: { "key_hex": "64-char hex" }
 * Returns JSON: { "fingerprint": "16-char hex string" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_compute_key_fingerprint(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_compute_key_fingerprint(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Decrypt arbitrary data received from a peer (friend) identified by DID.
 *
 * Input JSON: { "peer_did": "did:key:...", "ciphertext_b64": "...", "nonce_hex": "...", "timestamp": unix_ms, "context": "optional" }
 * Returns JSON: { "plaintext_b64": "..." }
 *
 * Uses X25519 ECDH + AES-256-GCM, same as message decryption but for generic data.
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_crypto_decrypt_from_peer(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_crypto_decrypt_from_peer(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Encrypt arbitrary data for a peer (friend) identified by DID.
 *
 * Input JSON: { "peer_did": "did:key:...", "plaintext_b64": "base64-encoded-data", "context": "optional-context-string" }
 * Returns JSON: { "ciphertext_b64": "...", "nonce_hex": "...", "timestamp": unix_ms }
 *
 * Uses X25519 ECDH + AES-256-GCM, same as message encryption but for generic data.
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_crypto_encrypt_for_peer(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_crypto_encrypt_for_peer(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Sign data with the current identity's Ed25519 key
 *
 * Returns the 64-byte signature.
 * @param {Uint8Array} data
 * @returns {Uint8Array}
 */
export function umbra_wasm_crypto_sign(data) {
    const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_crypto_sign(ptr0, len0);
    if (ret[3]) {
        throw takeFromExternrefTable0(ret[2]);
    }
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * Verify a signature against a public key
 *
 * Returns true if valid, false otherwise.
 * @param {string} public_key_hex
 * @param {Uint8Array} data
 * @param {Uint8Array} signature
 * @returns {boolean}
 */
export function umbra_wasm_crypto_verify(public_key_hex, data, signature) {
    const ptr0 = passStringToWasm0(public_key_hex, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(signature, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_crypto_verify(ptr0, len0, ptr1, len1, ptr2, len2);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return ret[0] !== 0;
}

/**
 * Discover peers that have a specific file via DHT.
 *
 * Takes JSON: { "file_id": "..." }
 * Results arrive asynchronously as "file_transfer" domain events
 * with a "FileProviders" sub-type.
 * Returns JSON: { "ok": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_dht_get_providers(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_dht_get_providers(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Announce that we have a file available in the DHT.
 *
 * Takes JSON: { "file_id": "..." }
 * Returns JSON: { "ok": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_dht_start_providing(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_dht_start_providing(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Stop announcing a file in the DHT.
 *
 * Takes JSON: { "file_id": "..." }
 * Returns JSON: { "ok": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_dht_stop_providing(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_dht_stop_providing(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Generate connection info for sharing
 *
 * Returns JSON with link, json, base64, did, peer_id, addresses, display_name
 * @returns {any}
 */
export function umbra_wasm_discovery_get_connection_info() {
    const ret = wasm.umbra_wasm_discovery_get_connection_info();
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Parse connection info from string (link, base64, or JSON)
 *
 * Returns JSON with did, peer_id, addresses, display_name
 * @param {string} info
 * @returns {any}
 */
export function umbra_wasm_discovery_parse_connection_info(info) {
    const ptr0 = passStringToWasm0(info, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_discovery_parse_connection_info(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Create a DM shared folder.
 *
 * Takes JSON: { conversation_id, parent_folder_id?, name, created_by }
 * Returns JSON: DmSharedFolderRecord
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_dm_create_folder(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_dm_create_folder(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a DM shared file.
 *
 * Takes JSON: { id }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_dm_delete_file(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_dm_delete_file(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a DM shared folder.
 *
 * Takes JSON: { id }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_dm_delete_folder(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_dm_delete_folder(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get a single DM shared file by ID.
 *
 * Takes JSON: { id }
 * Returns JSON: DmSharedFileRecord
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_dm_get_file(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_dm_get_file(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * List DM shared files.
 *
 * Takes JSON: { conversation_id, folder_id?, limit, offset }
 * Returns JSON: DmSharedFileRecord[]
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_dm_get_files(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_dm_get_files(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * List DM shared folders.
 *
 * Takes JSON: { conversation_id, parent_folder_id? }
 * Returns JSON: DmSharedFolderRecord[]
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_dm_get_folders(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_dm_get_folders(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Move a DM file to a different folder.
 *
 * Takes JSON: { id, target_folder_id? }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_dm_move_file(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_dm_move_file(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Record a DM file download.
 *
 * Takes JSON: { id }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_dm_record_file_download(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_dm_record_file_download(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Rename a DM shared folder.
 *
 * Takes JSON: { id, name }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_dm_rename_folder(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_dm_rename_folder(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Upload a DM shared file.
 *
 * Takes JSON: { conversation_id, folder_id?, filename, description?, file_size, mime_type?, storage_chunks_json, uploaded_by, encrypted_metadata?, encryption_nonce? }
 * Returns JSON: DmSharedFileRecord
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_dm_upload_file(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_dm_upload_file(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Decrypt a file chunk with a previously derived file key.
 *
 * Input JSON: { "key_hex": "...", "nonce_hex": "...", "encrypted_data_b64": "...", "file_id": "...", "chunk_index": 0 }
 * Returns JSON: { "chunk_data_b64": "..." }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_file_decrypt_chunk(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_file_decrypt_chunk(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Derive a per-file encryption key from a conversation's shared secret.
 *
 * Input JSON: { "peer_did": "did:key:...", "file_id": "file-uuid", "context": "optional" }
 * Returns JSON: { "key_hex": "64-char hex string" }
 *
 * Both conversation participants independently derive the same key.
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_file_derive_key(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_file_derive_key(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Encrypt a file chunk with a previously derived file key.
 *
 * Input JSON: { "key_hex": "...", "chunk_data_b64": "...", "file_id": "...", "chunk_index": 0 }
 * Returns JSON: { "nonce_hex": "...", "encrypted_data_b64": "..." }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_file_encrypt_chunk(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_file_encrypt_chunk(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Drain all buffered Rust trace events and return them as a JSON array.
 *
 * Returns `"[]"` when the `debug-trace` feature is disabled or the
 * bridge subscriber has not been installed. JS should poll this at
 * ~500ms intervals when debug mode is active.
 * @returns {string}
 */
export function umbra_wasm_flush_trace_events() {
    let deferred1_0;
    let deferred1_1;
    try {
        const ret = wasm.umbra_wasm_flush_trace_events();
        deferred1_0 = ret[0];
        deferred1_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
}

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
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_friends_accept_from_relay(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_friends_accept_from_relay(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

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
 * @param {string} request_id
 * @returns {any}
 */
export function umbra_wasm_friends_accept_request(request_id) {
    const ptr0 = passStringToWasm0(request_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_friends_accept_request(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Block a user by DID
 * @param {string} did
 * @param {string | null} [reason]
 */
export function umbra_wasm_friends_block(did, reason) {
    const ptr0 = passStringToWasm0(did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    var ptr1 = isLikeNone(reason) ? 0 : passStringToWasm0(reason, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_friends_block(ptr0, len0, ptr1, len1);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

/**
 * Build a friend_accept_ack relay envelope.
 *
 * Pure data construction — sends back to the accepter to confirm the handshake.
 * Takes JSON: { "accepter_did": "...", "my_did": "..." }
 * Returns JSON: { "to_did", "payload": "<stringified envelope>" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_friends_build_accept_ack(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_friends_build_accept_ack(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all blocked users as JSON array
 * @returns {any}
 */
export function umbra_wasm_friends_get_blocked() {
    const ret = wasm.umbra_wasm_friends_get_blocked();
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get list of friends as JSON array
 *
 * Each friend: { "did": "...", "display_name": "...", "status": "...", "signing_key": "...",
 *                "encryption_key": "...", "created_at": ..., "updated_at": ... }
 * @returns {any}
 */
export function umbra_wasm_friends_list() {
    const ret = wasm.umbra_wasm_friends_list();
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get pending incoming friend requests as JSON array
 *
 * Each request: { "id": "...", "from_did": "...", "to_did": "...", "direction": "...",
 *                 "message": "...", "from_display_name": "...", "created_at": ..., "status": "..." }
 * @param {string} direction
 * @returns {any}
 */
export function umbra_wasm_friends_pending_requests(direction) {
    const ptr0 = passStringToWasm0(direction, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_friends_pending_requests(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Reject a friend request
 *
 * Updates the request status to "rejected" in the database.
 * @param {string} request_id
 */
export function umbra_wasm_friends_reject_request(request_id) {
    const ptr0 = passStringToWasm0(request_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_friends_reject_request(ptr0, len0);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

/**
 * Remove a friend by DID
 * @param {string} did
 * @returns {boolean}
 */
export function umbra_wasm_friends_remove(did) {
    const ptr0 = passStringToWasm0(did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_friends_remove(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return ret[0] !== 0;
}

/**
 * Send a friend request
 *
 * Creates a signed friend request, stores it in the database,
 * and sends it over the P2P network if connected.
 * Returns JSON: { "id": "...", "to_did": "...", "from_did": "...", "created_at": ... }
 * @param {string} did
 * @param {string | null} [message]
 * @returns {any}
 */
export function umbra_wasm_friends_send_request(did, message) {
    const ptr0 = passStringToWasm0(did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    var ptr1 = isLikeNone(message) ? 0 : passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_friends_send_request(ptr0, len0, ptr1, len1);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Store an incoming friend request received via relay.
 * Takes a JSON string with the request fields.
 * Returns JSON: { "duplicate": false } or { "duplicate": true } if already stored.
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_friends_store_incoming(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_friends_store_incoming(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Unblock a user by DID
 * @param {string} did
 * @returns {boolean}
 */
export function umbra_wasm_friends_unblock(did) {
    const ptr0 = passStringToWasm0(did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_friends_unblock(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return ret[0] !== 0;
}

/**
 * Update a friend's encryption key after receiving a key_rotation envelope.
 *
 * Verifies the signature using the friend's (unchanged) Ed25519 signing key,
 * then updates the X25519 encryption key in the database.
 *
 * Input JSON: `{ "from_did": "...", "new_encryption_key": "hex", "signature": "hex" }`
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_friends_update_encryption_key(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_friends_update_encryption_key(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get a stored file manifest.
 *
 * Takes JSON: { file_id }
 * Returns JSON: FileManifestRecord or null
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_get_file_manifest(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_get_file_manifest(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get files needing re-encryption in a channel (for on-access re-encryption).
 *
 * Input JSON: { "channel_id": "ch-uuid", "limit": 10 }
 * Returns JSON: [{ file record }, ...]
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_get_files_needing_reencryption(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_get_files_needing_reencryption(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Accept a group invite.
 *
 * Imports the group key, creates local group + conversation, adds self as member.
 *
 * Takes: invite_id as string
 * Returns JSON: { "group_id", "conversation_id" }
 * @param {string} invite_id
 * @returns {any}
 */
export function umbra_wasm_groups_accept_invite(invite_id) {
    const ptr0 = passStringToWasm0(invite_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_accept_invite(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Add a member to a group.
 *
 * Takes JSON: { "group_id": "...", "did": "...", "display_name": "..." (optional) }
 * Returns JSON: { "group_id", "member_did" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_groups_add_member(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_add_member(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Build a `group_invite_accept` relay envelope.
 *
 * Takes JSON: { "invite_id", "group_id" }
 * Returns JSON: { "relay_messages": [{ "to_did", "payload" }] }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_groups_build_invite_accept_envelope(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_build_invite_accept_envelope(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Build a `group_invite_decline` relay envelope.
 *
 * Takes JSON: { "invite_id" }
 * Returns JSON: { "relay_messages": [{ "to_did", "payload" }] }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_groups_build_invite_decline_envelope(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_build_invite_decline_envelope(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Create a new group.
 *
 * Takes JSON: { "name": "...", "description": "..." (optional) }
 * Returns JSON: { "group_id", "conversation_id", "name" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_groups_create(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_create(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Decline a group invite.
 *
 * Takes: invite_id as string
 * @param {string} invite_id
 */
export function umbra_wasm_groups_decline_invite(invite_id) {
    const ptr0 = passStringToWasm0(invite_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_decline_invite(ptr0, len0);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

/**
 * Decrypt a group message with the specified key version.
 *
 * Takes JSON: { "group_id", "ciphertext_hex", "nonce_hex", "key_version", "sender_did", "timestamp" }
 * Returns JSON: the decrypted plaintext string
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_groups_decrypt_message(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_decrypt_message(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a group (admin only).
 *
 * Takes: group_id as string
 * Returns JSON: { "group_id" }
 * @param {string} group_id
 * @returns {any}
 */
export function umbra_wasm_groups_delete(group_id) {
    const ptr0 = passStringToWasm0(group_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_delete(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Encrypt a group key for a specific member (for invite or key rotation).
 *
 * Uses ECDH with the member's public key to encrypt the raw group key.
 *
 * Takes JSON: { "group_id", "raw_key_hex", "key_version", "member_did" }
 * Returns JSON: { "encrypted_key_hex", "nonce_hex" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_groups_encrypt_key_for_member(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_encrypt_key_for_member(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Encrypt a message with the group's shared key.
 *
 * Takes JSON: { "group_id", "plaintext" }
 * Returns JSON: { "ciphertext_hex", "nonce_hex", "key_version" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_groups_encrypt_message(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_encrypt_message(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

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
 * @param {string} group_id
 * @returns {any}
 */
export function umbra_wasm_groups_generate_key(group_id) {
    const ptr0 = passStringToWasm0(group_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_generate_key(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get group info by ID.
 *
 * Takes: group_id as string
 * Returns JSON: { group fields }
 * @param {string} group_id
 * @returns {any}
 */
export function umbra_wasm_groups_get(group_id) {
    const ptr0 = passStringToWasm0(group_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_get(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all members of a group.
 *
 * Takes: group_id as string
 * Returns JSON: [member, ...]
 * @param {string} group_id
 * @returns {any}
 */
export function umbra_wasm_groups_get_members(group_id) {
    const ptr0 = passStringToWasm0(group_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_get_members(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get pending group invites.
 *
 * Returns JSON: [invite, ...]
 * @returns {any}
 */
export function umbra_wasm_groups_get_pending_invites() {
    const ret = wasm.umbra_wasm_groups_get_pending_invites();
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Import a group key received from another member (via invite or key rotation).
 *
 * The key arrives encrypted via ECDH with the sender.
 * We decrypt it using our X25519 key, then re-encrypt with our wrapping key.
 *
 * Takes JSON: { "group_id", "key_version", "encrypted_key_hex", "nonce_hex", "sender_did" }
 * Returns JSON: { "group_id", "key_version" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_groups_import_key(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_import_key(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * List all groups.
 *
 * Returns JSON: [group, ...]
 * @returns {any}
 */
export function umbra_wasm_groups_list() {
    const ret = wasm.umbra_wasm_groups_list();
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Remove a member from a group.
 *
 * Takes JSON: { "group_id": "...", "did": "..." }
 * Returns JSON: { "group_id", "member_did" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_groups_remove_member(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_remove_member(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Remove a member with key rotation: remove, rotate key, encrypt new key per remaining member,
 * build `group_key_rotation` + `group_member_removed` envelopes.
 *
 * Takes JSON: { "group_id", "member_did" }
 * Returns JSON: { "key_version": number, "relay_messages": [{ "to_did", "payload" }, ...] }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_groups_remove_member_with_rotation(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_remove_member_with_rotation(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Rotate the group key (e.g., after removing a member).
 *
 * Generates a new AES-256 key, increments the key version, stores it.
 *
 * Takes: group_id as string
 * Returns JSON: { "group_id", "key_version", "raw_key_hex" }
 * @param {string} group_id
 * @returns {any}
 */
export function umbra_wasm_groups_rotate_key(group_id) {
    const ptr0 = passStringToWasm0(group_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_rotate_key(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Send a group invitation: encrypt group key for invitee, build `group_invite` envelope.
 *
 * Orchestrates: get group info, get profile, encrypt key for member, get members list,
 * generate UUID, and build the relay envelope.
 *
 * Takes JSON: { "group_id", "member_did" }
 * Returns JSON: { "relay_messages": [{ "to_did", "payload" }] }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_groups_send_invite(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_send_invite(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Send a group message: encrypt, store locally, build `group_message` envelopes for all members.
 *
 * Takes JSON: { "group_id", "conversation_id", "text" }
 * Returns JSON: { "message": { id, conversationId, senderDid, timestamp },
 *                  "relay_messages": [{ "to_did", "payload" }, ...] }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_groups_send_message(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_send_message(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Store a received group invite.
 *
 * Takes JSON: { "id", "group_id", "group_name", "description", "inviter_did",
 *               "inviter_name", "encrypted_group_key", "nonce", "members_json" }
 * @param {string} json
 */
export function umbra_wasm_groups_store_invite(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_store_invite(ptr0, len0);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

/**
 * Update a group's name/description.
 *
 * Takes JSON: { "group_id": "...", "name": "...", "description": "..." }
 * Returns JSON: { "group_id", "updated_at" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_groups_update(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_groups_update(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Create a new identity
 *
 * Returns JSON: { "did": "did:key:...", "recovery_phrase": "word1 word2 ..." }
 * @param {string} display_name
 * @returns {any}
 */
export function umbra_wasm_identity_create(display_name) {
    const ptr0 = passStringToWasm0(display_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_identity_create(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get current identity DID
 * @returns {string}
 */
export function umbra_wasm_identity_get_did() {
    let deferred2_0;
    let deferred2_1;
    try {
        const ret = wasm.umbra_wasm_identity_get_did();
        var ptr1 = ret[0];
        var len1 = ret[1];
        if (ret[3]) {
            ptr1 = 0; len1 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred2_0 = ptr1;
        deferred2_1 = len1;
        return getStringFromWasm0(ptr1, len1);
    } finally {
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}

/**
 * Get current identity profile as JSON
 *
 * Returns JSON: { "did": "...", "display_name": "...", "status": "...", "avatar": "..." }
 * @returns {any}
 */
export function umbra_wasm_identity_get_profile() {
    const ret = wasm.umbra_wasm_identity_get_profile();
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Restore identity from recovery phrase
 *
 * Returns the DID string on success.
 * @param {string} recovery_phrase
 * @param {string} display_name
 * @returns {string}
 */
export function umbra_wasm_identity_restore(recovery_phrase, display_name) {
    let deferred4_0;
    let deferred4_1;
    try {
        const ptr0 = passStringToWasm0(recovery_phrase, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(display_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.umbra_wasm_identity_restore(ptr0, len0, ptr1, len1);
        var ptr3 = ret[0];
        var len3 = ret[1];
        if (ret[3]) {
            ptr3 = 0; len3 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred4_0 = ptr3;
        deferred4_1 = len3;
        return getStringFromWasm0(ptr3, len3);
    } finally {
        wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
    }
}

/**
 * Rotate the user's X25519 encryption key.
 *
 * Generates a new random encryption keypair (NOT derived from the mnemonic),
 * updates secure storage, signs the new public key with the (unchanged) Ed25519
 * signing key, and builds relay envelopes to notify all friends.
 *
 * Returns JSON: `{ newEncryptionKey, relayMessages: [...], friendCount }`
 * @returns {any}
 */
export function umbra_wasm_identity_rotate_encryption_key() {
    const ret = wasm.umbra_wasm_identity_rotate_encryption_key();
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Update identity profile
 *
 * Accepts JSON with optional fields: display_name, status, avatar, banner
 * @param {string} json
 */
export function umbra_wasm_identity_update_profile(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_identity_update_profile(ptr0, len0);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

/**
 * Initialize Umbra for web
 *
 * Sets up panic hook and tracing. Must be called before any other function.
 */
export function umbra_wasm_init() {
    const ret = wasm.umbra_wasm_init();
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

/**
 * Initialize the database
 *
 * Creates an in-memory SQLite database (via sql.js on WASM).
 * Must be called after umbra_wasm_init() and before any data operations.
 * @returns {Promise<any>}
 */
export function umbra_wasm_init_database() {
    const ret = wasm.umbra_wasm_init_database();
    return ret;
}

/**
 * Mark all files in a channel for re-encryption after key rotation.
 *
 * Input JSON: { "channel_id": "ch-uuid", "new_key_version": 2 }
 * Returns JSON: { "files_marked": 5 }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_mark_files_for_reencryption(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_mark_files_for_reencryption(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Add a reaction (emoji) to a message.
 *
 * Takes JSON: { "message_id": "...", "emoji": "..." }
 * Returns JSON: { "reactions": [...] } — all reactions for the message
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_messaging_add_reaction(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_messaging_add_reaction(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Build a delivery receipt relay envelope.
 *
 * Pure data construction — does not touch the database.
 * Takes JSON: { "message_id", "conversation_id", "sender_did", "status" }
 * Returns JSON: { "to_did", "payload": "<stringified envelope>" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_messaging_build_receipt_envelope(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_messaging_build_receipt_envelope(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Build a typing indicator relay envelope.
 *
 * Pure data construction — does not touch the database.
 * Takes JSON: { "conversation_id", "recipient_did", "sender_did", "sender_name", "is_typing" }
 * Returns JSON: { "to_did", "payload": "<stringified envelope>" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_messaging_build_typing_envelope(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_messaging_build_typing_envelope(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Create (or get) a DM conversation for a given friend DID.
 *
 * Uses a deterministic conversation ID derived from both DIDs so that both
 * sides always produce the same ID.  If the conversation already exists this
 * is a no-op and the existing ID is returned.
 *
 * Returns JSON: `{ "conversation_id": "..." }`
 * @param {string} friend_did
 * @returns {any}
 */
export function umbra_wasm_messaging_create_dm_conversation(friend_did) {
    const ptr0 = passStringToWasm0(friend_did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_messaging_create_dm_conversation(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

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
 * @param {string} conversation_id
 * @param {string} content_encrypted_b64
 * @param {string} nonce_hex
 * @param {string} sender_did
 * @param {number} timestamp
 * @returns {any}
 */
export function umbra_wasm_messaging_decrypt(conversation_id, content_encrypted_b64, nonce_hex, sender_did, timestamp) {
    const ptr0 = passStringToWasm0(conversation_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(content_encrypted_b64, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passStringToWasm0(nonce_hex, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len2 = WASM_VECTOR_LEN;
    const ptr3 = passStringToWasm0(sender_did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len3 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_messaging_decrypt(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, timestamp);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Soft-delete a message.
 *
 * Only the original sender can delete their own messages.
 *
 * Takes JSON: { "message_id": "..." }
 * Returns JSON: { "message_id", "deleted_at" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_messaging_delete(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_messaging_delete(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Edit a message's content.
 *
 * Re-encrypts the new text and updates the message in the database.
 * Only the original sender can edit their own messages.
 *
 * Takes JSON: { "message_id": "...", "new_text": "..." }
 * Returns JSON: { "message_id", "edited_at", "content_encrypted", "nonce" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_messaging_edit(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_messaging_edit(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Forward a message to another conversation.
 *
 * Copies the message content (re-encrypted) to the target conversation.
 *
 * Takes JSON: { "message_id": "...", "target_conversation_id": "..." }
 * Returns JSON: { "new_message_id", "target_conversation_id" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_messaging_forward(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_messaging_forward(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get conversations list as JSON array
 *
 * Each conversation: { "id": "...", "friend_did": "...", "created_at": ...,
 *                      "last_message_at": ..., "unread_count": ... }
 * @returns {any}
 */
export function umbra_wasm_messaging_get_conversations() {
    const ret = wasm.umbra_wasm_messaging_get_conversations();
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get messages for a conversation as JSON array
 *
 * Each message: { "id": "...", "conversation_id": "...", "sender_did": "...",
 *                 "content_encrypted": "...", "nonce": "...", "timestamp": ...,
 *                 "delivered": bool, "read": bool }
 * @param {string} conversation_id
 * @param {number} limit
 * @param {number} offset
 * @returns {any}
 */
export function umbra_wasm_messaging_get_messages(conversation_id, limit, offset) {
    const ptr0 = passStringToWasm0(conversation_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_messaging_get_messages(ptr0, len0, limit, offset);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get all pinned messages in a conversation.
 *
 * Takes JSON: { "conversation_id": "..." }
 * Returns JSON: [message, ...]
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_messaging_get_pinned(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_messaging_get_pinned(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get thread replies for a message.
 *
 * Returns all messages in the thread (parent + replies).
 *
 * Takes JSON: { "parent_id": "..." }
 * Returns JSON: [message, message, ...]
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_messaging_get_thread(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_messaging_get_thread(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Mark all messages in a conversation as read
 *
 * Returns the number of messages marked as read.
 * @param {string} conversation_id
 * @returns {number}
 */
export function umbra_wasm_messaging_mark_read(conversation_id) {
    const ptr0 = passStringToWasm0(conversation_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_messaging_mark_read(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return ret[0];
}

/**
 * Pin a message in a conversation.
 *
 * Takes JSON: { "message_id": "..." }
 * Returns JSON: { "message_id", "pinned_by", "pinned_at" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_messaging_pin(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_messaging_pin(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Remove a reaction from a message.
 *
 * Takes JSON: { "message_id": "...", "emoji": "..." }
 * Returns JSON: { "reactions": [...] } — remaining reactions
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_messaging_remove_reaction(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_messaging_remove_reaction(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Send a reply in a thread.
 *
 * Creates a new message with thread_id pointing to the parent.
 *
 * Takes JSON: { "parent_id": "...", "text": "..." }
 * Returns JSON: same as send_message, with thread_id set
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_messaging_reply_thread(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_messaging_reply_thread(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Send a message in a conversation
 *
 * Encrypts the message with the friend's X25519 key (AES-256-GCM),
 * stores it locally, and sends it over the P2P network if connected.
 * Returns JSON: { "id", "conversation_id", "sender_did", "timestamp", "delivered", "read" }
 * @param {string} conversation_id
 * @param {string} content
 * @returns {any}
 */
export function umbra_wasm_messaging_send(conversation_id, content) {
    const ptr0 = passStringToWasm0(conversation_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(content, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_messaging_send(ptr0, len0, ptr1, len1);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Store an incoming chat message received via relay.
 *
 * Takes JSON with message fields and stores them in the messages table.
 * Validates sender is a known friend, ensures conversation exists (creating
 * one with a deterministic ID if needed), and emits a messageReceived event.
 * @param {string} json
 */
export function umbra_wasm_messaging_store_incoming(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_messaging_store_incoming(ptr0, len0);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

/**
 * Unpin a message.
 *
 * Takes JSON: { "message_id": "..." }
 * Returns JSON: { "message_id" }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_messaging_unpin(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_messaging_unpin(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Update an incoming message's encrypted content (no sender check).
 * Used for streaming/progressive message updates from remote peers (e.g. Ghost AI).
 *
 * Takes JSON: { "message_id": "...", "content_encrypted": "base64...", "nonce": "hex..." }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_messaging_update_incoming_content(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_messaging_update_incoming_content(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Update a specific message's delivery status.
 *
 * Takes JSON: { "message_id", "status" } where status is "delivered" or "read"
 * @param {string} json
 */
export function umbra_wasm_messaging_update_status(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_messaging_update_status(ptr0, len0);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

/**
 * Accept a WebRTC offer and create an answer (step 2 of connection)
 *
 * Takes the offer JSON string from the other peer.
 * Returns JSON string with SDP answer, ICE candidates, and our DID + PeerId.
 * Share this answer back with the offerer.
 * @param {string} offer_json
 * @returns {Promise<any>}
 */
export function umbra_wasm_network_accept_offer(offer_json) {
    const ptr0 = passStringToWasm0(offer_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_network_accept_offer(ptr0, len0);
    return ret;
}

/**
 * Complete the answerer side of the WebRTC connection (step 3 - answerer side)
 *
 * Called after accept_offer(). Gets the connection on the answerer's side
 * and injects it into the libp2p swarm. The remote peer's identity is
 * extracted from the offer that was passed to accept_offer().
 *
 * `offerer_did` is the DID from the original offer (used to derive PeerId).
 * @param {string | null} [offerer_did]
 * @param {string | null} [offerer_peer_id]
 * @returns {Promise<any>}
 */
export function umbra_wasm_network_complete_answerer(offerer_did, offerer_peer_id) {
    var ptr0 = isLikeNone(offerer_did) ? 0 : passStringToWasm0(offerer_did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = isLikeNone(offerer_peer_id) ? 0 : passStringToWasm0(offerer_peer_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_network_complete_answerer(ptr0, len0, ptr1, len1);
    return ret;
}

/**
 * Complete the WebRTC handshake (step 3 of connection - offerer side)
 *
 * Takes the answer JSON string from the other peer.
 * After this, the WebRTC connection is injected into the libp2p swarm,
 * triggering Noise handshake → Yamux multiplexing → protocol negotiation.
 * The peer will appear in `connected_peers()` and messages can flow.
 * @param {string} answer_json
 * @returns {Promise<any>}
 */
export function umbra_wasm_network_complete_handshake(answer_json) {
    const ptr0 = passStringToWasm0(answer_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_network_complete_handshake(ptr0, len0);
    return ret;
}

/**
 * Create a WebRTC offer for signaling (step 1 of connection)
 *
 * Returns JSON string with SDP offer, ICE candidates, and our DID + PeerId.
 * Share this with the other peer via QR code or connection link.
 * @returns {Promise<any>}
 */
export function umbra_wasm_network_create_offer() {
    const ret = wasm.umbra_wasm_network_create_offer();
    return ret;
}

/**
 * Start the network service
 *
 * Initializes the libp2p swarm with WebRTC transport and begins
 * processing network events. Must be called after identity creation.
 *
 * Also starts a background task that listens for inbound network events
 * (messages, friend requests) and processes them (decrypt, store, emit JS events).
 * @returns {Promise<any>}
 */
export function umbra_wasm_network_start() {
    const ret = wasm.umbra_wasm_network_start();
    return ret;
}

/**
 * Get network status as JSON
 *
 * Returns JSON: { "is_running": bool, "peer_count": number, "listen_addresses": [...] }
 * @returns {any}
 */
export function umbra_wasm_network_status() {
    const ret = wasm.umbra_wasm_network_status();
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Stop the network service
 * @returns {Promise<any>}
 */
export function umbra_wasm_network_stop() {
    const ret = wasm.umbra_wasm_network_stop();
    return ret;
}

/**
 * Create a new notification.
 *
 * Takes JSON: { "id": "...", "type": "friend_request_received|call_missed|...",
 *               "title": "...", "description": "...", "related_did": "...",
 *               "related_id": "...", "avatar": "..." }
 *
 * Returns JSON: { "id": "...", "created_at": ... }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_notifications_create(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_notifications_create(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Dismiss (soft-delete) a notification.
 *
 * Takes JSON: { "id": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_notifications_dismiss(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_notifications_dismiss(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get notifications with optional filters.
 *
 * Takes JSON: { "type": "...", "read": true|false, "limit": 100, "offset": 0 }
 * All fields optional. Returns JSON array of notification records.
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_notifications_get(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_notifications_get(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Mark all notifications as read, optionally filtered by type.
 *
 * Takes JSON: { "type": "..." } (type is optional)
 * Returns JSON: { "success": true, "count": N }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_notifications_mark_all_read(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_notifications_mark_all_read(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Mark a single notification as read.
 *
 * Takes JSON: { "id": "..." }
 * Returns JSON: { "success": true }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_notifications_mark_read(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_notifications_mark_read(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get unread notification counts by category.
 *
 * Takes JSON: {} (empty object)
 * Returns JSON: { "all": N, "social": N, "calls": N, "mentions": N, "system": N }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_notifications_unread_counts(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_notifications_unread_counts(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a plugin bundle from local storage
 * @param {string} plugin_id
 * @returns {any}
 */
export function umbra_wasm_plugin_bundle_delete(plugin_id) {
    const ptr0 = passStringToWasm0(plugin_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_plugin_bundle_delete(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * List all installed plugin bundles (manifests only)
 * @returns {any}
 */
export function umbra_wasm_plugin_bundle_list() {
    const ret = wasm.umbra_wasm_plugin_bundle_list();
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Load a plugin bundle from local storage
 * @param {string} plugin_id
 * @returns {any}
 */
export function umbra_wasm_plugin_bundle_load(plugin_id) {
    const ptr0 = passStringToWasm0(plugin_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_plugin_bundle_load(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Save a plugin bundle to local storage
 * @param {string} plugin_id
 * @param {string} manifest
 * @param {string} bundle
 * @returns {any}
 */
export function umbra_wasm_plugin_bundle_save(plugin_id, manifest, bundle) {
    const ptr0 = passStringToWasm0(plugin_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(manifest, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passStringToWasm0(bundle, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len2 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_plugin_bundle_save(ptr0, len0, ptr1, len1, ptr2, len2);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Delete a value from the plugin KV store
 * @param {string} plugin_id
 * @param {string} key
 * @returns {any}
 */
export function umbra_wasm_plugin_kv_delete(plugin_id, key) {
    const ptr0 = passStringToWasm0(plugin_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_plugin_kv_delete(ptr0, len0, ptr1, len1);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get a value from the plugin KV store
 * @param {string} plugin_id
 * @param {string} key
 * @returns {any}
 */
export function umbra_wasm_plugin_kv_get(plugin_id, key) {
    const ptr0 = passStringToWasm0(plugin_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_plugin_kv_get(ptr0, len0, ptr1, len1);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * List keys in the plugin KV store (optionally filtered by prefix)
 * @param {string} plugin_id
 * @param {string} prefix
 * @returns {any}
 */
export function umbra_wasm_plugin_kv_list(plugin_id, prefix) {
    const ptr0 = passStringToWasm0(plugin_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(prefix, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_plugin_kv_list(ptr0, len0, ptr1, len1);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Set a value in the plugin KV store
 * @param {string} plugin_id
 * @param {string} key
 * @param {string} value
 * @returns {any}
 */
export function umbra_wasm_plugin_kv_set(plugin_id, key, value) {
    const ptr0 = passStringToWasm0(plugin_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len2 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_plugin_kv_set(ptr0, len0, ptr1, len1, ptr2, len2);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Reassemble a file from stored chunks.
 *
 * Takes JSON: { file_id } (manifest must be stored)
 * Returns JSON: { data_b64: string }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_reassemble_file(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_reassemble_file(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Join a relay session for single-scan friend adding (the "scanner" side).
 *
 * Takes a session ID and the offer payload received from the relay,
 * generates an SDP answer, and returns the data for the JS layer to
 * send back to the relay.
 *
 * Returns JSON: { "session_id": "...", "answer_payload": "...", "join_session_message": "..." }
 * @param {string} session_id
 * @param {string} offer_payload
 * @returns {Promise<any>}
 */
export function umbra_wasm_relay_accept_session(session_id, offer_payload) {
    const ptr0 = passStringToWasm0(session_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(offer_payload, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_relay_accept_session(ptr0, len0, ptr1, len1);
    return ret;
}

/**
 * Connect to a relay server
 *
 * Returns JSON with connection info for the JS layer to establish
 * the WebSocket connection and register the DID.
 *
 * Returns JSON: { "connected": true, "relay_url": "...", "did": "..." }
 * @param {string} relay_url
 * @returns {Promise<any>}
 */
export function umbra_wasm_relay_connect(relay_url) {
    const ptr0 = passStringToWasm0(relay_url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_relay_connect(ptr0, len0);
    return ret;
}

/**
 * Create a signaling session on the relay for single-scan friend adding.
 *
 * Generates an SDP offer and returns the data needed for the JS layer to:
 * 1. Send a create_session message to the relay via WebSocket
 * 2. Generate a QR code/link with the session ID
 *
 * Returns JSON: { "relay_url": "...", "did": "...", "offer_payload": "...", "create_session_message": "..." }
 * @param {string} relay_url
 * @returns {Promise<any>}
 */
export function umbra_wasm_relay_create_session(relay_url) {
    const ptr0 = passStringToWasm0(relay_url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_relay_create_session(ptr0, len0);
    return ret;
}

/**
 * Disconnect from the relay server
 *
 * Signals the JS layer to close the WebSocket connection.
 * @returns {Promise<any>}
 */
export function umbra_wasm_relay_disconnect() {
    const ret = wasm.umbra_wasm_relay_disconnect();
    return ret;
}

/**
 * Fetch offline messages from the relay.
 *
 * Returns the fetch_offline message for the JS layer to send via WebSocket.
 * @returns {Promise<any>}
 */
export function umbra_wasm_relay_fetch_offline() {
    const ret = wasm.umbra_wasm_relay_fetch_offline();
    return ret;
}

/**
 * Send a message through the relay (for offline delivery).
 *
 * Returns the relay message for the JS layer to send via WebSocket.
 * @param {string} to_did
 * @param {string} payload
 * @returns {Promise<any>}
 */
export function umbra_wasm_relay_send(to_did, payload) {
    const ptr0 = passStringToWasm0(to_did, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(payload, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_relay_send(ptr0, len0, ptr1, len1);
    return ret;
}

/**
 * Subscribe to events from the Rust backend
 *
 * The callback receives JSON strings with event data:
 * { "domain": "message"|"friend"|"discovery", "type": "...", "data": {...} }
 * @param {Function} callback
 */
export function umbra_wasm_subscribe_events(callback) {
    wasm.umbra_wasm_subscribe_events(callback);
}

/**
 * Apply a sync blob — decrypt and import its contents into the database.
 *
 * Takes JSON: { "blob": "base64..." }
 * Returns JSON: { "imported": { "settings": N, "friends": N, "groups": N, "blocked_users": N } }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_sync_apply_blob(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_sync_apply_blob(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Create an encrypted sync blob from the current database state.
 *
 * Collects preferences, friends, groups, and blocked users, serialises to
 * CBOR, compresses, and encrypts with AES-256-GCM using a key derived from
 * the recovery seed.
 *
 * Takes JSON: { "section_versions"?: { "preferences": N, "friends": N, ... } }
 * Returns JSON: { "blob": "base64...", "sections": { "name": version } }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_sync_create_blob(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_sync_create_blob(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Parse a sync blob and return a summary without applying it.
 *
 * Decrypts and inspects the blob to show what data it contains.
 *
 * Takes JSON: { "blob": "base64..." }
 * Returns JSON: { "v": 1, "updated_at": N, "sections": { "friends": { "v": N, "count": N } } }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_sync_parse_blob(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_sync_parse_blob(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Sign a sync auth challenge nonce with the identity's Ed25519 key.
 *
 * Used for the relay's challenge-response auth flow.
 *
 * Takes JSON: { "nonce": "uuid-string" }
 * Returns JSON: { "signature": "base64...", "public_key": "base64..." }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_sync_sign_challenge(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_sync_sign_challenge(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Accept an incoming transfer request.
 *
 * Takes JSON: { transfer_id, existing_chunks?: number[] }
 * Returns JSON: { message } — the TransferAccept message to send back.
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_transfer_accept(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_transfer_accept(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Cancel a transfer.
 *
 * Takes JSON: { transfer_id, reason? }
 * Returns JSON: { message } — the CancelTransfer message to send.
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_transfer_cancel(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_transfer_cancel(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get the next chunks to send for a transfer (respects flow control).
 *
 * Takes: transfer_id (string)
 * Returns JSON: { chunks: number[], transfer_id }
 * @param {string} transfer_id
 * @returns {any}
 */
export function umbra_wasm_transfer_chunks_to_send(transfer_id) {
    const ptr0 = passStringToWasm0(transfer_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_transfer_chunks_to_send(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get a specific transfer session.
 *
 * Takes: transfer_id (string)
 * Returns JSON: TransferSession | null
 * @param {string} transfer_id
 * @returns {any}
 */
export function umbra_wasm_transfer_get(transfer_id) {
    const ptr0 = passStringToWasm0(transfer_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_transfer_get(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get incomplete transfer sessions (for resume on restart).
 *
 * Returns JSON: TransferSession[]
 * @returns {any}
 */
export function umbra_wasm_transfer_get_incomplete() {
    const ret = wasm.umbra_wasm_transfer_get_incomplete();
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Initiate a file transfer to a peer.
 *
 * Takes JSON: { file_id, peer_did, manifest_json }
 * Returns JSON: { transfer_id, relay_message } — relay_message is the serialized
 * FileTransferMessage for JS to send via relay/WebRTC.
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_transfer_initiate(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_transfer_initiate(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * List all transfer sessions.
 *
 * Returns JSON: TransferSession[]
 * @returns {any}
 */
export function umbra_wasm_transfer_list() {
    const ret = wasm.umbra_wasm_transfer_list();
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Mark a chunk as sent (for RTT tracking).
 *
 * Takes JSON: { transfer_id, chunk_index }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_transfer_mark_chunk_sent(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_transfer_mark_chunk_sent(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Handle an incoming file transfer protocol message.
 *
 * Takes JSON: { from_did, message } where message is a serialized FileTransferMessage.
 * Returns JSON: { response_message? } — optional response to send back.
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_transfer_on_message(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_transfer_on_message(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Pause a transfer.
 *
 * Takes: transfer_id (string)
 * Returns JSON: { message } — the PauseTransfer message to send.
 * @param {string} transfer_id
 * @returns {any}
 */
export function umbra_wasm_transfer_pause(transfer_id) {
    const ptr0 = passStringToWasm0(transfer_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_transfer_pause(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Resume a paused transfer.
 *
 * Takes: transfer_id (string)
 * Returns JSON: { message } — the ResumeTransfer message to send.
 * @param {string} transfer_id
 * @returns {any}
 */
export function umbra_wasm_transfer_resume(transfer_id) {
    const ptr0 = passStringToWasm0(transfer_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_transfer_resume(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Verify a key fingerprint received from a remote peer.
 *
 * Input JSON: { "key_hex": "64-char hex", "remote_fingerprint": "16-char hex" }
 * Returns JSON: { "verified": true/false }
 * @param {string} json
 * @returns {any}
 */
export function umbra_wasm_verify_key_fingerprint(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.umbra_wasm_verify_key_fingerprint(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Get version
 * @returns {string}
 */
export function umbra_wasm_version() {
    let deferred1_0;
    let deferred1_1;
    try {
        const ret = wasm.umbra_wasm_version();
        deferred1_0 = ret[0];
        deferred1_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
}

function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg___wbindgen_debug_string_5398f5bb970e0daa: function(arg0, arg1) {
            const ret = debugString(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_is_function_3c846841762788c1: function(arg0) {
            const ret = typeof(arg0) === 'function';
            return ret;
        },
        __wbg___wbindgen_is_object_781bc9f159099513: function(arg0) {
            const val = arg0;
            const ret = typeof(val) === 'object' && val !== null;
            return ret;
        },
        __wbg___wbindgen_is_string_7ef6b97b02428fae: function(arg0) {
            const ret = typeof(arg0) === 'string';
            return ret;
        },
        __wbg___wbindgen_is_undefined_52709e72fb9f179c: function(arg0) {
            const ret = arg0 === undefined;
            return ret;
        },
        __wbg___wbindgen_string_get_395e606bd0ee4427: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'string' ? obj : undefined;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_throw_6ddd609b62940d55: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg__wbg_cb_unref_6b5b6b8576d35cb1: function(arg0) {
            arg0._wbg_cb_unref();
        },
        __wbg_addIceCandidate_0e2bc82ed0f2fccd: function(arg0, arg1) {
            const ret = arg0.addIceCandidate(arg1);
            return ret;
        },
        __wbg_buffer_60b8043cd926067d: function(arg0) {
            const ret = arg0.buffer;
            return ret;
        },
        __wbg_call_2d781c1f4d5c0ef8: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.call(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_candidate_0c5936b6ab365062: function(arg0, arg1) {
            const ret = arg1.candidate;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_candidate_e2ce064647d50ec1: function(arg0) {
            const ret = arg0.candidate;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_channel_101968002da8aca4: function(arg0) {
            const ret = arg0.channel;
            return ret;
        },
        __wbg_clearTimeout_01406e55473040f6: function(arg0) {
            const ret = clearTimeout(arg0);
            return ret;
        },
        __wbg_close_c66b51cb64599172: function(arg0) {
            arg0.close();
        },
        __wbg_createAnswer_5b8a095b42690e2e: function(arg0) {
            const ret = arg0.createAnswer();
            return ret;
        },
        __wbg_createDataChannel_400b5be9c480ed20: function(arg0, arg1, arg2, arg3) {
            const ret = arg0.createDataChannel(getStringFromWasm0(arg1, arg2), arg3);
            return ret;
        },
        __wbg_createOffer_0b15c6aa78a80829: function(arg0) {
            const ret = arg0.createOffer();
            return ret;
        },
        __wbg_crypto_38df2bab126b63dc: function(arg0) {
            const ret = arg0.crypto;
            return ret;
        },
        __wbg_data_a3d9ff9cdd801002: function(arg0) {
            const ret = arg0.data;
            return ret;
        },
        __wbg_error_a6fa202b58aa1cd3: function(arg0, arg1) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.error(getStringFromWasm0(arg0, arg1));
            } finally {
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            }
        },
        __wbg_executeBatch_efbba6973a10e912: function() { return handleError(function (arg0, arg1) {
            const ret = globalThis.__umbra_sql.executeBatch(getStringFromWasm0(arg0, arg1));
            return ret;
        }, arguments); },
        __wbg_execute_5323f1b30f1f1bee: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = globalThis.__umbra_sql.execute(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
            return ret;
        }, arguments); },
        __wbg_getRandomValues_a1cf2e70b003a59d: function() { return handleError(function (arg0, arg1) {
            globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
        }, arguments); },
        __wbg_getRandomValues_c44a50d8cfdaebeb: function() { return handleError(function (arg0, arg1) {
            arg0.getRandomValues(arg1);
        }, arguments); },
        __wbg_init_2d8e99d6d9887ab5: function() {
            const ret = globalThis.__umbra_sql.init();
            return ret;
        },
        __wbg_instanceof_ArrayBuffer_101e2bf31071a9f6: function(arg0) {
            let result;
            try {
                result = arg0 instanceof ArrayBuffer;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_length_ea16607d7b61445b: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_localDescription_5cf000406d24ae48: function(arg0) {
            const ret = arg0.localDescription;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_log_0c201ade58bb55e1: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.log(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3), getStringFromWasm0(arg4, arg5), getStringFromWasm0(arg6, arg7));
            } finally {
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            }
        },
        __wbg_log_ce2c4456b290c5e7: function(arg0, arg1) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.log(getStringFromWasm0(arg0, arg1));
            } finally {
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            }
        },
        __wbg_mark_b4d943f3bc2d2404: function(arg0, arg1) {
            performance.mark(getStringFromWasm0(arg0, arg1));
        },
        __wbg_measure_84362959e621a2c1: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            let deferred0_0;
            let deferred0_1;
            let deferred1_0;
            let deferred1_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                deferred1_0 = arg2;
                deferred1_1 = arg3;
                performance.measure(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
            } finally {
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
                wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
            }
        }, arguments); },
        __wbg_msCrypto_bd5a034af96bcba6: function(arg0) {
            const ret = arg0.msCrypto;
            return ret;
        },
        __wbg_new_227d7c05414eb861: function() {
            const ret = new Error();
            return ret;
        },
        __wbg_new_5f486cdf45a04d78: function(arg0) {
            const ret = new Uint8Array(arg0);
            return ret;
        },
        __wbg_new_a70fbab9066b301f: function() {
            const ret = new Array();
            return ret;
        },
        __wbg_new_ab79df5bd7c26067: function() {
            const ret = new Object();
            return ret;
        },
        __wbg_new_c0af2ed6c49255fb: function() { return handleError(function (arg0) {
            const ret = new RTCIceCandidate(arg0);
            return ret;
        }, arguments); },
        __wbg_new_from_slice_22da9388ac046e50: function(arg0, arg1) {
            const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_typed_aaaeaf29cf802876: function(arg0, arg1) {
            try {
                var state0 = {a: arg0, b: arg1};
                var cb0 = (arg0, arg1) => {
                    const a = state0.a;
                    state0.a = 0;
                    try {
                        return wasm_bindgen__convert__closures_____invoke__h0028b1ef7214101f(a, state0.b, arg0, arg1);
                    } finally {
                        state0.a = a;
                    }
                };
                const ret = new Promise(cb0);
                return ret;
            } finally {
                state0.a = state0.b = 0;
            }
        },
        __wbg_new_with_configuration_68cc580e8e54dd8a: function() { return handleError(function (arg0) {
            const ret = new RTCPeerConnection(arg0);
            return ret;
        }, arguments); },
        __wbg_new_with_length_825018a1616e9e55: function(arg0) {
            const ret = new Uint8Array(arg0 >>> 0);
            return ret;
        },
        __wbg_node_84ea875411254db1: function(arg0) {
            const ret = arg0.node;
            return ret;
        },
        __wbg_now_16f0c993d5dd6c27: function() {
            const ret = Date.now();
            return ret;
        },
        __wbg_now_e7c6795a7f81e10f: function(arg0) {
            const ret = arg0.now();
            return ret;
        },
        __wbg_performance_3fcf6e32a7e1ed0a: function(arg0) {
            const ret = arg0.performance;
            return ret;
        },
        __wbg_process_44c7a14e11e9f69e: function(arg0) {
            const ret = arg0.process;
            return ret;
        },
        __wbg_prototypesetcall_d62e5099504357e6: function(arg0, arg1, arg2) {
            Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
        },
        __wbg_push_e87b0e732085a946: function(arg0, arg1) {
            const ret = arg0.push(arg1);
            return ret;
        },
        __wbg_queryValue_a9bf45ccfe1a69e9: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            const ret = globalThis.__umbra_sql.queryValue(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_query_31b16288efbc15b3: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            const ret = globalThis.__umbra_sql.query(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_queueMicrotask_0c399741342fb10f: function(arg0) {
            const ret = arg0.queueMicrotask;
            return ret;
        },
        __wbg_queueMicrotask_a082d78ce798393e: function(arg0) {
            queueMicrotask(arg0);
        },
        __wbg_randomFillSync_6c25eac9869eb53c: function() { return handleError(function (arg0, arg1) {
            arg0.randomFillSync(arg1);
        }, arguments); },
        __wbg_random_5bb86cae65a45bf6: function() {
            const ret = Math.random();
            return ret;
        },
        __wbg_readyState_e952f64af84cc2f1: function(arg0) {
            const ret = arg0.readyState;
            return (__wbindgen_enum_RtcDataChannelState.indexOf(ret) + 1 || 5) - 1;
        },
        __wbg_require_b4edbdcf3e2a1ef0: function() { return handleError(function () {
            const ret = module.require;
            return ret;
        }, arguments); },
        __wbg_resolve_ae8d83246e5bcc12: function(arg0) {
            const ret = Promise.resolve(arg0);
            return ret;
        },
        __wbg_sdpMLineIndex_3fa92395295af3fe: function(arg0) {
            const ret = arg0.sdpMLineIndex;
            return isLikeNone(ret) ? 0xFFFFFF : ret;
        },
        __wbg_sdpMid_42cef31288107503: function(arg0, arg1) {
            const ret = arg1.sdpMid;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_sdp_acedb57955e33565: function(arg0, arg1) {
            const ret = arg1.sdp;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_send_0ce014a8c4b53081: function() { return handleError(function (arg0, arg1) {
            arg0.send(arg1);
        }, arguments); },
        __wbg_setLocalDescription_07a0dcd3fc1356ea: function(arg0, arg1) {
            const ret = arg0.setLocalDescription(arg1);
            return ret;
        },
        __wbg_setRemoteDescription_f6ae20a261ee7b22: function(arg0, arg1) {
            const ret = arg0.setRemoteDescription(arg1);
            return ret;
        },
        __wbg_setTimeout_613a21b62dc655a1: function() { return handleError(function (arg0, arg1) {
            const ret = setTimeout(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_set_7eaa4f96924fd6b3: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = Reflect.set(arg0, arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_set_binaryType_eb371761987434c8: function(arg0, arg1) {
            arg0.binaryType = __wbindgen_enum_RtcDataChannelType[arg1];
        },
        __wbg_set_candidate_42cb20c28dc6d5a4: function(arg0, arg1, arg2) {
            arg0.candidate = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_ice_servers_79d9cedfbe60f514: function(arg0, arg1) {
            arg0.iceServers = arg1;
        },
        __wbg_set_id_62a1325071da47fb: function(arg0, arg1) {
            arg0.id = arg1;
        },
        __wbg_set_negotiated_7b720ae280863f12: function(arg0, arg1) {
            arg0.negotiated = arg1 !== 0;
        },
        __wbg_set_onclose_4cf3c22c1efd06d4: function(arg0, arg1) {
            arg0.onclose = arg1;
        },
        __wbg_set_ondatachannel_6bceadff84efc789: function(arg0, arg1) {
            arg0.ondatachannel = arg1;
        },
        __wbg_set_onerror_b6593af87743742f: function(arg0, arg1) {
            arg0.onerror = arg1;
        },
        __wbg_set_onicecandidate_1675289910a093f4: function(arg0, arg1) {
            arg0.onicecandidate = arg1;
        },
        __wbg_set_onmessage_234251e7fb7c6975: function(arg0, arg1) {
            arg0.onmessage = arg1;
        },
        __wbg_set_onopen_d0eb44607253e86f: function(arg0, arg1) {
            arg0.onopen = arg1;
        },
        __wbg_set_ordered_e1c97a68487e0afe: function(arg0, arg1) {
            arg0.ordered = arg1 !== 0;
        },
        __wbg_set_sdp_7f6ec5fc907f5e41: function(arg0, arg1, arg2) {
            arg0.sdp = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_sdp_m_line_index_64e6ac2bddf908b7: function(arg0, arg1) {
            arg0.sdpMLineIndex = arg1 === 0xFFFFFF ? undefined : arg1;
        },
        __wbg_set_sdp_mid_5485885258073796: function(arg0, arg1, arg2) {
            arg0.sdpMid = arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_type_1d0a0fec5f5a03bc: function(arg0, arg1) {
            arg0.type = __wbindgen_enum_RtcSdpType[arg1];
        },
        __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
            const ret = arg1.stack;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_SELF_f207c857566db248: function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_subarray_a068d24e39478a8a: function(arg0, arg1, arg2) {
            const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
            return ret;
        },
        __wbg_then_098abe61755d12f6: function(arg0, arg1) {
            const ret = arg0.then(arg1);
            return ret;
        },
        __wbg_then_9e335f6dd892bc11: function(arg0, arg1, arg2) {
            const ret = arg0.then(arg1, arg2);
            return ret;
        },
        __wbg_versions_276b2795b1c6a219: function(arg0) {
            const ret = arg0.versions;
            return ret;
        },
        __wbg_warn_69424c2d92a2fa73: function(arg0) {
            console.warn(arg0);
        },
        __wbindgen_cast_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 7, function: Function { arguments: [NamedExternref("Event")], shim_idx: 8, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h001df6bdf90d5441, wasm_bindgen__convert__closures_____invoke__h09893a61da8dabda);
            return ret;
        },
        __wbindgen_cast_0000000000000002: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 7, function: Function { arguments: [NamedExternref("MessageEvent")], shim_idx: 8, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h001df6bdf90d5441, wasm_bindgen__convert__closures_____invoke__h09893a61da8dabda_1);
            return ret;
        },
        __wbindgen_cast_0000000000000003: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 7, function: Function { arguments: [NamedExternref("RTCDataChannelEvent")], shim_idx: 8, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h001df6bdf90d5441, wasm_bindgen__convert__closures_____invoke__h09893a61da8dabda_2);
            return ret;
        },
        __wbindgen_cast_0000000000000004: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 7, function: Function { arguments: [NamedExternref("RTCPeerConnectionIceEvent")], shim_idx: 8, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h001df6bdf90d5441, wasm_bindgen__convert__closures_____invoke__h09893a61da8dabda_3);
            return ret;
        },
        __wbindgen_cast_0000000000000005: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 897, function: Function { arguments: [Externref], shim_idx: 1160, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h6cd4a286508c5168, wasm_bindgen__convert__closures_____invoke__h7fe67a96f8924da2);
            return ret;
        },
        __wbindgen_cast_0000000000000006: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 936, function: Function { arguments: [], shim_idx: 937, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__hd471264988bfcda0, wasm_bindgen__convert__closures_____invoke__h985d110834671652);
            return ret;
        },
        __wbindgen_cast_0000000000000007: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
            const ret = getArrayU8FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_0000000000000008: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./umbra_core_bg.js": import0,
    };
}

function wasm_bindgen__convert__closures_____invoke__h985d110834671652(arg0, arg1) {
    wasm.wasm_bindgen__convert__closures_____invoke__h985d110834671652(arg0, arg1);
}

function wasm_bindgen__convert__closures_____invoke__h09893a61da8dabda(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h09893a61da8dabda(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h09893a61da8dabda_1(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h09893a61da8dabda_1(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h09893a61da8dabda_2(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h09893a61da8dabda_2(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h09893a61da8dabda_3(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h09893a61da8dabda_3(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h7fe67a96f8924da2(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen__convert__closures_____invoke__h7fe67a96f8924da2(arg0, arg1, arg2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

function wasm_bindgen__convert__closures_____invoke__h0028b1ef7214101f(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen__convert__closures_____invoke__h0028b1ef7214101f(arg0, arg1, arg2, arg3);
}


const __wbindgen_enum_RtcDataChannelState = ["connecting", "open", "closing", "closed"];


const __wbindgen_enum_RtcDataChannelType = ["arraybuffer", "blob"];


const __wbindgen_enum_RtcSdpType = ["offer", "pranswer", "answer", "rollback"];

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => state.dtor(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            state.dtor(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasm;
function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('umbra_core_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
