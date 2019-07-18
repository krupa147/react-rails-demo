class JsonWebToken
    class << self
      def encode(payload)
        payload = { email: payload, time: Time.now.utc }
        JWT.encode(payload, Rails.application.secrets.secret_key_base)
      end
   
      def decode(token)
        payload_hash = JWT.decode(token, Rails.application.secrets.secret_key_base)
        HashWithIndifferentAccess.new payload_hash
        payload_hash[:email]
      rescue
        nil
      end
    end
   end