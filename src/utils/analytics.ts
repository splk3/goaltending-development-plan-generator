export {};

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set' | 'get' | 'consent' | string,
      action: string,
      params?: Record<string, any>
    ) => void;
  }
}

type EventType =
  | 'generate_plan'
  | 'generate_journal'
  | 'download_drill'
  | 'download_material';

// Specific interfaces for each event type's parameters
interface GeneratePlanParams {
  type: 'individual' | 'team';
  team_name?: string;
  team_name_provided?: boolean;
  age_group?: string;
  skill_level?: string;
  num_practices?: number;
}

interface GenerateJournalParams {
  team_name?: string;
}

interface DownloadDrillParams {
  drill_name: string;
  age_group: string;
  skill_level: string;
}

interface DownloadMaterialParams {
  file_name: string;
  title: string;
}

type AnalyticsParams = 
  | GeneratePlanParams 
  | GenerateJournalParams 
  | DownloadDrillParams 
  | DownloadMaterialParams;

/**
 * Tracks user events with Google Analytics.
 * 
 * This function sends events to Google Analytics (gtag) when available,
 * or logs them to the console in development mode when gtag is not loaded.
 * 
 * @param action - The type of event to track (e.g., 'generate_plan', 'download_drill')
 * @param params - Event-specific parameters that provide context about the user action
 * 
 * @example
 * ```typescript
 * // Track an individual plan generation
 * trackEvent('generate_plan', {
 *   type: 'individual',
 *   team_name: 'Hawks U12'
 * });
 * 
 * // Track a drill download
 * trackEvent('download_drill', {
 *   drill_name: 'Butterfly Slides',
 *   age_group: 'U12',
 *   skill_level: 'Intermediate'
 * });
 * ```
 */
export const trackEvent = (
  action: EventType,
  params?: AnalyticsParams
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params);
  } else {
    // Log to console in development if gtag is missing
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics] Event: ${action}`, params);
    }
  }
};
