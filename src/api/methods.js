const MOST_RECENT = -1;
const ACCOUNT_HISTORY_DEFAULT_LIMIT = 100;
const DEFAULT_VOTES_LIMIT = 10000;
const DEFAULT_VOTES_OFFSET = 0;

module.exports = [
  {
    "api": "witness_api",
    "method": "get_current_median_history_price"
  },
  {
    "api": "witness_api",
    "method": "get_feed_history"
  },
  {
    "api": "witness_api",
    "method": "get_miner_queue"
  },
  {
    "api": "witness_api",
    "method": "get_witness_schedule"
  },
  {
    "api": "witness_api",
    "method": "get_witnesses",
    "params": ["witnessIds"]
  },
  {
    "api": "witness_api",
    "method": "get_witness_by_account",
    "params": ["accountName"]
  },
  {
    "api": "witness_api",
    "method": "get_witnesses_by_vote",
    "params": ["from", "limit"]
  },
  {
    "api": "witness_api",
    "method": "get_witness_count"
  },
  {
    "api": "witness_api",
    "method": "lookup_witness_accounts",
    "params": ["lowerBoundName", "limit"]
  },
  {
    "api": "witness_api",
    "method": "get_active_witnesses"
  },
  {
    "api": "account_history",
    "method": "get_account_history",
    "has_default_values": true,
    "params": [
      "account",
      `from=${MOST_RECENT}`,
      `limit=${ACCOUNT_HISTORY_DEFAULT_LIMIT}`,
      "query={}"
    ]
  },
  {
    "api": "operation_history",
    "method": "get_ops_in_block",
    "params": ["blockNum", "onlyVirtual"]
  },
  {
    "api": "operation_history",
    "method": "get_transaction",
    "params": ["trxId"]
  },
  {
    "api": "tags",
    "method": "get_trending_tags",
    "params": ["afterTag", "limit"]
  },
  {
    "api": "tags",
    "method": "get_tags_used_by_author",
    "params": ["author"]
  },
  {
    "api": "tags",
    "method": "get_discussions_by_payout",
    "params": ["query"]
  },
  {
    "api": "tags",
    "method": "get_discussions_by_trending",
    "params": ["query"]
  },
  {
    "api": "tags",
    "method": "get_discussions_by_created",
    "params": ["query"]
  },
  {
    "api": "tags",
    "method": "get_discussions_by_active",
    "params": ["query"]
  },
  {
    "api": "tags",
    "method": "get_discussions_by_cashout",
    "params": ["query"]
  },
  {
    "api": "tags",
    "method": "get_discussions_by_votes",
    "params": ["query"]
  },
  {
    "api": "tags",
    "method": "get_discussions_by_children",
    "params": ["query"]
  },
  {
    "api": "tags",
    "method": "get_discussions_by_hot",
    "params": ["query"]
  },
  {
    "api": "tags",
    "method": "get_discussions_by_feed",
    "params": ["query"]
  },
  {
    "api": "tags",
    "method": "get_discussions_by_blog",
    "params": ["query"]
  },
  {
    "api": "tags",
    "method": "get_discussions_by_comments",
    "params": ["query"]
  },
  {
    "api": "tags",
    "method": "get_discussions_by_promoted",
    "params": ["query"]
  },
  {
    "api": "tags",
    "method": "get_discussions_by_author_before_date",
    "params": ["author", "startPermlink", "beforeDate", "limit"]
  },
  {
    "api": "tags",
    "method": "get_languages"
  },
  {
    "api": "social_network",
    "method": "get_replies_by_last_update",
    "has_default_values": true,
    "params": [
      "startAuthor",
      "startPermlink",
      "limit",
      `voteLimit=${DEFAULT_VOTES_LIMIT}`,
      `voteOffset=${DEFAULT_VOTES_OFFSET}`,
    ]
  },
  {
    "api": "social_network",
    "method": "get_content",
    "has_default_values": true,
    "params": [
      "author",
      "permlink",
      `voteLimit=${DEFAULT_VOTES_LIMIT}`,
      `voteOffset=${DEFAULT_VOTES_OFFSET}`,
    ]
  },
  {
    "api": "social_network",
    "method": "get_content_replies",
    "has_default_values": true,
    "params": [
      "parent",
      "parentPermlink",
      `voteLimit=${DEFAULT_VOTES_LIMIT}`,
      `voteOffset=${DEFAULT_VOTES_OFFSET}`,
    ]
  },
  {
    "api": "social_network",
    "method": "get_all_content_replies",
    "has_default_values": true,
    "params": [
      "parent",
      "parentPermlink",
      `voteLimit=${DEFAULT_VOTES_LIMIT}`,
      `voteOffset=${DEFAULT_VOTES_OFFSET}`,
    ]
  },
  {
    "api": "social_network",
    "method": "get_active_votes",
    "has_default_values": true,
    "params": [
      "author",
      "permlink",
      `voteLimit=${DEFAULT_VOTES_LIMIT}`,
      `voteOffset=${DEFAULT_VOTES_OFFSET}`,
    ]
  },
  {
    "api": "social_network",
    "method": "get_account_votes",
    "params": ["voter", "from", "voteLimit"]
  },
  {
    "api": "database_api",
    "method": "get_block_header",
    "params": ["blockNum"]
  },
  {
    "api": "database_api",
    "method": "get_block",
    "params": ["blockNum"]
  },
  {
    "api": "database_api",
    "method": "get_config"
  },
  {
    "api": "database_api",
    "method": "get_dynamic_global_properties"
  },
  {
    "api": "database_api",
    "method": "get_chain_properties"
  },
  {
    "api": "database_api",
    "method": "get_hardfork_version"
  },
  {
    "api": "database_api",
    "method": "get_next_scheduled_hardfork"
  },
  {
    "api": "database_api",
    "method": "get_account_count"
  },
  {
    "api": "database_api",
    "method": "get_owner_history",
    "params": ["account"]
  },
  {
    "api": "database_api",
    "method": "get_recovery_request",
    "params": ["account"]
  },
  {
    "api": "database_api",
    "method": "get_escrow",
    "params": ["from", "escrowId"]
  },
  {
    "api": "database_api",
    "method": "get_withdraw_routes",
    "params": ["account", "withdrawRouteType"]
  },
  {
    "api": "database_api",
    "method": "get_account_bandwidth",
    "params": ["account", "bandwidthType"]
  },
  {
    "api": "database_api",
    "method": "get_savings_withdraw_from",
    "params": ["account"]
  },
  {
    "api": "database_api",
    "method": "get_savings_withdraw_to",
    "params": ["account"]
  },
  {
    "api": "database_api",
    "method": "get_conversion_requests",
    "params": ["accountName"]
  },
  {
    "api": "database_api",
    "method": "get_transaction_hex",
    "params": ["trx"]
  },
  {
    "api": "database_api",
    "method": "get_required_signatures",
    "params": ["trx", "availableKeys"]
  },
  {
    "api": "database_api",
    "method": "get_potential_signatures",
    "params": ["trx"]
  },
  {
    "api": "database_api",
    "method": "verify_authority",
    "params": ["trx"]
  },
  {
    "api": "database_api",
    "method": "verify_account_authority",
    "params": ["name", "signers"]
  },
  {
    "api": "database_api",
    "method": "get_accounts",
    "params": ["accountNames"]
  },
  {
    "api": "database_api",
    "method": "lookup_account_names",
    "params": ["accountNames"]
  },
  {
    "api": "database_api",
    "method": "lookup_accounts",
    "params": ["lowerBoundName", "limit"]
  },
  {
    "api": "database_api",
    "method": "get_proposed_transactions",
    "params": ["account", "from", "limit"]
  },
  {
    "api": "database_api",
    "method": "get_database_info"
  },
  {
    "api": "database_api",
    "method": "get_vesting_delegations",
    "params": ["account", "from", "limit", "type"]
  },
  {
    "api": "database_api",
    "method": "get_expiring_vesting_delegations",
    "params": ["account", "from", "limit"]
  },
  {
    "api": "follow",
    "method": "get_followers",
    "params": ["following", "startFollower", "followType", "limit"]
  },
  {
    "api": "follow",
    "method": "get_following",
    "params": ["follower", "startFollowing", "followType", "limit"]
  },
  {
    "api": "follow",
    "method": "get_follow_count",
    "params": ["account"]
  },
  {
    "api": "follow",
    "method": "get_feed_entries",
    "params": ["account", "entryId", "limit"]
  },
  {
    "api": "follow",
    "method": "get_feed",
    "params": ["account", "entryId", "limit"]
  },
  {
    "api": "follow",
    "method": "get_blog_entries",
    "params": ["account", "entryId", "limit"]
  },
  {
    "api": "follow",
    "method": "get_blog",
    "params": ["account", "entryId", "limit"]
  },
  {
    "api": "follow",
    "method": "get_account_reputations",
    "params": ["names"]
  },
  {
    "api": "follow",
    "method": "get_reblogged_by",
    "params": ["author", "permlink"]
  },
  {
    "api": "follow",
    "method": "get_blog_authors",
    "params": ["blogAccount"]
  },
  {
    "api": "account_by_key",
    "method": "get_key_references",
    "params": ["account_name_type"]
  },
  {
    "api": "network_broadcast_api",
    "method": "broadcast_transaction",
    "params": ["trx"]
  },
  {
    "api": "network_broadcast_api",
    "method": "broadcast_transaction_with_callback",
    "params": ["confirmationCallback", "trx"]
  },
  {
    "api": "network_broadcast_api",
    "method": "broadcast_transaction_synchronous",
    "params": ["trx"]
  },
  {
    "api": "network_broadcast_api",
    "method": "broadcast_block",
    "params": ["block"]
  },
  {
    "api": "market_history",
    "method": "get_ticker",
    "params": []
  },
  {
    "api": "market_history",
    "method": "get_volume",
    "params": []
  },
  {
    "api": "market_history",
    "method": "get_order_book",
    "params": ["limit"]
  },
  {
    "api": "market_history",
    "method": "get_order_book_extended",
    "params": ["limit"]
  },
  {
    "api": "market_history",
    "method": "get_trade_history",
    "params": ["start", "end", "limit"]
  },
  {
    "api": "market_history",
    "method": "get_recent_trades",
    "params": ["limit"]
  },
  {
    "api": "market_history",
    "method": "get_market_history",
    "params": ["bucket_seconds" , "start", "end"]
  },
  {
    "api": "market_history",
    "method": "get_market_history_buckets",
    "params": []
  },
  {
    "api": "market_history",
    "method": "get_open_orders",
    "params": ["owner"]
  },
  {
    "api": "private_message",
    "method": "get_inbox",
    "params": ["to", "query"]
  },
  {
    "api": "private_message",
    "method": "get_outbox",
    "params": ["from", "query"]
  },
  {
    "api": "private_message",
    "method": "get_thread",
    "params": ["from", "to", "query"]
  },
  {
    "api": "private_message",
    "method": "get_settings",
    "params": ["owner"]
  },
  {
    "api": "private_message",
    "method": "get_contacts_size",
    "params": ["owner"]
  },
  {
    "api": "private_message",
    "method": "get_contact_info",
    "params": ["owner", "contact"]
  },
  {
    "api": "private_message",
    "method": "get_contacts",
    "params": ["owner", "type", "limit", "offset"]
  },
]
